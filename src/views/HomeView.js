import React, { useState } from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SMainShowcase from '../sections/SMainShowcase'
import SWinterArrivals from '../sections/SWinterArrivals'
import SProductGrid from '../sections/SProductGrid'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 4, title: "Modern Black Blouse", category: "Fashion", originalprice : "$49.99" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13592310/pexels-photo-13592310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" }
  ])
  const [topProducts, setTopProducts] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5422596/pexels-photo-5422596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9793919/pexels-photo-9793919.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", originalprice : "" , currentprice: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" }
  ])


  return (
    <>
      <SMainMenu />
      <SMainShowcase />
      <SWinterArrivals />
      <SProductGrid title="Featured Products" products={featuredProducts}/>
      <SProductGrid title="Top Products" products={topProducts}/>
      <SFooter />
    </>
  )
}

export default HomeView