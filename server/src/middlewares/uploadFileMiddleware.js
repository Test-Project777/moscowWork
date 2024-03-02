const multer = require('multer');
const fs = require('fs');

const uploadDir = 'public/images/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = `${now.getMinutes().toString().padStart(2, '0')}-${now
      .getSeconds()
      .toString()
      .padStart(2, '0')}`;
    cb(null, `photo-${date}-${time}.${file.mimetype.split('/')[1]}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
});

module.exports = upload;
