import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // Check for exact match: ID + Size + Color
      const existingItemIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor,
      );

      if (existingItemIndex > -1) {
        // If it exists, update the quantity of that specific version
        const newState = [...state];
        newState[existingItemIndex].qty += action.payload.qty;
        return newState;
      }
      // If it's new, add it to the array
      return [...state, action.payload];
    }
    case "REMOVE_ITEM":
      // Filter by unique combination or unique key if you add one
      return state.filter((i, index) => index !== action.payload);
    case "UPDATE_QTY":
      return state.map((i, index) =>
        index === action.payload.index ? { ...i, qty: action.payload.qty } : i,
      );
    case "CLEAR_CART":
      return [];
    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const saved = localStorage.getItem("novashop-cart");
    if (saved) dispatch({ type: "LOAD_CART", payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem("novashop-cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeItem = (index) =>
    dispatch({ type: "REMOVE_ITEM", payload: index });
  const updateQty = (index, qty) =>
    dispatch({ type: "UPDATE_QTY", payload: { index, qty } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
