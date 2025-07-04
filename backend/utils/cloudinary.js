import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imgStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "BlogSpot",
    allowed_formats: ["jpg", "png", "jpeg "],
    transformation: [{ fetch_format: "auto" }, { quality: "auto" }],
  },
});

export { cloudinary, imgStorage };
