// @ts-nocheck
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import avatar from "@/assets/icons/avatar.png"
import style from './style.module.scss'
interface AvatarProps {
   varinat?: "regular" | "outlined",
   image: string,
   loading: string,
}


const Avatar = ({ varinat, image, loading }: AvatarProps) => {
   return (
      <div className={clsx(loading ? style.loading : style[varinat])}>
         {loading ? (
            <div></div>
         ) : (

            <Image alt='smth' src={image ? image : avatar} />
         )}
      </div>
   )
}

export default { Avatar }
