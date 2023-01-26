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
      // Check Already Cart
      let item = state.findIndex((item)=>{ return item.id == action.payload.id})
      if(item >= 0){
        state[item].count++;
      } else {
        state.push(action.payload);
      }
    },
    subCount(state, action){
      let num = state.findIndex((item)=> { return item.id == action.payload});
      if(state[num].count <= 1) { 
        state.splice(num,1); 
      } else {
        state[num].count--;
      }
    },
  }
})
export let { addCount, addItem, subCount } = wishlist_val.actions;

export default configureStore({
  reducer: { 
    user : user_val.reducer,
    stock : stock_val.reducer,
    wishlist : wishlist_val.reducer
  }
}) 