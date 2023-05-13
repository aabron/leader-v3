import React from 'react';
import { Link } from 'react-router-dom';

function Menu()
{
    const locations = ['About' , 'Leads', 'Comps'];

    return(
        <ul className="flex my-10 absolute right-0 mx-0 font-display top-0 mr-8 ">
            {locations.map((item,index) => (
                <li key={index} className="mx-3 hover:text-gray transition"><Link to={`/item${index}`}>{item}</Link></li>
            ))}
            <li className="ml-2 px-4 bg-black rounded text-offwhite hover:bg-offwhite hover:border-black hover:border hover:text-black transition"><a href="#">Sign In</a></li>
        </ul>
    );
}

export default Menu;