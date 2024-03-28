// @ts-nocheck
import Image from 'next/image'
import React from 'react'
import icon from '@/assets/icons/profile-user.svg'
import style from './style.module.scss'
const PeopleIcon = ({ people }) => {
   return (
      <div className={style.icon}>
         <Image alt="Morent" src={icon} />
         <p>{people ? people : '4 People'}</p>
      </div>
   )
}

export default { PeopleIcon }
