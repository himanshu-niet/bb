"use client"
import Link from 'next/link'
import React from 'react'



const Hero = () => {


  return (

   
    <div className="p-b-10">

          <div className='grid md:grid-cols-3 gap-x-4 gap-y-3 grid-flow-row-dense'>

            <div className="block1-hero wrap-pic-w row-span-2 md:col-span-2 overflow-hidden">
              <Link
                href="product?category=Kora"
              >
              <img src="images/m1.jpg" alt="IMG-BANNER" className='transition duration-300 ease-in-out hover:scale-105' />    
              </Link>
            </div>
            <div className="block1 wrap-pic-w overflow-hidden">
            <Link
            href="product?category=Tussar"
          >
          <img src="images/m2.jpg" alt="IMG-BANNER" className='transition duration-300 ease-in-out hover:scale-105'/>            
          </Link>
            </div>
            <div className="block1 wrap-pic-w overflow-hidden">
            <Link
            href="product?category=Organza"
          >
          <img src="images/m3.jpg" alt="IMG-BANNER" className='transition duration-300 ease-in-out hover:scale-105'/>
          </Link>
            </div>

          </div>

        </div>
  )
}

export default Hero