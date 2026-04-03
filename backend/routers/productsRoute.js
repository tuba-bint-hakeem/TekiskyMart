
import express from "express";
import multer from "multer";
import path from "path";
import { getProduct, createProduct ,updateProduct,deleteProduct,getProductById} from "../controllers/productController.js";

const productRoute = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure "uploads" folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Routes
productRoute.get("/getProduct", getProduct);

productRoute.get("/getProductById/:productId",getProductById);
productRoute.post("/createProduct", upload.array("images", 5), createProduct); // Accepts up to 5 images
productRoute.put('/update/:id',updateProduct)
productRoute.delete("/delete/:id", deleteProduct); 

export default productRoute;

