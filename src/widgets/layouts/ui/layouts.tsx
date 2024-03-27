"use client"
import clsx from 'clsx'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import Header from '../../header/ui'
import { useParams, usePathname } from 'next/navigation'
import Filter from '../../filter/ui/ui'

const Layouts = ({ children }: PropsWithChildren) => {
   const ref = usePathname()
   const [filter, setFilter] = useState(false)
   useEffect(() => {
      if (ref === '/favorites' || ref === '/catalog') {
         setFilter(true)

      } else {
         setFilter(false)

      }
   }, [ref])

   return (
      <div >
         <Header />
         <div >
            {filter ? (
               <div className={clsx(style.containerFilter)}>
                  {children}

               </div>
            ) : (
               <div className={clsx(style.container)}>
                  {children}
               </div>
            )}

         </div>
      </div>
   )
}

export { Layouts }
