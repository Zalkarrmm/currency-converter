import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ConvertRequest, CurrenciesInitialState } from "./types"
import { convertCurrencies } from "./actions"

const initialState: CurrenciesInitialState = {
  currencies: [],
  base_currency: 'USD',
  conversion_rate: 0,
  loading: false
}

export const CurrenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.base_currency = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(convertCurrencies.pending, state => {
      state.loading = true
    })
    builder.addCase(convertCurrencies.fulfilled, (state, action: PayloadAction<ConvertRequest>) => {
      state.loading = false
      state.conversion_rate = action.payload.data.conversion_rate
    })
    builder.addCase(convertCurrencies.rejected, state => {
      state.loading = false
    })
  }
})

export default CurrenciesSlice.reducer