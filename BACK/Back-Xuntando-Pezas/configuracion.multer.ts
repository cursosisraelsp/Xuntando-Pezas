import multer from 'multer';
import path from 'path';
export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'imaxenes'))
    },
    filename: function (req, files, cb) {
      cb(null, files.originalname)
    }
  })