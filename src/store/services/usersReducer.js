import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usersList:[]
}

const usersSlice = createSlice({
  name: 'users', 
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
  },
})


export const { 
  setUsers
} = usersSlice.actions

export default usersSlice.reducer