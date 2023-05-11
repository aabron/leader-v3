import Svgmain from "./images/Svgmain.svg";

const { directive } = require("@babel/types");


function Hero()
{
    return(
        <div className="w-full h-[calc(100vh-150px)]">
            <div className="w-full inline-grid grid-cols-2 h-full p-0 m-0" id="main-hero">
                <div className="w-full flex justify-end my-auto" id="main-svg">
                    <img src={require("./images/placeholderimage.jpg")} className="w-72 h-72"/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero;