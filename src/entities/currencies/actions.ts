import { createAsyncThunk } from "@reduxjs/toolkit"
import $api, { APIRoutesBase } from "../../shared/lib/api/api"
import { ConvertParams } from "./types"

export const getLatest = createAsyncThunk(
  'currecies/getLatest',
  async (base_currency: string, thunkApi) => {
    try {
      return await $api.get(`${APIRoutesBase.LATEST}/${base_currency}`)
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)

export const convertCurrencies = createAsyncThunk(
  'currecies/convertCurrencies',
  async (params: ConvertParams, thunkApi) => {
    try {
      const data = await $api.get(`${APIRoutesBase.CONVERT}/${params.from}/${params.to}`)
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)