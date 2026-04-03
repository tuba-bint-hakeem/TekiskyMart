import customerModel from "../models/customerModel.js";
import bcrypt from "bcrypt";

// Create a new customer
 export const createCustomer = async (data) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newCustomer = new customerModel({
      ...data,
      password: hashedPassword
    });

    await newCustomer.save();
    return newCustomer;
  } catch (error) {
    throw new Error("Error creating customer: " + error.message);
  }
};

// Get customer by ID
 export const getCustomerById = async (customerId) => {
  try {
    const customer = await customerModel.findById(customerId)
      .populate("wishlist") // Optional: Populate wishlist with product details
      .populate("orders"); // Optional: Populate orders with order details

    if (!customer) {
      throw new Error("Customer not found");
    }

    return customer;
  } catch (error) {
    throw new Error("Error fetching customer: " + error.message);
  }
};

// Get customer by email (for login)
 export const getCustomerByEmail = async (email) => {
  try {
    const customer = await customerModel.findOne({ email });
    if (!customer) {
      throw new Error("Customer not found");
    }
    return customer;
  } catch (error) {
    throw new Error("Error fetching customer: " + error.message);
  }
};

// Update customer details
 export const updateCustomer = async (customerId, data) => {
  try {
    const updatedCustomer = await customerModel.findByIdAndUpdate(
      customerId,
      { $set: data },
      { new: true } // Returns the modified document rather than the original
    );
    if (!updatedCustomer) {
      throw new Error("Customer not found");
    }
    return updatedCustomer;
  } catch (error) {
    throw new Error("Error updating customer: " + error.message);
  }
};

// Delete a customer
 export const deleteCustomer = async (customerId) => {
  try {
    const deletedCustomer = await customerModel.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      throw new Error("Customer not found");
    }
    return deletedCustomer;
  } catch (error) {
    throw new Error("Error deleting customer: " + error.message);
  }
};

// Add product to wishlist
export const addToWishlist = async (customerId, productId) => {
  try {
    const customer = await customerModel.findById(customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    customer.wishlist.push(productId);
    await customer.save();
    return customer;
  } catch (error) {
    throw new Error("Error adding to wishlist: " + error.message);
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (customerId, productId) => {
  try {
    const customer = await customerModel.findById(customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    customer.wishlist = customer.wishlist.filter(
      (item) => item.toString() !== productId.toString()
    );
    await customer.save();
    return customer;
  } catch (error) {
    throw new Error("Error removing from wishlist: " + error.message);
  }
};

