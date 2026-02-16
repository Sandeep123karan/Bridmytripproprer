// const AddHoliday = require("../models/AddHoliday");

// exports.getAllHolidays = async (req, res) => {
//   const data = await AddHoliday.find();
//   res.json(data);
// };

// exports.createHoliday = async (req, res) => {
//   const { body, file } = req;
//   const newData = new AddHoliday({
//     ...body,
//     packageImage: file?.filename,
//     themes: JSON.parse(body.themes || "[]"),
//   });

//   await newData.save();
//   res.json(newData);
// };

// exports.updateHoliday = async (req, res) => {
//   const { file, body } = req;
//   if (file) body.packageImage = file.filename;
//   body.themes = JSON.parse(body.themes || "[]");

//   const updated = await AddHoliday.findByIdAndUpdate(req.params.id, body, { new: true });
//   res.json(updated);
// };

// exports.deleteHoliday = async (req, res) => {
//   await AddHoliday.findByIdAndDelete(req.params.id);
//   res.json({ success: true });
// };
const AddHoliday = require("../models/AddHoliday");

// Get all
exports.getAllHolidays = async (req, res) => {
  try {
    const data = await AddHoliday.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Holiday
exports.createHoliday = async (req, res) => {
  try {
    const { body, file } = req;

    const newData = new AddHoliday({
      ...body,
      packageImage: file ? file.path : null,    // Cloudinary URL
      themes: JSON.parse(body.themes || "[]"),
    });

    await newData.save();
    res.json(newData);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Holiday
exports.updateHoliday = async (req, res) => {
  try {
    const { body, file } = req;

    const updateData = {
      ...body,
      themes: JSON.parse(body.themes || "[]"),
    };

    if (file) updateData.packageImage = file.path; // Cloudinary URL

    const updated = await AddHoliday.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Holiday
exports.deleteHoliday = async (req, res) => {
  try {
    await AddHoliday.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
