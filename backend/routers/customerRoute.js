import express from "express";
import {createCustomerController,getCustomerByIdController,getCustomerByEmailController,updateCustomerController,
deleteCustomerController,addToWishlistController,removeFromWishlistController} from "../controllers/customerController.js";

const customerRoute = express.Router();

// POST: Create a new customer
customerRoute.post("/create", createCustomerController);

// GET: Get customer by ID
customerRoute.get("/:id", getCustomerByIdController);

// POST: Get customer by email (login)
customerRoute.post("/login", getCustomerByEmailController);

// PUT: Update customer details
customerRoute.put("/update/:id", updateCustomerController);

// DELETE: Delete customer
customerRoute.delete("/delete/:id", deleteCustomerController);

// POST: Add product to wishlist
customerRoute.post("/addproduct/:id/wishlist", addToWishlistController);

// DELETE: Remove product from wishlist
customerRoute.delete("/removeproduct/:id/wishlist", removeFromWishlistController);

export default customerRoute;
