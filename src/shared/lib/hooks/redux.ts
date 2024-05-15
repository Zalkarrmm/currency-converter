import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import { AppDispatch, RootState } from '../../../entities/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector