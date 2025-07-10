// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: []
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cartItems.find(item => item.id === action.payload.id);
//       if (!existingItem) {
//         state.cartItems.push(action.payload);
//       } else {
//         existingItem.quantity = (existingItem.quantity || 1) + 1;
//       }
//     }
//   }
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
      // If item exists, do nothing (prevent adding again)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;