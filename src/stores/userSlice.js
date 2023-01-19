import { createSlice } from '@reduxjs/toolkit'


let user_val = createSlice({
    name: 'user',
    initialState : { name : 'kang', age: 20 },
    reducers: {
      changeName(state){
        state.name = 'john'
      },
      increase(state, action){
        state.age += action.payload
      },
    }
  })
  export let { changeName, increase } = user_val.actions

  export default user_val;
