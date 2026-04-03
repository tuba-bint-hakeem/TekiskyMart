import CartService from "../services/cartService.js";

// Add an item to the cart
export const addToCartController = async (req, res) => {
  const { productId, name, price, quantity = 1 } = req.body;

  try {
    if (!productId || !name || !price) {
      return res.status(400).json({ message: "Missing required fields: productId, name, price." });
    }

    const updatedCart = await CartService.addToCart({ productId, name, price, quantity });
    res.status(201).json({ message: "Item added to cart successfully", cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all cart items
export const getCartController = async (req, res) => {
  try {
    const cart = await CartService.getCart();
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove an item from the cart
export const removeFromCartController = async (req, res) => {
  const { productId } = req.params;

  try {
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    const updatedCart = await CartService.removeFromCart(productId);
    res.status(200).json({ message: "Item removed from cart successfully", cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear the entire cart
export const clearCartController = async (req, res) => {
  try {
    const updatedCart = await CartService.clearCart();
    res.status(200).json({ message: "Cart cleared successfully", cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
