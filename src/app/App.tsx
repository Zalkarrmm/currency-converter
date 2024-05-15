import { useEffect } from "react"
import MainPage from "../pages/MainPage"
import { 
  useAppDispatch, 
  useAppSelector 
} from "../shared/lib/hooks/redux"
import { convertCurrencies, getLatest } from "../entities/currencies/actions"


function App() {

  const dispatch = useAppDispatch()

  const { base_currency } = useAppSelector((state) => state.curencies)

  useEffect(() => {
    dispatch(getLatest(base_currency))
    dispatch(convertCurrencies({
      from: 'USD',
      to: 'EUR'
    }))
  }, [])

  return (
    <div className="App">
      <MainPage />
    </div>
  )
}

export default App
