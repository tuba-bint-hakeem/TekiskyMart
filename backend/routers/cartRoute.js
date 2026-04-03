import express from "express";
import {
  addToCartController,
  getCartController,
  removeFromCartController,
  clearCartController,
} from "../controllers/cartController.js";

const cartRoute = express.Router();

cartRoute.get("/", getCartController);
cartRoute.post("/add", addToCartController);
cartRoute.delete("/remove/:productId", removeFromCartController);
cartRoute.delete("/clear", clearCartController);

export default cartRoute;
