'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { Country, State, City } from "country-state-city";
import { DatePicker } from 'antd';
import Image from 'next/image';
import Visa from '@/assets/icons/Visa.svg';
import Mark from '@/assets/icons/Mark.svg';
import Security from '@/assets/icons/Security-safety.svg';
import car from '@/assets/icons/car.svg';
import pageCars from '../../item';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import * as dayjs from 'dayjs'

const Payment = () => {
   const [selectedCountry, setSelectedCountry] = useState([]);
   const [contoroledDate, setContoroledDate] = useState(null);
   const [date, setDate] = useState(0);
   const [selectedCity, setSelectedCity] = useState(null);
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      dateStart: "",
      dateEnd: "",
      cardNum: "",
      cardDate: "",
      cardHolder: "",
      cvc: "",
      agree: true
   });

   const [errors, setErrors] = useState({});
   const [submitted, setSubmitted] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "dateEnd") {
         let date2 = dayjs(formData.dateStart)
         let date = dayjs(value).diff(date2, 'd', true)
         setDate(date)
      }
      setFormData({
         ...formData,
         [name]: value
      });

   };
   const router = useParams();
   const [title, setTitle] = useState(router.id)
   const [array, setArray] = useState([])
   const [pageArray, setPageArray] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      let arr
      axios.get('https://morent-backend-bipk.onrender.com/cars')
         .then(response => {
            setTimeout(() => setLoading(false), 1000)
            arr = response.data.filter(item => item.cartitle.replace(/\s+/g, '') === title)
            setPageArray(arr);
         })
         .catch(error => console.error(error));

   }, [array])
   useEffect(() => {
      setSelectedCountry(Country.getAllCountries())

   }, [selectedCountry]);
   const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      // Validate email
      if (!formData.name) {
         newErrors.name = "Name is required";
         isValid = false;
      }

      // Validate password
      if (!formData.address) {
         newErrors.address = "Address is required";
         isValid = false;
      }
      if (!formData.phone) {
         newErrors.phone = "Phone is required";
         isValid = false;
      }
      if (!formData.city) {
         newErrors.city = "City is required";
         isValid = false;
      }
      if (!formData.country) {
         newErrors.country = "Country is required";
         isValid = false;
      }
      if (!formData.dateStart) {
         newErrors.dateStart = "Date is required";
         isValid = false;
      }
      if (!formData.dateEnd) {
         newErrors.dateEnd = "Date is required";
         isValid = false;
      }
      if (!formData.cardDate) {
         newErrors.cardDate = "Card Date is required";
         isValid = false;
      }
      if (!formData.cardNum) {
         newErrors.cardNum = "Card Number is required";
         isValid = false;
      }
      if (!formData.cardHolder) {
         newErrors.cardHolder = "Card Holder is required";
         isValid = false;
      }
      if (!formData.cvc) {
         newErrors.cvc = "Card CVC is required";
         isValid = false;
      }
      window.scrollTo(0, 0)
      setErrors(newErrors);
      return isValid;
   };
   const onChange = (date, dateString) => {
      setContoroledDate(date)
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         // Form is valid, you can submit or process the data here
         setSubmitted(true); // Set a submitted flag
      } else {
         // Form is not valid, display error messages
      }
   };
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <div className={style.item}>
         <form onSubmit={handleSubmit} className={style.inputs}>
            {loading ? (
               <div className={style.loading}>

               </div>
            ) : (
               <motion.div variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.1,
                     ease: "easeInOut",
                     duration: 0.5,
                  }} className={style.inputs_item}>
                  <h2>Billing Info</h2>
                  <div className={style.inputs_steps}>
                     <p>Please enter your billing info</p>
                     <p>Step 1 of 4</p>
                  </div>
                  <div className={style.inputs_item_inputs}>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="Name">Name</label>
                        {errors.name && <div className={style.err}>{errors.name}</div>}
                        <input onChange={handleInputChange} value={formData.name} name='name' type="text" placeholder='Your name' />
                     </div>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="Phone Number">Phone Number</label>
                        {errors.phone && <div className={style.err}>{errors.phone}</div>}
                        <input onChange={handleInputChange} value={formData.phone} name='phone' type="text" placeholder='Phone number' />
                     </div>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="Address">Address</label>
                        {errors.address && <div className={style.err}>{errors.address}</div>}
                        <input onChange={handleInputChange} value={formData.address} name='address' type="text" placeholder='Address' />
                     </div>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="Town / City">Town / City</label>
                        {errors.city && <div className={style.err}>{errors.city}</div>}
                        <input onChange={handleInputChange} value={formData.city} name='city' type="text" placeholder='Town or City' />
                     </div>
                  </div>
               </motion.div>
            )}
            {loading ? (
               <div className={style.loading}>

               </div>
            ) : (
               <motion.div

                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.2,
                     ease: "easeInOut",
                     duration: 0.5,
                  }} className={style.inputs_item}>
                  <h2>Rental Info</h2>
                  <div className={style.inputs_steps}>
                     <p>Please select your rental date</p>
                     <p>Step 2 of 4</p>
                  </div>
                  <div className={style.inputs_item_inputs}>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="Locations">Locations</label>
                        {/* <select
                        options={Country.getAllCountries()}
                        value={selectedCountry}
                        onChange={(item) => {
                           setSelectedCountry(item);
                        }}
                     /> */}
                        {errors.country && <div className={style.err}>{errors.country}</div>}

                        <select onChange={handleInputChange} value={formData.country} name="country">

                           {selectedCountry.map((item, index) => (
                              <option key={index} value={item.name}>
                                 {item.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="dateStart">Date Start</label>
                        {errors.dateStart && <div className={style.err}>{errors.dateStart}</div>}
                        <div className={style.inputs_item_input_date}>
                           <input onChange={handleInputChange} value={formData.dateStart} name='dateStart' type="date" />
                           <h5>{formData.dateStart}</h5>
                        </div>
                     </div>
                     <div className={style.inputs_item_input}>
                        <label htmlFor="dateEnd">Date End</label>
                        {errors.dateEnd && <div className={style.err}>{errors.dateEnd}</div>}

                        <div className={formData.dateStart ? style.inputs_item_input_date : style.disabled}>
                           <input onChange={handleInputChange} min={formData.dateStart} value={formData.dateEnd} name='dateEnd' type="date" />
                           <h5>{formData.dateEnd}</h5>
                        </div>

                     </div>
                  </div>
               </motion.div>
            )}
            {loading ? (
               <div className={style.loading}>

               </div>
            ) : (
               <motion.div

                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.3,
                     ease: "easeInOut",
                     duration: 0.5,
                  }} className={style.inputs_item}>
                  <h2>Payment Method</h2>
                  <div className={style.inputs_steps}>
                     <p>Please enter your payment method</p>
                     <p>Step 3 of 4</p>
                  </div>
                  <div className={style.inputs_card}>
                     <div className={style.inputs_card_header}>
                        <h2>
                           <Image src={Mark} width={16} height={16} alt='' />

                           Credit Card</h2>
                        <Image src={Visa} width={94} height={24} alt='' />
                     </div>
                     <div className={style.inputs_item_inputs}>

                        <div className={style.inputs_item_input}>
                           <label htmlFor="cardNum">Card Number</label>
                           {errors.cardNum && <div className={style.err}>{errors.cardNum}</div>}

                           <input onChange={handleInputChange} value={formData.cardNum} name='cardNum' type="text" placeholder='Card Number' />
                        </div>
                        <div className={style.inputs_item_input}>
                           <label htmlFor="cardDate">Expration Date</label>
                           {errors.cardDate && <div className={style.err}>{errors.cardDate}</div>}

                           <input onChange={handleInputChange} value={formData.cardDate} type="text" name='cardDate' placeholder='Expration Date' />
                        </div>
                        <div className={style.inputs_item_input}>
                           <label htmlFor="cardHolder">Card Holder</label>
                           {errors.cardHolder && <div className={style.err}>{errors.cardHolder}</div>}

                           <input onChange={handleInputChange} value={formData.cardHolder} name='cardHolder' type="text" placeholder='Card Holder' />
                        </div>
                        <div className={style.inputs_item_input}>
                           <label htmlFor="cvc">CVC</label>
                           {errors.cvc && <div className={style.err}>{errors.cvc}</div>}

                           <input onChange={handleInputChange} value={formData.cvc} name='cvc' type="text" placeholder='CVC' />
                        </div>
                     </div>
                  </div>

               </motion.div>
            )}
            {loading ? (
               <div className={style.loading}>

               </div>
            ) : (
               <motion.div

                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.4,
                     ease: "easeInOut",
                     duration: 0.5,
                  }}
                  className={style.inputs_item}>
                  <h2>Confirmation</h2>
                  <div className={style.inputs_steps}>
                     <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                     <p>Step 4 of 4</p>
                  </div>
                  <div className={style.inputs_item_ckeckbox}>
                     <div className={style.inputs_ckeckbox_input}>
                        <input required id='agree' name='agree' type="checkbox" />
                        <label htmlFor="agree">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                     </div>
                     <div className={style.inputs_ckeckbox_input}>
                        <input required id='terms' name='terms' type="checkbox" />
                        <label htmlFor="terms">I agree with our terms and conditions and privacy policy.</label>
                     </div>

                     <div className={style.inputs_footer}>
                        <div>
                           <button type='submit'>Rent</button>
                        </div>
                        <Image alt="Morent" width={32} height={32} src={Security} />
                        <h2>All your data are safe</h2>
                        <p>We are using the most advanced security to provide you the best experience ever.</p>
                     </div>
                  </div>
               </motion.div>
            )}

         </form>
         <div className={style.total}>
            {loading ? (
               <div className={style.loading}>
               </div>
            ) : (
               <div className={style.total_items}>
                  {pageArray.length === 0 ? (
                     <div>No data</div>
                  ) :
                     (
                        pageArray.map(item => (
                           <div>
                              <div className={style.total_header}>
                                 <h2>Rental Summary</h2>
                                 <h3>Prices may change depending on the length of the rental and the price of your rental car.</h3>

                              </div>
                              <div className={style.total_item}>
                                 <div className={style.total_item_image}>
                                    <Image src={car} width={60} height={100} alt="Morent" />
                                 </div>
                                 <h2>{item.cartitle ? item.cartitle : 'car'}</h2>
                              </div>
                              <div className={style.total_item_prices}>
                                 <div className={style.total_item_price}>
                                    <p>Day</p>
                                    <h3>{item.price}.00 $ / day</h3>
                                 </div>
                                 <div className={style.total_item_price}>
                                    <p>Tax</p>
                                    <h3>10.00$</h3>
                                 </div>

                              </div>
                              <div className={style.total_item_total}>
                                 <div>
                                    <h2>Total Rental Price</h2>
                                    <p>Overall price and includes rental discount</p>
                                 </div>
                                 <h4>{date * item.price + 10}.00$</h4>
                              </div>
                           </div>
                        ))
                     )
                  }
               </div>
            )}




         </div>
      </div >
   )
}

export default Payment
