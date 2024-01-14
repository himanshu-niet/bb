'use client'
import React from 'react'
import Hero from './_components/Hero'
import Categories from './_components/Categories'
import HomeProduct from './_components/HomeProduct/HomeProduct'
import ProductSlider from './_components/HomeProduct/ProductSlider'
import Card from './_components/Card'
import Link from 'next/link'
import Heading from './_components/Heading'
import Aspects from './_components/Aspects'


const page = () => {


  return (
    <>
    <section className="bg0 lg:pt-24 ">
      <ProductSlider />
      </section>


        
        <div className="container pt-10 md:pt-24">
        <img src="images/dap.png" alt="IMG-BANNER" className='pb-10 md:pb-24'/>
          <Card />
        </div>

        
      <div className="container">
      <Heading text={"TAILORED JUST FOR YOU"}/>
      <Categories />
      </div>
    

        <div className="container">
        <Heading text={"NEW TO THE SHOP"}/>
          <HomeProduct />
        
          <div className="flex-c-m flex-w w-full p-t-30">
            <Link
              href="product"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </Link>
          </div>
        </div>


      <div className="max-w-[85rem] mx-auto mt-8">
        <div className='container'>
        <Heading text={"SALIENT ASPECTS"}/>
        </div>
      <Aspects/>
      </div>

      <div className="container py-4">
      <Heading text={"MORE COLLECTION"}/>
      <Hero />
       </div>


    </>
  )
}

export default page