export interface CurrenciesInitialState {
  currencies: []
  base_currency: string
  conversion_rate: number
  loading: boolean
}

export interface ConvertParams {
  value: number
  from: string
  to: string
}

export interface ConvertRequest {
  data: {
    conversion_rate: number
  }
}