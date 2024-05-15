import React, { forwardRef, InputHTMLAttributes } from 'react'

import cn from 'classnames'

import cls from './style.module.scss'

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
}

const InputDefault: React.ForwardRefRenderFunction<
HTMLInputElement,
InputDefaultProps
> = ({ label, error, id, className, ...rest }, ref) => (
  <div className={cls.container}>
    <label className={cls.label} htmlFor={id}>
      {label}
    </label>

    <input
      ref={ref}
      id={id}
      className={cn(cls.input, { [cls.errorBorder]: !!error }, className)}
      {...rest}
    />

    {error && (
      <span className={cls.errorMessage}>{error && error}</span>
    )}
  </div>
)

export default forwardRef<HTMLInputElement, InputDefaultProps>(InputDefault)
