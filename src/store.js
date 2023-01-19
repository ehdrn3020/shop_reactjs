import { configureStore, createSlice } from '@reduxjs/toolkit'
import user_val from './stores/userSlice';
import wishlist from './datas/wishlist';

let stock_val = createSlice({
  name: 'stock',
  initialState : [10,11,12]
})

let wishlist_val = createSlice({
  name: 'wishlist',
  initialState : wishlist
})

export default configureStore({
  reducer: { 
    user : user_val.reducer,
    stock : stock_val.reducer,
    wishlist : wishlist_val.reducer
  }
}) 