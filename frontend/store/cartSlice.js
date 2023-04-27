import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    wishListItems : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return {
            ...p,
            [action.payload.key]: action.payload.val,
          };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      console.log(action, "action");
      console.log(state, "cartItems slice");
      state.cartItems = state.cartItems.filter(
        
        (p) => p.id !== action.payload.id
      );
    },
    
    addToWishList: (state, action) => {
      const item = state.wishListItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.wishListItems.push({ ...action.payload, quantity: 1 });
      }
    },
    wishlistLength:(state, action)=>{
      
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart, addToWishList } = cartSlice.actions;

export default cartSlice.reducer;
