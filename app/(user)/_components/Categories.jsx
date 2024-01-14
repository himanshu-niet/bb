import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    
    <div className="row">
    <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
      {/* Block1 */}
      <div className="block1 wrap-pic-w">
        <Link
          href="product?category=Georgette"
        >
        <img src="images/cat1.jpg" alt="IMG-BANNER" className='transform transition duration-300 hover:-translate-y-4 '/>
        
        </Link>
      </div>
    </div>
    <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
      {/* Block1 */}
      <div className="block1 wrap-pic-w">
        <Link
          href="product?category=Katan"
        >
        <img src="images/cat2.jpg" alt="IMG-BANNER" className='transform transition duration-300 hover:-translate-y-4 '/>
        
        </Link>
      </div>
    </div>
    <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
      {/* Block1 */}
      <div className="block1 wrap-pic-w">
      <Link
        href="product?category=All"
      >
      <img src="images/cat3.jpg" alt="IMG-BANNER" className='transform transition duration-300 hover:-translate-y-4 '/>
      
      </Link>
    </div>
    </div>
  </div>
  )
}

export default Categories