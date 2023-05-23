
import React from 'react'
import NameDate from './NameDate';
import Tabs from './Tabs';

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-8'>
        <div>
          <img src={require('../images/logo.png')} className="h-20 mr-3" alt="Leader Logo"/>
        </div>
        <NameDate />
        <Tabs />
    </div>
  )
}

export default TopBar