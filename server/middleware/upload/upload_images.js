import multer from "multer";
import { v4 as uuidv4 } from "uuid";

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/post/images"); // Define the destination folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName); // Define the file name
  },
});

// Initialize Multer upload middleware
const upload = multer({ storage: storage });

export default upload;
