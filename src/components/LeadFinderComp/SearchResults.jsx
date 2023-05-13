import React from "react";
import { useState } from 'react'
import {GoLocation} from 'react-icons/go'
import RangeSlider from "./Slider";
import HouseCard from './HouseCard'

const SearchResults = () => { 
  const [values, setValues] = useState([0, 100]);

  const handleChange = (values) => {
    setValues(values);
  };

  const displayValues = values.map((value) => value * 1000);
  
  return (
    <div className="m-8">
        <div className='inline-grid grid-cols-3 w-full'>
            <h1 className="text-xl">Filters</h1>
            <div className="mt-4 col-start-1">
                <h2 className="text-lg text-gray mb-4">Location</h2>
                <div>
                    <input id="location" type="text" placeholder="Detroit, MI" className="border border-gray-300 p-2 w-40" />
                </div>

                <h2 className="text-lg text-gray my-4">Type Of Place</h2>
                <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                        <input type="checkbox" id="topping" name="topping" value="All"/>
                        <input type="checkbox" id="topping" name="topping" value="Building" />
                        <input type="checkbox" id="topping" name="topping" value="Apartment" />
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <input type="checkbox" id="topping" name="topping" value="All"/>
                        <input type="checkbox" id="topping" name="topping" value="Building"/>
                        <input type="checkbox" id="topping" name="topping" value="Apartment"/>
                    </div>
                </div>
                <h2 className="text-lg text-gray my-4">Price Range</h2>
                <div>
                    <RangeSlider />
                </div>
            </div>
            <div className="col-start-2 col-span-2">
                <h1 className="text-2xl">241 Results</h1>
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                
            </div>
        </div>



    </div>
  )
}

export default SearchResults