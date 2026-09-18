import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Products/GenderCollectionSection'
import NewArrival from '../Components/Products/NewArrival'
import ProductDetails from '../Components/Products/ProductDetails'
import ProductGrid from '../Components/Products/ProductGrid'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeaturesSection from '../Components/Products/FeaturesSection'

const placeholderProducts = [
  {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=14",
            },
        ]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=17",
            },
        ]
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=16",
            },
        ]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=19",
            },
        ]
    },
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=40",
            },
        ]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=30",
            },
        ]
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=60",
            },
        ]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [
            {
                url: "https://picsum.photos/500/500?random=90",
            },
        ]
    },
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>
        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4 mt-6'>Best Seller</h2>
        <ProductDetails/>

        <div className="container mx-auto">
          <h2 className='text-3xl text-center font-bold mb-4'>Top Wears for Women</h2>
          <ProductGrid products={placeholderProducts} />
        </div>

        <FeaturedCollection />
        <FeaturesSection/>

    </div>
  )
}

export default Home