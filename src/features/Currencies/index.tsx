import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { getLatest } from '../../entities/currencies/actions'
import { Button, List, Skeleton} from '@mui/material'
import cls from './style.module.scss'
import { setBaseCurrency } from '../../entities/currencies'

const Currencies = () => {

  const dispatch = useAppDispatch()

  const { base_currency, currencies, loading } = useAppSelector((state) => state.curencies)

  useEffect(() => {
    dispatch(getLatest(base_currency))
  }, [base_currency])

  const handleClick = (currency: string) => {
    dispatch(setBaseCurrency(currency))
  }

  return (
    <div>
      {
        loading ?
        <List className={cls.list} sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            [...Array(30)].map(() =>  <Skeleton variant="rounded" width={540} height={90} />) // конструкция [...Array(30)] чтобы полный экран скелетонов был || создается массив из 30 undefined значений
          }
        </List>
        :
        <List className={cls.list} sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            currencies.map(({currency, rate}) => 
            <div key={currency} className={cls.listItem}>
              1 {base_currency} = {rate} {currency}
              {
                base_currency === currency ?
                  <span>Базовая валюта</span>
                  :
                  <Button onClick={() => handleClick(currency)}>
                    Выбрать базовой валютой
                  </Button>
              }
              </div>
            )
          }
        </List>
      }
    </div>
  )
}

export default Currencies