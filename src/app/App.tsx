import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../shared/lib/hooks/redux"
import { getCurrencies } from "../entities/currencies/actions"

function App() {

  const dispatch = useAppDispatch()

  const { base_currency } = useAppSelector((state) => state.curencies)

  useEffect(() => {
    dispatch(getCurrencies(base_currency))
  }, [])

  // fetch("https://openexchangerates.org/api/latest.json?app_id=88d7caa2e2ed40ddb92b5a03965c487d").then(r => console.log(r))

  return (
    <div className="App">
    </div>
  )
}

export default App
