const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getAll, create, update, remove
} = require('../controllers/webCheckinController');

// Image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.get('/', getAll);
router.post('/', upload.single('image'), create);
router.put('/:id', upload.single('image'), update);
router.delete('/:id', remove);

module.exports = router;
