// @ts-nocheck
"use client"
import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import pageCars from '../item'
import Card from '@/src/widgets/card/ui/ui'
import { usePathname } from 'next/navigation'
import Filter from '@/src/widgets/filter/ui/ui'
import axios from 'axios'


const Favorites = () => {
   const [data, setData] = useState([])
   const [dataNew, setDataNew] = useState([])
   const [loading, setLoading] = useState(true)
   let arrayLocalStorage = JSON.parse(localStorage.getItem("like"));

   let newArrayFilter
   useEffect(() => {


      axios.get('https://morent-backend-bipk.onrender.com/cars')
         .then(response => {

            setData(response.data)
            if (arrayLocalStorage.length === 0) {
               console.log('ad')
               setDataNew(response.data)
               setTimeout(() => setLoading(false), 1000)

               return
            }
            setTimeout(() => setLoading(false), 1000)
            newArrayFilter = response.data.filter((elem) => arrayLocalStorage.find((cartitle) => elem.cartitle === cartitle))

            setDataNew(newArrayFilter)

         })
         .catch(error => console.error(error));

   }, [])

   // let [array, setArray] = useState([])
   // let [message, setMessage] = useState([])
   let [arrayFilter, setArrayFilter] = useState([])
   let [priceValue, setPriceValue] = useState(200)
   // let count = 0
   // let [qustion, setQustion] = useState(false)
   const priceFunc = (value) => {
      setPriceValue(value)
   }
   const handleChange = (event) => {

      if (arrayFilter.includes(event)) {

         arrayFilter = arrayFilter.filter(item => item !== event)
         setArrayFilter(arrayFilter)

         return
      }

      arrayFilter.push(event)
      setArrayFilter(arrayFilter)
   }
   const filterUrl = (event) => {

      const url = `https://morent-backend-bipk.onrender.com/cars?${`price=${priceValue}&`}${arrayFilter.map(item => `carsubtitle=${item}&`)}`
      axios.get(url.replace(/,/g, ''))
         .then(response => {

            let array = response.data.filter((elem) => arrayLocalStorage.find((cartitle) => elem.cartitle === cartitle))
            setDataNew(array)
         })
         .catch(error => console.error(error));
   }
   // let [newarrayFilter, setNewarrayFilter] = useState(arrayLocalStorage)
   // let [newarrayByPrice, setNewarrayByPrice] = useState(arrayLocalStorage)
   // let [filterShowArray, setFilterShowArray] = useState(true)
   // const filterArray = (arr) => {
   //    newarrayFilter = []

   //    let newarray = array.map(item => {
   //       arr.filter(function (el) {
   //          if (item.carsubtitle === el) {
   //             newarrayFilter.push(item)
   //          } else {
   //             return
   //          }
   //       })
   //    })
   //    setNewarrayFilter(newarrayFilter)
   // }

   // const filterByPrice = (value, qustion) => {
   //    if (qustion === true) {
   //       return
   //    }
   //    setFilterShowArray(true)
   //    newarrayFilter = newarrayFilter

   //    let newarray = newarrayFilter.filter(function (item) {

   //       return Math.floor(item.price) <= Math.floor(value)
   //    })
   //    setNewarrayByPrice(newarray)

   // }
   return (
      <div className={style.container}>

         <div><Filter key={'MORENT'} handleClick={handleChange} priceFunc={priceFunc} priceValue={priceValue} filterUrl={filterUrl} /></div>

         <div>
            <div className={style.cards}>
               {dataNew.map((item, index) => {
                  return (
                     <div>
                        <Card key={index} cartitle={item.cartitle} index={index} carsubtitle={item.carsubtitle} image={item.image} fuel={item.fuel} people={item.people} discount={item.discount} loading={loading} price={item.price} clutch={item.clutch} />

                     </div>
                  )
               }
               )}
            </div>


         </div>
      </div>
   )
}

export default Favorites
