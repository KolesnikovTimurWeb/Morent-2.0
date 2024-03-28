// @ts-nocheck
import React, { useEffect, useState } from 'react'
import searchIcon from '@/assets/icons/search-normal.svg'
import filter from '@/assets/icons/filter.svg'
import Image from 'next/image'
import style from './style.module.scss'
import InputDebounce from '@/src/shared/ui/inputdebounce/ui'
import pageCars from '@/src/pages/item'
import Link from 'next/link'
import axios from 'axios'

const HeaderSearch = ({ loading }) => {
   let [array, setArray] = useState([])
   let [data, setData] = useState([])
   let [inputValue, setInputValue] = useState()
   let [value, setValue] = useState()
   const inputHandle = value => {
      setValue('')
      if (value === '') {
         array = []
         setArray(array)

         return
      }
      array = []
      inputValue = value

      let newArrr = data.filter(item => item.cartitle.toLowerCase().includes(inputValue.toLowerCase()))
      array.push(...newArrr)
      setArray(array)
      value = ''
   }
   useEffect(() => {


      axios.get('https://morent-backend-bipk.onrender.com/cars')
         .then(response => {
            setData(response.data)

         })
         .catch(error => console.error(error));

   }, [])

   return (
      <>
         {loading ? (
            <div className={style.search}>
               <div className={style.loadingSearch}></div>
               <div className={style.loadingText}></div>
               <div className={style.loadingFilter}></div>
            </div>
         ) : (
            <div className={style.search_container}>
               <div className={style.search}>
                  <Image alt="Morent" src={searchIcon} />
                  <InputDebounce type='text'
                     name='username'
                     cleanText={value}
                     placeholder='Search something here'
                     onChange={inputHandle} />
               </div>


               <div className={array.length === 0 ? '' : style.search_result}>

                  {array.map(item => (
                     <Link onClick={() => {
                        setArray([])
                        setValue('true')

                     }} href={`/car/${item.cartitle.replace(/\s+/g, '')}`} className={style.search_item}>
                        <div className={style.search_item_text}>
                           <h2>{item.cartitle}</h2>

                           <h3>{item.carsubtitle}</h3>
                        </div>
                        <h4>{item.price} $</h4>

                     </Link>
                  ))}
               </div>
            </div>


         )}


      </>

   )
}

export default { HeaderSearch }
