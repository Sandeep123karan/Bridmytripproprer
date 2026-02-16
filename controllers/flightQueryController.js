const FlightQuery = require("../models/flightQueryModel");
const ExcelJS = require("exceljs");

// Get paginated queries
exports.getFlightQueries = async (req, res) => {
  try {
    const { key, value, fromDate, toDate, page = 1, limit = 10 } = req.query;
    let query = {};

    if (key && value) {
      query[key] = new RegExp(value, "i");
    }

    if (fromDate && toDate) {
      query.createdAt = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      };
    }

    const queries = await FlightQuery.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await FlightQuery.countDocuments(query);

    res.json({ queries, total });
  } catch (error) {
    console.error("❌ Error fetching queries:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a query
exports.deleteFlightQuery = async (req, res) => {
  try {
    await FlightQuery.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Query deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting query:", err.message);
    res.status(500).json({ message: "Failed to delete query" });
  }
};

// Export all queries to Excel
exports.exportFlightQueriesToExcel = async (req, res) => {
  try {
    const queries = await FlightQuery.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Flight Queries");

    worksheet.columns = [
      { header: "Web Partner", key: "webPartner" },
      { header: "Email", key: "email" },
      { header: "Mobile", key: "mobile" },
      { header: "OBClass", key: "obClass" },
      { header: "IBClass", key: "ibClass" },
      { header: "Origin", key: "origin" },
      { header: "Destination", key: "destination" },
      { header: "Created", key: "created" }
    ];

    queries.forEach((q) => worksheet.addRow(q));

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=flight_queries.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("❌ Excel Export Error:", err.message);
    res.status(500).json({ message: "Failed to export to Excel" });
  }
};
