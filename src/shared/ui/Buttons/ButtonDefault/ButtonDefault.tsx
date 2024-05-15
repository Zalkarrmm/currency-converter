import {
  ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode,
} from 'react'

import cn from 'classnames'

import cls from './style.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  disabled?: boolean
  children: ReactNode
  fullWidth?: boolean
}

export const ButtonDefault = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    children,
    disabled,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={cn(cls.Button, { [cls.disabled]: disabled })}
      disabled={disabled}
      {...otherProps}
      ref={ref}
    >
      {children}
    </button>
  )
})
