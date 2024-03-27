import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import notification from "@/assets/icons/notification.svg"
import herat from "@/assets/icons/heart-active.svg"
import style from './style.module.scss'
import axios from 'axios'
import relativeTime from 'dayjs/plugin/relativeTime';

import * as dayjs from 'dayjs'
interface NotificationProps {
   varinat?: "regular" | "outlined",
   loading: string,
   burger: string,
}


const Item = ({ title, date }) => {
   dayjs.extend(relativeTime);

   const date2 = dayjs(date)
   const relativeDate = date2.fromNow(); // in 7 days
   return (
      <div className={style.menu_item}>
         <h2>
            <Image width={14} height={14} alt="Morent" src={herat} />
            {title}
         </h2>

         <p>{relativeDate}</p>
      </div>
   )
}

const Notification = ({ varinat, loading }: NotificationProps) => {

   const [array, setArray] = useState([])
   dayjs.extend(relativeTime);
   useEffect(() => {

      axios.get('https://morent-backend-bipk.onrender.com/notification')
         .then(response => {
            setArray(response.data.reverse())

         })
         .catch(error => console.error(error));

   }, [])
   const [notificationMenu, setNotificationMenu] = useState(false)
   return (
      <div className={clsx(loading ? style.loading : style[varinat])}>
         {loading ? (
            <div></div>
         ) : (

            <Image onClick={() => setNotificationMenu(!notificationMenu)} alt='smth' src={notification} />
         )}

         {notificationMenu && (
            <div className={style.menu}>
               <div className={style.menu_fixed}>
                  <div className={style.menu_header}>
                     <h2>Notification</h2>
                  </div>
                  {array.map(item => (
                     <Item title={item.title} date={item.date} />
                  ))}
               </div>

               <div onClick={() => setNotificationMenu(false)} className={style.bacround}>

               </div>
            </div>

         )}
      </div>
   )
}

export default { Notification }
