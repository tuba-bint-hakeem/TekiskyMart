import express from "express";
import { createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder } from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/create", createOrder);
orderRoute.get("/getallorder", getAllOrders);
orderRoute.get("/getorder/:id", getOrderById);
orderRoute.put("/update/:id/status", updateOrderStatus);
orderRoute.delete("/delete/:id", deleteOrder);

export default orderRoute;
