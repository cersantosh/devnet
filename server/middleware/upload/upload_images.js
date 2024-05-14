import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const uploadImages = (folderName, fieldName) => {
  // Set up Multer storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads/post/${folderName}`); // Define the destination folder where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const originalName = file.originalname;
      const extension = originalName.slice(originalName.lastIndexOf("."));
      const uniqueName = `${uuidv4()}${extension}`;
      cb(null, uniqueName); // Define the file name
    },
  });

  // Initialize Multer upload middleware
  const upload = multer({ storage: storage });
  return upload.array(fieldName)
};

export default uploadImages;
