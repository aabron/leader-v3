import React from 'react'
import {GrNotification} from 'react-icons/gr'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigation } from 'react-router-dom'

const Tabs = () => {
  return (
    <div className="flex flex-row">
        <div className="flex mt-2 mr-4 w-24 h-8 border-2 border-gray rounded-xl justify-center items-center hover:scale-105">
            Logout
        </div>
        <div className="flex mr-4 w-12 h-12 border-2 border-gray rounded-xl justify-center items-center hover:scale-105">
            <Link to={`/`}>
                <BsFillArrowLeftCircleFill className="text-2xl  hover:to-black " />
            </Link>
        </div>
        <div className="flex w-12 h-12 border-2 border-gray rounded-xl justify-center items-center hover:scale-105">
            <GrNotification className="text-2xl text-gray"/>
        </div>
        <div className="flex ml-4 w-12 h-12 border-2 border-gray rounded-xl justify-center items-center hover:scale-105">
            <BsFillPersonFill className="text-2xl "/>
        </div>
    </div>
  )
}

export default Tabs