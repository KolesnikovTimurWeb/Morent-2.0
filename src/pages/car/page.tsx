"use client"
import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { useParams, useRouter } from 'next/navigation'
import pageCars from '../item'
import Slider from '@/src/widgets/slider/ui/ui'
import Heart from '@/src/widgets/header/ui/heart/ui/ui'
import Price from '@/src/shared/ui/price/ui/ui'
import gallery from '@/assets/icons/gallery.svg'
import Image from 'next/image'
import { likeClick } from '@/src/widgets/card/ui/api/likeClick'
import axios from 'axios'
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import Link from 'next/link'

const Car = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {


      axios.get('https://morent-backend-bipk.onrender.com/cars')
         .then(response => {
            setTimeout(() => setLoading(false), 1200)
            setArray(response.data)
         })
         .catch(error => console.error(error));

   }, [])
   const [array, setArray] = useState([])
   const router = useParams();
   const [title, setTitle] = useState(router.id)
   const [pageArray, setPageArray] = useState([])
   const [heart, setHeart] = useState(false)
   useEffect(() => {
      const arrey = JSON.parse(localStorage.getItem("like")) ? JSON.parse(localStorage.getItem("like")) : []
      let itemLocal = arrey.find(item => item.cartitle === title)
      if (!itemLocal) return
      let item = array.find(item => item.cartitle.replace(/\s+/g, '') === itemLocal.cartitle)

      if (item) {

         setHeart(true)

      }

   })

   useEffect(() => {
      let arr = array.filter(item => item.cartitle.replace(/\s+/g, '') === title)

      setPageArray(arr);
   }, [array])

   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <div className={style.car}>
         {pageArray.map(item => (
            <div className={style.car_block}>
               {loading ? (
                  <div className={style.car_loading}>
                     <div>
                        <Image alt='gallery' src={gallery} />
                     </div>
                  </div>
               ) : (
                  <div>
                     {item.images ? (
                        <div>
                           <Slider loading={loading} images={item.images} />
                        </div>
                     ) : (
                        <div className={style.loading}>

                        </div>
                     )}

                  </div>
               )}

               <motion.div

                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.1,
                     ease: "easeInOut",
                     duration: 0.5,
                  }}
                  className={style.car_text}>
                  <div className={style.car_header}>
                     <h2>{item.cartitle}</h2>


                  </div>
                  <p>{item.desc}</p>
                  <div className={style.car_details}>
                     <div className={style.car_details_item}>
                        <h3>Type Car</h3>
                        <h4>{item.carsubtitle}</h4>
                     </div>
                     <div className={style.car_details_item}>
                        <h3>Steering </h3>
                        <h4>{item.clutch}</h4>
                     </div>
                     <div className={style.car_details_item}>
                        <h3>Capacity</h3>
                        <h4>{item.people}</h4>
                     </div>
                     <div className={style.car_details_item}>
                        <h3>Gasoline </h3>
                        <h4>{item.fuel}</h4>
                     </div>
                  </div>
                  <Link href={`/payment/${item.cartitle.replace(/\s+/g, '')}`} className={style.price}>
                     <Price price={item.price} />
                  </Link>
               </motion.div>
            </div>
         ))}
      </div>
   )
}

export default Car
