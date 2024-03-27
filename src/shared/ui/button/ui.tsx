import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'
import styles from './style.module.scss'



interface ButtonProps {
   size?: 'small' | 'regular' | 'medium' | 'big';
   variant?: 'blue' | 'lightblue';
   props: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ className, size, loading, variant, ...props }: ButtonProps) => {
   return (
      <button {...props} className={clsx(
         'btn',
         styles.btn,
         styles[size],
         styles[variant],
      )} />


   )
}

export { Button }
