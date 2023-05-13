import React from 'react'
import NameDate from './NameDate';
import Tabs from './Tabs';

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-8'>
        <NameDate />
        <Tabs />
    </div>
  )
}

export default TopBar