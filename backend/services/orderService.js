import Order from "../models/orderModel.js";

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all orders
export const getAllOrders = async () => {
  try {
    return await Order.find().populate("userId", "name email");
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get order by ID
export const getOrderById = async (orderId) => {
  try {
    return await Order.findById(orderId).populate("userId", "name email");
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
  try {
    return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete order
export const deleteOrder = async (orderId) => {
  try {
    return await Order.findByIdAndDelete(orderId);
  } catch (error) {
    throw new Error(error.message);
  }
};
