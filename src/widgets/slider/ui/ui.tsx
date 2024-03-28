// @ts-nocheck
import React, { useState } from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import arrowRight from '@/assets/icons/arrow-right.svg'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import gallery from '@/assets/icons/gallery.svg'
import { delay, easeIn, easeInOut, motion } from "framer-motion"

const Slider = ({ images, loading }) => {
   const [imageIndex, setImageIndex] = useState(null)

   const changeSlide = (event) => {
      if (event === 'left') {
         if (imageIndex === 0) {
            setImageIndex(images.length - 1)
         } else {
            setImageIndex(imageIndex - 1)
         }

      } else {
         if (imageIndex === images.length - 1) {
            setImageIndex(0)
         } else {
            setImageIndex(imageIndex + 1)
         }
      }
   }
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <div>
         {imageIndex !== null && (
            <div className={style.full_image}>
               <div className={style.full_image_container}>
                  <div onClick={() => changeSlide('right')} className={style.full_image_right}>
                     <Image width={24} height={24} src={arrowRight} alt='' />
                  </div>
                  <Image alt='' width={460} height={360} className={style.full_image_main} src={images[imageIndex]} />
                  <div onClick={() => changeSlide('left')} className={style.full_image_left}>
                     <Image width={24} height={24} src={arrowLeft} alt='' />
                  </div>
                  <div onClick={() => setImageIndex(null)} className={style.full_image_close}>
                     <p>X</p>
                  </div>
               </div>
            </div>
         )}


         <div className={style.main_image}>
            {loading ? (

               <div className={style.loading}>
                  <Image alt="Morent" width={460} height={360} src={gallery} />
               </div>

            ) :
               (
                  <motion.div
                     variants={variants}
                     initial='hidden'
                     animate='visible'
                     transition={{
                        delay: 0.1,
                        ease: "easeInOut",
                        duration: 0.5,
                     }}>
                     <Image loading="lazy" alt='' onClick={() => setImageIndex(0)} width={460} height={360} src={images[0]} />

                  </motion.div>
               )
            }
         </div>

         <div >

            {loading ? (
               <div className={style.small_image}>
                  <div className={style.loading_small}>
                     <Image width={50} height={50} src={gallery} />
                  </div>
                  <div className={style.loading_small}>
                     <Image width={50} height={50} src={gallery} />
                  </div>
                  <div className={style.loading_small}>
                     <Image width={50} height={50} src={gallery} />
                  </div>

               </div>
            ) :
               (
                  <div className={style.small_image}>
                     {images.slice(1).map((image, index) => (
                        <motion.div
                           variants={variants}
                           initial='hidden'
                           animate='visible'
                           transition={{
                              delay: 0.35 * index,
                              ease: "easeInOut",
                              duration: 0.5,
                           }}>
                           <Image loading='lazy' width={460} onClick={() => setImageIndex(index + 1)} height={360} src={image} alt='' key={index} />
                        </motion.div>
                     ))}
                  </div>

               )
            }
         </div>
      </div>
   )
}

export default { Slider }
