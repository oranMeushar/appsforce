import { configureStore } from '@reduxjs/toolkit'
import users from './store/services/usersReducer';

export const store = configureStore({
  reducer: {
    users,
  },
})









