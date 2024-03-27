import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import setting from "@/assets/icons/setting.svg"
import style from './style.module.scss'
interface NotificationProps {
   varinat?: "regular" | "outlined",
   loading: "true" | "false",
}


const Setting = ({ varinat, loading }: NotificationProps) => {
   return (
      <div className={clsx(loading ? style.loading : style[varinat])}>
         {loading ? (
            <div></div>
         ) : (

            <Image alt='smth' src={setting} />
         )}
      </div>
   )
}

export default { Setting }
