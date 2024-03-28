// @ts-nocheck
import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import heartImg from "@/assets/icons/heart.svg"
import heartlined from "@/assets/icons/heart-lined.svg"
import heartFull from "@/assets/icons/heart-active.svg"
import style from './style.module.scss'
import Link from 'next/link'
import { likeClick } from '@/src/widgets/card/ui/api/likeClick'
interface HeartProps {
   varinat?: "regular" | "outlined" | 'lined',
   loading: string,
   heartLiked: string,
   link: 'true' | 'false',
}


const Heart = ({ varinat, loading, heartLiked, link }: HeartProps) => {
   const [array, setArray] = useState([])

   return (
      <div>

         {link ? (
            <div>

               <Link href={link ? '/favorites' : ''} className={clsx(style.heart, loading ? style.loading : style[varinat])}>
                  {loading ? (
                     <div></div>
                  ) : (
                     <button>
                        {heartLiked ? (
                           <Image alt='smth' src={heartFull} />
                        ) : (
                           <div>
                              <Image alt='smth' src={varinat === 'lined' ? heartlined : heartImg} />

                           </div>
                        )}
                     </button>
                  )}


               </Link>


            </div>
         ) : (
            <div className={clsx(style.heart, loading ? style.loading : style[varinat])}>
               {loading ? (
                  <div></div>
               ) : (
                  <button >
                     {heartLiked ? (
                        <Image alt='smth' src={heartFull} />
                     ) : (

                        <Image alt='smth' src={varinat === 'lined' ? heartlined : heart} />
                     )}
                  </button>
               )}
            </div>
         )

         }
      </div>

   )
}

export default { Heart }
