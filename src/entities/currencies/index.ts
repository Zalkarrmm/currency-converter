import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CurrenciesInitialState } from "./types"

const initialState: CurrenciesInitialState = {
  currencies: [],
  base_currency: 'USD'
}

export const CurrenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.base_currency = action.payload
    }
  }
})

export default CurrenciesSlice.reducer