import express from 'express';
import { createPreOrderController, getPreOrdersController, updatePreOrderStatusController } from '../controllers/preOrderController.js';
import { authenticateToken } from '../auth/jwtToken.js'; // assuming you have a token authentication function

const preOrderRoute = express.Router();

// Route to create a pre-order
preOrderRoute.post('/order', createPreOrderController);

// Route to get all pre-orders (authentication required)
preOrderRoute.get('/getPreOrders', authenticateToken, getPreOrdersController);

// Route to update pre-order status (accept/reject) (authentication required)
preOrderRoute.put('/update/:preOrderId/:status', authenticateToken, updatePreOrderStatusController);

export default preOrderRoute;
