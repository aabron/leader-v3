import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowLeftCircleFill } from 'react-icons/bs';

const SignupTopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-8 sticky top-0'>
        <div>
          <img src={require('../images/logo.png')} className="h-20 mr-3" alt="Leader Logo"/>
        </div>
        <div className="flex mr-4 w-12 h-12 border-2 border-gray rounded-xl justify-center items-center hover:scale-105">
            <Link to={`/`}>
                <BsFillArrowLeftCircleFill className="text-2xl  hover:to-black " />
            </Link>
        </div>
    </div>
  )
}

export default SignupTopBar