const express = require("express");
const router = express.Router();
const {
  createEmailTemplate,
  getAllEmailTemplates,
  updateEmailTemplate,
  deleteEmailTemplate
} = require("../controllers/emailTemplateController");

router.post("/", createEmailTemplate);
router.get("/", getAllEmailTemplates);
router.put("/:id", updateEmailTemplate);
router.delete("/:id", deleteEmailTemplate);

module.exports = router;
