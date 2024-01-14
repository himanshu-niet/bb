import React from 'react'

const Aspects = () => {
    return (
        <nav  className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4  gap-6 sm:gap-y-0 sm:gap-x-4">
            <div className="block-lm-m  flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 transform transition duration-300 hover:-translate-y-4 pointer">
                <img className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" src='icons/fast.png'/>
                <span className="mt-2">
                    <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
                        Expedited Shipping
                    </span>
                    <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
                        Fast-track your fashion game with Expedited Shipping, Style on your doorstep, pronto.
                    </span>
                </span>
            </div>
            <div className="block-lm-m  flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 transform transition duration-300 hover:-translate-y-4 pointer">
                <img className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" src='icons/christmas.png' />
                <span className="mt-2">
                    <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
                        Gift Pack
                    </span>
                    <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
                        Make gifting effortless with our elegant gift packs; we offer discreet gift delivery for that extra touch of thoughtfulness.
                    </span>
                </span>
            </div>
            <div className="block-lm-m  flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 transform transition duration-300 hover:-translate-y-4 pointer">
                <img className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" src='icons/security.png'/>
                <span className="mt-2">
                    <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">
                        Shop Securely
                    </span>
                    <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
                        Rest assured, our secure payment system ensures that your transactions are protected every time you shop with us.
                    </span>
                </span>
            </div>
            <div className="block-lm-m  flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 transform transition duration-300 hover:-translate-y-4 pointer">
                <img className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" src='icons/clock.png'/>
                <span className="mt-2">
                    <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">
                        Round-the-Clock Support
                    </span>
                    <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
                        We're Here Around the Clock to Assist with All Your Style Emergencies and Fulfill Every Shopping Need You Have.
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Aspects