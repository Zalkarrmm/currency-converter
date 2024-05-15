import { Link } from "react-router-dom"
import cls from './style.module.scss'
const Header = () => {
  return (
    <div className={cls.header}>
      <Link to={'/'}>
        Конвертация
      </Link>
      <Link to={'/currencies'}>
        Валюты
      </Link>
    </div>
  )
}

export default Header