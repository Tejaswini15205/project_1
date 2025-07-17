// backend/middleware/multer.js
import multer from "multer";

const storage = multer.memoryStorage();

export const singleUpload = multer({ storage }).single("file");

//avater=file chang eaccordingly