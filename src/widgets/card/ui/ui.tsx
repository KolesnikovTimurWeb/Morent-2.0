import React, { Suspense, useEffect, useState } from 'react'
import Heart from '../../header/ui/heart/ui/ui'
import style from './style.module.scss'
import Image from 'next/image'
import car from '@/assets/icons/car.svg'
import FuelIcon from '@/src/shared/ui/fuel/ui/ui'
import ClatchIcon from '@/src/shared/ui/clutch/ui/ui'
import PeopleIcon from '@/src/shared/ui/people/ui/ui'
import Price from '@/src/shared/ui/price/ui/ui'
import { likeClick } from './api/likeClick'
import Link from 'next/link'
import CardSkeleton from '../../cardSkeleton/ui'
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import { NotificationFunc } from '../../header/ui/notification/ui/ui'
interface CardProps {
   cartitle: string,
   carsubtitle: string,
   image: string,
   fuel: string,
   people: string,
   discount: number,
   price: number,
   loading: 'true' | "false",
}


const Card = ({ cartitle, carsubtitle, image, fuel, people, clutch, discount, price, loading, index }: CardProps) => {
   const [heart, setHeart] = useState(false)
   useEffect(() => {
      const arrey = JSON.parse(localStorage.getItem("like")) ? JSON.parse(localStorage.getItem("like")) : []
      let itemLocal = arrey.find(item => item === cartitle)
      if (!itemLocal) return

      setHeart(true)


   })
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (

      <motion.div
         variants={variants}
         initial='hidden'
         animate='visible'
         transition={{
            delay: 0.15 * index,
            ease: "easeInOut",
            duration: 0.5,
         }}
         className={style.div} >
         {
            loading ?
               <CardSkeleton />
               : (
                  <div className={style.card}>
                     <div className={style.text}>
                        <h2 >{cartitle ? cartitle : 'Car'}

                           <div onClick={() => {

                              likeClick(cartitle, setHeart)
                           }}>

                              <Heart heartLiked={heart} varinat='lined' />
                           </div>
                        </h2>
                        <p>{carsubtitle ? carsubtitle : "Car Setting"}</p>

                     </div>
                     <Link href={`/car/${cartitle.replace(/\s+/g, '')}`} className={style.image}>
                        <Image width={700} height={300} alt="Morent" src={image ? image : car} />
                     </Link>
                     <div className={style.icons}>
                        <FuelIcon liters={fuel ? fuel : "50"} />
                        <ClatchIcon clucth={clutch} />
                        <PeopleIcon people={people} />
                     </div>
                     <Link href={`/payment/${cartitle.replace(/\s+/g, '')}`} className="price">
                        <Price price={price} discount={discount} />
                     </Link>
                  </div>


               )
         }

      </motion.div >

   )
}

export default { Card }
