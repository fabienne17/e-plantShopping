
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        //console.log(action);
        const newItem = action.payload;
        // find item in cart
        const itemInCart = state.items.find((item) => item.name === newItem.name);
        if(itemInCart){
          itemInCart.quantity++;
        } else { 
          newItem.quantity = 1;
          state.items.push(newItem);;
        }
    },
    removeItem: (state, action) => {
        const newItem = action.payload;
        // find item in cart
        const itemInCart = state.items.find((item) => item.name === newItem.name);
        if(itemInCart){
          state.items.splice(state.items.indexOf(itemInCart), 1)
        }
      
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const itemInCart = state.items.find((item) => item.name === name);
      if(itemInCart){
        itemInCart.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
