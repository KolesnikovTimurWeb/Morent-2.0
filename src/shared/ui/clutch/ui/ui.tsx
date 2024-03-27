import React from 'react'
import style from './style.module.scss'
import icon from '@/assets/icons/clutch.svg'
import Image from 'next/image'

interface ClatchIconProps {
   clucth: 'Manual' | 'Automatic'
}

const ClatchIcon = ({ clucth }: ClatchIconProps) => {
   return (
      <div className={style.icon}>
         <Image alt="Morent" src={icon} />
         <p>{clucth ? clucth : 'Automatic'}</p>
      </div>
   )
}

export default { ClatchIcon }
