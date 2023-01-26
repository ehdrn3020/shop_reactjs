import { configureStore, createSlice } from '@reduxjs/toolkit'
import user_val from './stores/userSlice';
import wishlist from './datas/wishlist';

let stock_val = createSlice({
  name: 'stock',
  initialState : [10,11,12]
})

let wishlist_val = createSlice({
  name: 'wishlist',
  initialState : wishlist,
  reducers: {
    addCount(state, action){
      let num = state.findIndex((item)=> { return item.id == action.payload});
      state[num].count++;
    },
    addItem(state, action){
      state.push(action.payload);
    }
  }
})
export let { addCount, addItem } = wishlist_val.actions;

export default configureStore({
  reducer: { 
    user : user_val.reducer,
    stock : stock_val.reducer,
    wishlist : wishlist_val.reducer
  }
}) 