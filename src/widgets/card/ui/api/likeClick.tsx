import { useEffect, useState } from "react"

export function likeClick(id, setHeart) {

   const arrey = JSON.parse(localStorage.getItem("like")) ? JSON.parse(localStorage.getItem("like")) : []
   let newArray
   if (arrey.find(item => item === id)) {

      setHeart(false)
      newArray = arrey.filter(function (item) {
         return item !== id

      })

   } else {
      setHeart(true)
      newArray = [...arrey, id]
   }


   localStorage.setItem('like', JSON.stringify(newArray))

}
