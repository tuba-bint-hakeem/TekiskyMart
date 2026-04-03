
import Cart from "../models/cartModel.js";

class CartService {
  // Add an item to the cart
  async addToCart(product) {
    try {
      let existingItem = await Cart.findOne({ productId: product.productId });

      if (existingItem) {
        existingItem.quantity += product.quantity;
        await existingItem.save();
      } else {
        const newItem = new Cart(product);
        await newItem.save();
      }

      return await Cart.find();
    } catch (error) {
      throw new Error(`Error adding item to cart: ${error.message}`);
    }
  }

  // Get all cart items
  async getCart() {
    try {
      return await Cart.find();
    } catch (error) {
      throw new Error(`Error fetching cart: ${error.message}`);
    }
  }

  // Remove an item from the cart
  async removeFromCart(productId) {
    try {
      await Cart.deleteOne({ productId });
      return await Cart.find();
    } catch (error) {
      throw new Error(`Error removing item from cart: ${error.message}`);
    }
  }

  // Clear the entire cart
  async clearCart() {
    try {
      await Cart.deleteMany({}); // Deletes all items from the cart collection
      return [];  // Returns an empty array to indicate the cart is cleared
    } catch (error) {
      throw new Error(`Error clearing cart: ${error.message}`); // Handles errors
    }
  }
}

export default new CartService();
