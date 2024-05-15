import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ConvertResponse, CurrenciesInitialState, GetLatestResponse } from "./types"
import { convertCurrencies, getLatest } from "./actions"
import { objToArr } from "../../shared/lib/utils/helper"

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
    builder.addCase(convertCurrencies.fulfilled, (state, action: PayloadAction<ConvertResponse>) => {
      state.loading = false
      state.conversion_rate = action.payload.data.conversion_rate
    })
    builder.addCase(convertCurrencies.rejected, state => {
      state.loading = false
    })

    builder.addCase(getLatest.pending, state => {
      state.loading = true
    })
    builder.addCase(getLatest.fulfilled, (state, action: PayloadAction<GetLatestResponse>) => {
      state.currencies = objToArr(action.payload.data.conversion_rates)
      state.loading = false
    })
    builder.addCase(getLatest.rejected, state => {
      state.loading = false
    })
  }
})

export default CurrenciesSlice.reducer

export const { setBaseCurrency } = CurrenciesSlice.actions