import { configureStore } from '@reduxjs/toolkit'
import splitReducer from '../features/splitSlice'

export default configureStore({
  reducer: {
    spliter: splitReducer
  }
})