import { configureStore } from '@reduxjs/toolkit'
import link from './slice/recipie'

export const store = configureStore({
  reducer: {
    link:link
    
  },
})