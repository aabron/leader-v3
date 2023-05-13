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
                <div className="flex flex-grid">
                    <div className="flex flex-col w-full">
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="All"/>    All</label>
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="Building" />   Building</label>
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="Apartment" />    Apartment</label>
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="Office"/>    Office</label>
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="Commercial" />   Commercial</label>
                        <label className="mx-5 my-3"><input type="checkbox" id="topping" name="topping" value="House" />    House</label>
                    </div>
                </div>
                <h2 className="text-lg text-gray my-4">Price Range</h2>
                <div>
                    <RangeSlider />
                </div>
                <h2 className="text-lg text-gray my-10">Size</h2>
                <div>
                    
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