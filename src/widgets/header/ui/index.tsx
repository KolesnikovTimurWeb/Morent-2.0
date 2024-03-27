'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HeaderSearch from './header-search/ui'
import style from './style.module.scss'
import Heart from './heart/ui/ui'
import Notification from './notification/ui/ui'
import Setting from './setting/ui/ui'
import Avatar from './avatar/ui/ui'
const Header = () => {
   const [loading, setLoading] = useState(true)
   const [burger, setBurger] = useState(false)
   useEffect(() => {
      setLoading(false)
   }, [])

   return (
      <div className={style.header}>
         <div className={style.container}>
            <div className={style.logo}>
               <Link href='/'>MORENT</Link>

               {burger && (<div onClick={() => setBurger(false)} className={style.clickaway}>

               </div>)

               }

               <div onClick={() => setBurger(!burger)} className={style.burger}>
                  <span></span>
                  <span></span>
                  <span></span>

               </div>
            </div>
            <HeaderSearch loading={loading} />
            <div className={style.icons}>
               <Heart link={'true'} loading={loading} varinat='outlined' />
               <Notification burger={burger} loading={loading} varinat='outlined' />
            </div>

            <div className={burger ? style.icons_mobile_active : style.icons_mobile}>
               <Heart link={'true'} loading={loading} varinat='outlined' />
               <Notification loading={loading} varinat='outlined' />


            </div>


         </div>

      </div >
   )
}

export default Header 
