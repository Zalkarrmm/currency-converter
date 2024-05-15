import MainPage from "../pages/MainPage"
import { Route, Routes } from "react-router-dom";
import Header from "../widgets/Header";
import CurrenciesPage from "../pages/CurrenciesPage";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/currencies" element={<CurrenciesPage />} />
      </Routes>
    </div>
  )
}

export default App
