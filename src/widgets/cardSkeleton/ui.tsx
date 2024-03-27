import Image from 'next/image'
import style from './style.module.scss'
import s from '@/src/pages/home/style.module.scss'
import gallery from '@/assets/icons/gallery.svg'

const CardSkeleton = ({ loadingStarter }) => {
   return (
      <div className={style.div}>
         {loadingStarter ? (
            <div className={s.recommend}>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
               <div className={style.loading}>
                  <Image src={gallery} alt="Morent" />
               </div>
            </div>
         ) : (
            <div className={style.loading}>
               <Image alt="Morent" src={gallery} />
            </div>
         )}
      </div>

   )
}

export default CardSkeleton
