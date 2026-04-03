import productModel from "../models/productModel.js";
import { getProductService } from "../services/productService.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
  try {
    const products = await getProductService();

    // Sending a successful response with products
    res.status(200).json({ success: true, products});

  } catch (error) {
    console.error("Error in getting products:", error);
    
    // Sending an error response
    res.status(500).json({ status: "error", message: "Error in getting products" });
  }
};

//get one product

export const getProductById = async (req, res) => {
    try {
        const { productId } = req.params; //  Correctly extract product ID

        //  Validate if `productId` is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = await productModel.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ success: true, product }); //  Consistent JSON response
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



export const createProduct = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { name, heading, offerprice, description, mrp, WeightSize, category, Seller, images } = req.body;

        // If files are uploaded, handle them
        if (req.files && req.files.length > 0) {
            imagePaths = req.files.map((file) => file.path); // Store image paths from file uploads
        }
        // Create product with the given data
        const product = new productModel({
            name,
            heading,
            offerprice,
            description,
            mrp,
            WeightSize,
            category,
            Seller,
            images, // Store the array of image paths (or URLs)
        });

        await product.save();

        res.status(201).json({ success: true, message: "Product created successfully", product });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//Update Product


export const updateProduct = async (req, res) => {
    try {
        // Extract the product ID from the request params
        const { id } = req.params;
        // Extract the fields to update from the request body
        const { name, heading, offerprice, description, mrp, WeightSize, category, Seller, images } = req.body;

        // Find the product by ID
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update the product fields
        product.name = name || product.name;
        product.heading = heading || product.heading;
        product.offerprice = offerprice || product.offerprice;
        product.description = description || product.description;
        product.mrp = mrp || product.mrp;
        product.WeightSize = WeightSize || product.WeightSize;
        product.category = category || product.category;
        product.Seller = Seller || product.Seller;
        product.images = images || product.images;  // Updating images (could be an array)

        // Save the updated product
        await product.save();

        res.status(200).json({ success: true, message: "Product updated successfully", product });

    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//Delete Products

export const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params; // Extract product ID from URL

      // Find and delete the product by ID
      const deletedProduct = await productModel.findByIdAndDelete(id);

      if (!deletedProduct) {
          return res.status(404).json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, message: "Product deleted successfully", deletedProduct });
  } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ success: false, message: "Error deleting product" });
  }
};


  