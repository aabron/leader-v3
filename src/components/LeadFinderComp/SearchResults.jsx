import React from 'react'
import {GoLocation} from 'react-icons/go'

const SearchResults = () => {
  return (
    <div className="m-8">
        <div>
            <h1 className="text-xl">Filters</h1>
            <div className="mt-4">
                <h2 className="text-lg text-gray mb-4">Location</h2>
                <div>
                    <input id="location" type="text" placeholder="Detroit, MI" className="border border-gray-300 p-2 w-40" />
                </div>

                <h2 className="text-lg text-gray my-4">Type Of Place</h2>
                <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                    <input type="checkbox" id="topping" name="topping" value="All" />All
                    <input type="checkbox" id="topping" name="topping" value="Building" />Building
                    <input type="checkbox" id="topping" name="topping" value="Apartment" />Apartment
                    </div>
                    <div className="flex flex-col w-full justify-center">
                    <input type="checkbox" id="topping" name="topping" value="All" />All
                    <input type="checkbox" id="topping" name="topping" value="Building" />Building
                    <input type="checkbox" id="topping" name="topping" value="Apartment" />Apartment
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default SearchResults