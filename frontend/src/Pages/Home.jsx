import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Products/GenderCollectionSection'
import NewArrival from '../Components/Products/NewArrival'
import ProductDetails from '../Components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>
        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4 mt-6'>Best Seller</h2>
        <ProductDetails/>
    </div>
  )
}

export default Home