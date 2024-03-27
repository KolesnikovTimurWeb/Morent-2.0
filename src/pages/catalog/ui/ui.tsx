"use client"
import Filter from '@/src/widgets/filter/ui/ui'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from '@/src/pages/favorites/style.module.scss'
import Card from '@/src/widgets/card/ui/ui'

const Catalog = () => {
   let [priceValue, setPriceValue] = useState(200)
   let [arrayFilter, setArrayFilter] = useState([])
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [loadingData, setLoadingData] = useState(true)
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
   useEffect(() => {

      setTimeout(setLoading(false), 1000)


      axios.get('https://morent-backend-bipk.onrender.com/cars')
         .then(response => {
            setData(response.data)
            setTimeout(() => setLoadingData(false), 1000)

         })
         .catch(error => console.error(error));

   }, [])
   const filterUrl = (event) => {
      const url = `https://morent-backend-bipk.onrender.com/cars?${`price=${priceValue}&`}${arrayFilter.map(item => `carsubtitle=${item}&`)}`
      axios.get(url.replace(/,/g, ''))
         .then(response => {
            setData(response.data)
         })
         .catch(error => console.error(error));
   }
   return (
      <div className={style.container}>
         <div>
            <Filter handleClick={handleChange} priceFunc={priceFunc} priceValue={priceValue} filterUrl={filterUrl} />
         </div>
         <div>

            <div className={style.cards}>
               {data.map((item, index) => (
                  <Card key={index} cartitle={item.cartitle} index={index} carsubtitle={item.carsubtitle} image={item.image} fuel={item.fuel} people={item.people} discount={item.discount} loading={loading} price={item.price} clutch={item.clutch} />
               ))}
            </div>

         </div>
      </div>
   )
}

export default Catalog
