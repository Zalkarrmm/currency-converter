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
      value: 15,
      from: 'USD',
      to: 'EUR'
    }))
  }, [])

  // fetch("https://openexchangerates.org/api/latest.json?app_id=88d7caa2e2ed40ddb92b5a03965c487d").then(r => console.log(r))

  return (
    <div className="App">
      <MainPage />
    </div>
  )
}

export default App
