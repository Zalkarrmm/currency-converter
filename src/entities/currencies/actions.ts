import { createAsyncThunk } from "@reduxjs/toolkit"
import $api, { APIRoutesBase } from "../../shared/lib/api/api"
import { ConvertParams } from "./types"

export const getLatest = createAsyncThunk(
  'currecies/getLatest',
  async (base_currency: string, thunkApi) => {
    try {
      const response = await $api.get(`${APIRoutesBase.LATEST}/${base_currency}`)
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)

export const convertCurrencies = createAsyncThunk(
  'currecies/convertCurrencies',
  async (params: ConvertParams, thunkApi) => {
    try {
      const response = await $api.get(`${APIRoutesBase.CONVERT}/${params.from}/${params.to}`)
      return response
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)