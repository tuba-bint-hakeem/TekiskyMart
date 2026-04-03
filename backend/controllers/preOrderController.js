import { createPreOrder, getPreOrders, updatePreOrderStatus } from '../services/preOrderService.js';

// Create a new pre-order
export const createPreOrderController = async (req, res) => {
  const { customerId, productId, quantity } = req.body;

  try {
    const preOrderData = { customerId, productId, quantity };
    const newPreOrder = await createPreOrder(preOrderData);
    res.status(201).json({ message: 'Pre-order created successfully', preOrder: newPreOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all pre-orders
export const getPreOrdersController = async (req, res) => {
  try {
    const preOrders = await getPreOrders();
    res.status(200).json({ preOrders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update pre-order status (accept/reject)
export const updatePreOrderStatusController = async (req, res) => {
  const { preOrderId, status } = req.params;

  try {
    const updatedPreOrder = await updatePreOrderStatus(preOrderId, status);
    res.status(200).json({ message: 'Pre-order status updated successfully', preOrder: updatedPreOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
