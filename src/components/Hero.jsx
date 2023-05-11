import Svgmain from "./images/Svgmain.svg";

const { directive } = require("@babel/types");


function Hero()
{
    return(
        <div className="w-screen h-screen p-0 m-0 inline-block align-middle" id="main-hero">
            <div className="inline-flex mx-auto mt-40" id="main-svg">
                <img src={require("./images/placeholderimage.jpg")} className="w-72 h-auto mx-auto"/>
                <div className="h-28 w-28 mx-5 my-auto outline-2">

                </div>
            </div>
        </div>
    )
}

export default Hero;