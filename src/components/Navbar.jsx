import Menu from "./Menu";
import React from 'react';

const { directive } = require("@babel/types");

function Navbar()
{
    return(
        <div className="w-max h-20 mx-0 my-3 flex">
            <div className="w-max h-auto inset-y-0 left-0">
                <img alt="logo" src={require('./images/logo.png')} className="w-40 h-22"/>
               <Menu></Menu>
            </div>
        </div>
    );
}

export default Navbar;
