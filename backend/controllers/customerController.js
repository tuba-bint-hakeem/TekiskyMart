import {createCustomer,getCustomerById,getCustomerByEmail,updateCustomer,deleteCustomer,addToWishlist,removeFromWishlist} from "../services/customerService.js"; // Import the services

// Create a new customer
export const createCustomerController = async (req, res) => {
  try {
    const newCustomer = await createCustomer(req.body);
    res.status(201).json({
      message: "Customer created successfully",
      customer: newCustomer
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};


// Get customer by ID
export const getCustomerByIdController = async (req, res) => {
  try {
    const customer = await getCustomerById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get customer by email (for login)
export const getCustomerByEmailController = async (req, res) => {
  try {
    const customer = await getCustomerByEmail(req.body.email);
    res.status(200).json(customer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update customer details
export const updateCustomerController = async (req, res) => {
  try {
    const updatedCustomer = await updateCustomer(req.params.id, req.body);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a customer
export const deleteCustomerController = async (req, res) => {
  try {
    const deletedCustomer = await deleteCustomer(req.params.id);
    res.status(200).json({
      message: "Customer deleted successfully",
      customer: deletedCustomer
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add product to wishlist
export const addToWishlistController = async (req, res) => {
  try {
    const updatedCustomer = await addToWishlist(req.params.id, req.body.productId);
    res.status(200).json({
      message: "Product added to wishlist successfully",
      customer: updatedCustomer
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove product from wishlist
export const removeFromWishlistController = async (req, res) => {
  try {
    const updatedCustomer = await removeFromWishlist(req.params.id, req.body.productId);
    res.status(200).json({
      message: "Product removed from wishlist successfully",
      customer: updatedCustomer
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
