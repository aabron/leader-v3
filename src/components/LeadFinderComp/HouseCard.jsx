import React from 'react'
import {GoLocation} from 'react-icons/go'
// import { TempHouse  } from '../images/tempHouse.jpg'

const HouseCard = (props) => {
  return (
    
<div class="max-w-sm w-[270px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 md:w-[200px] md:mx-5 ">
    <a href="#">
        <img class="rounded-t-lg" src='https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg' alt="bro" />
    </a>
    <div class="p-3 flex flex-col">
        <div className="flex flex-row justify-between">
         <h2 className='text-lg '>{props.type}</h2>
         <h2 className='text-lg text-moneygreen '>${props.price}</h2>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row align-center">
            <GoLocation className='text-2xl md:text-lg'/>
            <h2 className='text-lg md:text-sm'>{props.loc}</h2>
            </div>
            <h2 className='text-lg md:text-sm'>per {props.ppx}</h2>
        
        </div>
    </div>
</div>

  )
}

export default HouseCard