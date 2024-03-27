import React from 'react'
import style from './style.module.scss'
import { Button } from '../../button'


interface PriceProps {
   price: string,
   discount: string
}

const Price = ({ price, discount }: PriceProps) => {
   return (
      <div className={style.price}>
         {discount ? (
            <div>
               <h4>${price ? price : '30.00'}/ <p> day </p></h4>
               <h5>${discount}</h5>
            </div>
         ) : (
            <div>
               <h4>${price ? price : '30.00'}/ <p> day </p></h4>

            </div>
         )}
         <Button size={'regular'}>Rent Now</Button>
      </div>
   )
}

export default { Price }
