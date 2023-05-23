import React from "react";
import { useState } from 'react'
import {GoLocation} from 'react-icons/go'
import CompRangeSlider from "./CompRadiusSlider"
import HouseCard from '../LeadFinderComp/HouseCard'
import Map from './CompMap'

const CompSearchResults = () => { 

  const latitude = 37.7749; 
  const longitude = -122.4194; 
  
  return (
    <div className="m-8">
        <div className='inline-grid grid-cols-2 grid-rows-2 w-3/4 max-w-[70rem]'>
            <div className="mt-4 col-start-1 row-start-1">
            <h1 className="text-xl">Find Comps</h1>
                <form>
                <h2 className="text-lg text-gray mb-4">Address</h2>
                <div>
                    <input id="location" type="text" placeholder="333 Euclid Ave." className="border border-gray-300 p-2 w-40" />
                </div>

                <h2 className="text-lg text-gray my-8">Extra Filters</h2>
                <div className="flex flex-grid">
                    <div className="flex flex-col w-72">
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="All"/>    Exact Match</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Building" />   Similar</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Apartment" />    Allow Other Types</label>
                    </div>
                </div>
                <h2 className="text-lg text-gray my-4">Radius from Property</h2>
                <div>
                    <CompRangeSlider />
                </div>
                <div className=" inline-grid grid-cols-2 w-[60%] h-12 mt-16 ">
                    <button className="w-[90%] h-full border-black border-2 rounded-lg hover:scale-105 drop-shadow-xl">
                        Find Comps
                    </button>
                    <button className="w-[90%] h-full border-black border-2 rounded-lg col-start-2 hover:scale-105 drop-shadow-xl">
                        Reset Filters
                    </button>
                </div>
                </form>
            </div>
            <div className="col-start-2 h-full my-auto mx-28 ">
                <Map latitude={latitude} longitude={longitude}/>
            </div>
            <div className="col-start-2 row-start-2 h-full w-[977px] mx-28 inline-block">
                <h1 className="text-2xl mx-auto flex justify-center items-center">Similar Properties</h1>
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                
            </div>
        </div>



    </div>
  )
}

export default CompSearchResults