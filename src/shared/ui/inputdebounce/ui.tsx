// @ts-nocheck
import React, { useEffect, useState } from 'react'

const InputDebounce = (props, cleanText) => {
   const { onChange, ...otherProps } = props

   const [inputTimeout, setInputTimeout] = useState(null)
   const [value, setValue] = useState()

   useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout])
   useEffect(() => {
      if (props.cleanText === 'true') {
         setValue('')

      }
   }, [props.cleanText])

   const inputOnChange = value => {
      setValue(props.value)

      if (inputTimeout) clearTimeout(inputTimeout)
      setInputTimeout(

         setTimeout(() => {
            if (onChange) onChange(value)
         }, 1000)
      )


   }

   return (
      <input
         {...otherProps}
         value={value}
         onChange={e => inputOnChange(e.target.value)}
      />
   )
}

export default { InputDebounce }
