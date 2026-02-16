// const Activity = require("../models/activityModel");

// exports.addActivity = async (req, res) => {
//   try {
//     const { name, location, price, description } = req.body;

//     const imageURL = req.file ? req.file.path : null;   // Cloudinary file URL

//     const newActivity = await Activity.create({
//       name,
//       location,
//       price,
//       description,
//       image: imageURL,
//     });

//     res.json({
//       message: "Activity Added Successfully ✔️",
//       activity: newActivity,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };
const Activity = require("../models/activityModel");

// CREATE Activity -------------------
exports.addActivity = async (req, res) => {
  try {
    const { name, location, price, description } = req.body;
    const imageURL = req.file ? req.file.path : null;

    const newActivity = await Activity.create({
      name,
      location,
      price,
      description,
      image: imageURL,
    });

    res.json({ message: "Activity Added Successfully ✔️", activity: newActivity });

  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// READ All Activities ----------------
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
};

// READ Single Activity ----------------
exports.getSingleActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.json(activity);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activity" });
  }
};

// UPDATE Activity ---------------------
exports.updateActivity = async (req, res) => {
  try {
    const { name, location, price, description, status } = req.body;

    let updatedData = {
      name,
      location,
      price,
      description,
      status,
    };

    if (req.file) {
      updatedData.image = req.file.path; // Cloudinary new image
    }

    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json({
      message: "Activity Updated Successfully ✔️",
      activity: updatedActivity,
    });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// DELETE Activity ---------------------
exports.deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    res.json({ message: "Activity Deleted Successfully ❌" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
