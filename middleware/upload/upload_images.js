import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const uploadImages = (fieldName, folderName) => {
  // Set up Multer storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("req.body", req.body);
      // if (req.body.type === "individual") {
      //   console.log("hello");
      //   folderName = "user_profiles";
      // } else if (req.body.type === "company") {
      //   folderName = "company_profiles";
      // }
      cb(null, `uploads/${folderName}`); // Define the destination folder where uploaded files will be stored
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
  return upload.array(fieldName);
};

const uploadImage = (fieldName, folderName) => {
  // Set up Multer storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads/${folderName}`); // Define the destination folder where uploaded files will be stored
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
  return upload.single(fieldName);
};

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
});

export { uploadImages, uploadImage, upload };
