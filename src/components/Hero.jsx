import { ReactComponent as Svgmain} from "./images/Svgmain.svg";
import { react, useState } from "react";
import Navbar from "./Navbar";

const { directive } = require("@babel/types");


function Hero()
{
    return(
        <div>
            <Navbar/>
            <div className="w-full h-[calc(100vh-150px)]">
                <div className="w-full inline-grid grid-cols-2 h-full p-0 m-0" id="main-hero">
                    <div className="z-10 w-full flex justify-end my-auto" id="main-svg">
                        <Svgmain className="w-[30rem] h-96"/>
                    </div>
                    <div className="relative right-80 border-2 h-72 w-72 my-auto mx-4 rounded-3xl transform animate-spin-moveRight">
                        <p className="fit-content text-5xl mx-4 my-5">
                            Lead the way to saving time with Leader
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;