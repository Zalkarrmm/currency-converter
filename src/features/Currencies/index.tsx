import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { getLatest } from '../../entities/currencies/actions'

const Currencies = () => {

  const dispatch = useAppDispatch()

  const { base_currency } = useAppSelector((state) => state.curencies)

  useEffect(() => {
    dispatch(getLatest(base_currency))
  }, [])

  return (
    <div>Currencies</div>
  )
}

export default Currencies