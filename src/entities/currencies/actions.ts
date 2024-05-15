import { createAsyncThunk } from "@reduxjs/toolkit"
import $api, { APIRoutesBase, app_id } from "../../shared/lib/api/api"

export const getCurrencies = createAsyncThunk(
  'currecies/getCurrencies',
  async (base_currency: string, thunkApi) => {
    try {
      return await $api.get(`${APIRoutesBase.LATEST}.json?app_id=${app_id}&base=${base_currency}`)
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)