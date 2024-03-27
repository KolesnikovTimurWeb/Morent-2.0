import Image from 'next/image'
import React from 'react'
import icon from '@/assets/icons/gas-station.svg'
import style from './style.module.scss'

const FuelIcon = ({ liters }) => {
   return (
      <div className={style.text}>

         <Image alt="Morent" src={icon} />
         <p>{liters ? liters : '50'} L</p>
      </div>
   )
}

export default { FuelIcon }
