import {createSlice} from '@reduxjs/toolkit'
import StoreData from '../Components/StoreData'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item: StoreData,
        cart: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addtoCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload)
      if (find >= 0) {
        state.cart[find].totalQuantity += 1
      }
      else{
        state.cart.push(action.payload);
      }
    },
      removeCart : (state, action) =>{
          state.cart.splice(action.payload, 1)  
      },
    },
  }) 
export const {addtoCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer