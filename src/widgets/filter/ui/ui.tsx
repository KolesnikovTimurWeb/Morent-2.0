import React, { useState } from 'react'
import style from './style.module.scss'
import pageCars from '@/src/pages/item'




const Filter = ({ handleClick, priceFunc, priceValue, filterUrl }) => {

   let number = 0
   const chars = ['Sport', "SUV", "Sedan"]
   let uniqueChars = [];
   chars.forEach((element) => {
      if (!uniqueChars.includes(element)) {
         uniqueChars.push(element);
      }
   });

   return (
      <div>
         <div className={style.sidebar}>
            <h2>C A P A C I T Y</h2>

            <div className={style.inputs}>
               {uniqueChars.map(item => (
                  <div >
                     <label name={item}  >
                        <input onClick={() => handleClick(item)} for={item} type="checkbox" />
                        {item} <span></span>

                     </label>
                  </div>
               ))}
               <h2>P R I C E</h2>

               <div className={style.range_div}>
                  <input type="range" className={style.range} min="0" max="200" value={priceValue} onChange={e => priceFunc(e.target.value)} step="10" />
                  <p>max:{priceValue}</p>
               </div>
               <div className={style.button}>
                  <button onClick={() => filterUrl()}>Button</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default { Filter }
