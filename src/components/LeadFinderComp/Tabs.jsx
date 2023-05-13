import React from 'react'
import {GrNotification} from 'react-icons/gr'
import {BsFillPersonFill} from 'react-icons/bs'

const Tabs = () => {
  return (
    <div className="flex flex-row">
        <div className="flex mt-2 mr-4 w-24 h-8 border-2 border-black rounded-xl justify-center items-center">
            Logout
        </div>
        <div className="flex w-12 h-12 border-2 border-gray rounded-xl justify-center items-center">
            <GrNotification className="text-2xl text-gray"/>
        </div>
        <div className="flex ml-4 w-12 h-12 border-2 border-gray rounded-xl justify-center items-center">
            <BsFillPersonFill className="text-2xl text-gray"/>
        </div>
    </div>
  )
}

export default Tabs