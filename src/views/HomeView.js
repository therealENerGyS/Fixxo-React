import React, { useState } from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SMainShowcase from '../sections/SMainShowcase'
import SWinterArrivals from '../sections/SWinterArrivals'
import SProductGrid from '../sections/SProductGrid'
import SPamelaConscious from '../sections/SPamelaConscious'
import SSpeciality from '../sections/SSpeciality'
import STwoFor29 from '../sections/STwoFor29'
import STwoFor49 from '../sections/STwoFor49'
import SDiscountBanner from '../sections/SDiscountBanner'
import STopProducts from '../sections/STopProducts'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "34.99" , currentprice: "$29.99", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 4, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/13592310/pexels-photo-13592310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 5, title: "Modern Black Blouse", category: "Fashion", originalprice : "$34.99" , currentprice: "$29.99", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 7, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 8, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$34.99", rating: 5, img: "https://images.pexels.com/photos/13592310/pexels-photo-13592310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" }
  ])

  const [twoFor29, setTwoFor29] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 4, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/13592310/pexels-photo-13592310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ])

  const [twoFor49, setTwoFor49] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 4, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/13592310/pexels-photo-13592310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ])

  const [latestProduct, setlatestProduct] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$28.99", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ])



  return (
    <>
      <SMainMenu />
      <SMainShowcase />
      <SWinterArrivals />
      <SProductGrid title="Featured Products" products={featuredProducts}/>
      <SPamelaConscious />
      <SSpeciality />
      <STwoFor29 products={twoFor29} />
      <STwoFor49 products={twoFor49} />
      <SDiscountBanner />
      <STopProducts products={latestProduct}/>
      <SFooter />
    </>
    /*
    Benefits
    */
  )
}

export default HomeView