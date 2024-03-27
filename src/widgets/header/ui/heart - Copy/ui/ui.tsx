import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import heart from "@/assets/icons/heart.svg"
import style from './style.module.scss'
interface HeartProps {
   varinat?: "regular" | "outlined",
}


const Heart = ({ varinat }: HeartProps) => {
   return (
      <div className={clsx(style[varinat])}>
         <Image alt='smth' src={heart} />
      </div>
   )
}

export default Heart
