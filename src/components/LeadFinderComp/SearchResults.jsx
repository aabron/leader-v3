import React from "react";
import { useState } from 'react'
import {GoLocation} from 'react-icons/go'
import RangeSlider from "./Slider";
import HouseCard from './HouseCard'
import Map from './Map'

const SearchResults = () => { 

  const latitude = 37.7749; 
  const longitude = -122.4194; 
  
  return (
    <div className="m-8">
        <div className='inline-grid grid-cols-3 w-3/4 max-w-[70rem]'>
            <h1 className="text-xl">Filters</h1>
            <div className="mt-4 col-start-1">
                <form>
                <h2 className="text-lg text-gray mb-4">Location</h2>
                <div>
                    <input id="location" type="text" placeholder="Detroit, MI" className="border border-gray-300 p-2 w-40" />
                </div>

                <h2 className="text-lg text-gray my-4">Building Type</h2>
                <div className="flex flex-grid">
                    <div className="flex flex-col w-72">
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="All"/>    All</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Building" />   Building</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Apartment" />    Apartment</label>
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Office"/>    Office</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Commercial" />   Commercial</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="House" />    House</label>
                    </div>
                </div>
                <h2 className="text-lg text-gray my-4">Price Range</h2>
                <div>
                    <RangeSlider />
                </div>
                <h2 className="text-lg text-gray mt-12 my-4">Size</h2>
                <div>
                    <div className="inline-grid grid-cols-2 w-96 h-12">
                        <div className="col-start-1">
                            <input id="min-sq-ft" type="number" placeholder="Min Sq. Ft." className="border border-gray-300 p-2 w-40" />
                        </div>
                        <div className="col-start-2">
                            <input id="max-sq-ft" type="number" placeholder="Max Sq. Ft." className="border border-gray-300 p-2 w-40" />
                        </div>
                    </div>
                </div>
                <h2 className="text-lg text-gray mt-10 my-3">Features</h2>
                <div className="flex flex-grid">
                    <div className="flex flex-col w-72">
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Central Air"/>    Central Air</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Pool" />   Pool</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Garage" />    Garage</label>
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Backyard"/>    Backyard</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Fitness Center" />   Fitness Center</label>
                        <label className="mx-5 my-1"><input type="checkbox" id="topping" name="topping" value="Furnished" />    Furnished</label>
                    </div>
                </div>
                <div className=" inline-grid grid-cols-2 w-full h-12 mt-10 ">
                    <button className="w-[90%] h-full border-black border-2 rounded-lg hover:scale-105 drop-shadow-xl">
                        Find Lead
                    </button>
                    <button className="w-[90%] h-full border-black border-2 rounded-lg col-start-2 hover:scale-105 drop-shadow-xl">
                        Reset Filters
                    </button>
                </div>
                </form>
            </div>
            <div className="col-start-2 mx-10">
                <h1 className="text-2xl mx-5">241 Results</h1>
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                <HouseCard type="Modern House" loc="Detroit, MI" price="300" ppx="month" />
                
            </div>
            <div className="col-start-3 h-full my-auto mr-4">
                <Map latitude={latitude} longitude={longitude}/>
            </div>
        </div>



    </div>
  )
}

export default SearchResults