const express = require('express');
const uploadFileMiddleware = require('../middlewares/uploadFileMiddleware');
const uploadRouter = express.Router();

uploadRouter.post('/', uploadFileMiddleware.single('file'), (req, res) => {
  try {
    if (req.file) {
      const filePath = req.file.path.replace('public', '');
      res.json({ path: filePath });
    } else {
      res.status(400).json({ error: 'No file uploaded' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = uploadRouter;
