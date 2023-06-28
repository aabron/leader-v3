import React, { useState } from 'react';
import { Range } from 'react-range';

const MIN = 0;
const MAX = 100;
const STEP = 1;

const RangeSlider = () => {
  const [values, setValues] = useState([0, 100]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <div className="w-full h-2 rounded-full bg-gray-300">
        <Range
            values={values}
            min={MIN}
            max={MAX}
            step={STEP}
            onChange={handleChange}
            renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-2 rounded-full bg-gray flex relative w-80"
                >
                  <div
                    className="absolute h-full bg-black"
                    style={{
                      left: `${values[0] / MAX * 100}%`,
                      width: `${(values[1] - values[0]) / MAX * 100}%`
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-black rounded-full"
                >
                  <div className="text-white text-sm flex justify-center items-center h-full w-full my-5">
                    {"$" +values[index] * 10000}
                  </div>
                </div>
              )}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
