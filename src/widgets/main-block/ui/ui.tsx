import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import block1 from '@/assets/main-block/block-1.svg'
import block2 from '@/assets/main-block/block-2.svg'
import car2 from '@/assets/main-block/car-2.webp'
import car1 from '@/assets/main-block/car-1.webp'
import gallery from '@/assets/icons/gallery.svg'
import { Button } from '@/src/shared/ui/button'
import Link from 'next/link'


const MainBlock = ({ title, decr, numberBlock, loading }) => {
   return (
      <div className={style.transperent}>
         {loading ?
            <div className={style.loading}>
               <Image alt='smth' src={gallery} />
            </div> : (
               <div className={style.mainblock}>
                  <div className={style.text}>
                     <h2>{title}</h2>
                     <p>{decr}</p>
                     <Link href={'/catalog'}>
                        <Button size='regular' variant={numberBlock === 1 ? 'blue' : 'lightblue'}>Show All</Button>

                     </Link>
                  </div>
                  <Image alt='smth' src={numberBlock === 1 ? car1 : car2} />
                  <Image alt='smth' className={style.bacround} src={numberBlock === 1 ? block1 : block2} />
               </div>
            )}

      </div>
   )
}

export default MainBlock
