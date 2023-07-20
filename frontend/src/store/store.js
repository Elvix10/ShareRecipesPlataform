import { configureStore } from '@reduxjs/toolkit'
import recipie from './slice/recipie'
import auth from './slice/auth'

export const store = configureStore({
  reducer: {
    recipie:recipie,
    auth:auth
    
  },
})