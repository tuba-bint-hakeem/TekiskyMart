import PreOrder from '../models/preOrderModel.js';

// Create a new pre-order
export const createPreOrder = async (data) => {
  try {
    const newPreOrder = new PreOrder(data);
    await newPreOrder.save();
    return newPreOrder;
  } catch (error) {
    throw new Error('Error creating pre-order: ' + error.message);
  }
};

// Get all pre-orders
export const getPreOrders = async () => {
  try {
    const preOrders = await PreOrder.find().populate('customerId productId');
    return preOrders;
  } catch (error) {
    throw new Error('Error fetching pre-orders: ' + error.message);
  }
};

// Update pre-order status (accept/reject)
export const updatePreOrderStatus = async (preOrderId, status) => {
  try {
    const updatedPreOrder = await PreOrder.findByIdAndUpdate(
      preOrderId,
      { status },
      { new: true }
    );
    if (!updatedPreOrder) {
      throw new Error('Pre-order not found');
    }
    return updatedPreOrder;
  } catch (error) {
    throw new Error('Error updating pre-order status: ' + error.message);
  }
};
