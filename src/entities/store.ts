import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CurrenciesSlice from './currencies'

const RootReducers = combineReducers({
  curencies: CurrenciesSlice,
})

export const store = configureStore({
  reducer: RootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof RootReducers>