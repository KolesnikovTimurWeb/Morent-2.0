"use client"
import { Suspense, useEffect, useState } from "react";
import { Button } from "../../shared/ui/button";
import MainBlock from "../../widgets/main-block/ui/ui";
import style from './style.module.scss'
import Card from "../../widgets/card/ui/ui";
import pageCars from '../item'

import axios from "axios";
import CardSkeleton from "@/src/widgets/cardSkeleton/ui";
export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {

    setTimeout(setLoading(false), 1000)

    axios.get('https://morent-backend-bipk.onrender.com/cars')
      .then(response => {
        setData(response.data)
        setTimeout(() => setLoadingData(false), 1000)

      })
      .catch(error => console.error(error));

  }, [])

  return (
    <main className={style.main}>
      <div className={style.mainblock}>
        <div>

          <MainBlock loading={loading} title={'The Best Platform for Car Rental'} decr={'Ease of doing a car rental safely and reliably. Of course at a low price.'} numberBlock={1} />
        </div>
        <div>
          <MainBlock loading={loading} title={'Easy way to rent a car at a low price'} decr={'Providing cheap car rental services and safe and comfortable facilities.'} numberBlock={2} />
        </div>
      </div>
      <div className={loadingData ? '' : style.recommend}>
        {loadingData && (
          <div>
            <CardSkeleton loadingStarter={true} />
          </div>
        )}
        {loadingData === false && data.map((item, index) => (

          <Card key={index} cartitle={item.cartitle} index={index} carsubtitle={item.carsubtitle} image={item.image} fuel={item.fuel} people={item.people} discount={item.discount} loading={loading} price={item.price} clutch={item.clutch} />
        ))}
      </div>
    </main >
  );
}
