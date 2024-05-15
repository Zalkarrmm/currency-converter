import { CurrenciesType } from "../../shared/lib/types"

export interface CurrenciesInitialState {
  currencies: TransformedCurrency[]
  base_currency: string
  conversion_rate: number
  loading: boolean
}

export interface ConvertParams {
  from: string
  to: string
}

export interface ConvertResponse {
  data: {
    conversion_rate: number
  }
}
export interface GetLatestResponse {
  data: {
    conversion_rates: CurrenciesType
  }
}

export interface TransformedCurrency {
  currency: string
  rate: number
}