
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
   const [title, setTitle] = useState(null)
   const [pageArray, setPageArray] = useState([])
   const [heart, setHeart] = useState(false)
 

   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <div className={style.car}>
      </div>
   )
}

export default Car
