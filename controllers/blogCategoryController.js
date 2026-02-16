const BlogCategory = require("../models/BlogCategory");
const path = require("path");

exports.createBlogCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    const newCategory = new BlogCategory({
      title,
      image,
      createdAt: new Date()
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogCategories = async (req, res) => {
  const categories = await BlogCategory.find().sort({ createdAt: -1 });
  res.json(categories);
};

exports.updateBlogCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const updateData = { title, modifiedAt: new Date() };

    if (req.file) updateData.image = req.file.filename;

    const updated = await BlogCategory.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlogCategory = async (req, res) => {
  await BlogCategory.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.toggleStatus = async (req, res) => {
  const category = await BlogCategory.findById(req.params.id);
  category.status = category.status === "Active" ? "Inactive" : "Active";
  category.modifiedAt = new Date();
  await category.save();
  res.json(category);
};
