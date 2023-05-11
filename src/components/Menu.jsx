import React from 'react';
import { Link } from 'react-router-dom';

function Menu()
{
    const locations = ['About' , 'Leads', 'Comps', 'Sign In', 'Sign Up'];

    return(
        <ul className="flex my-10 absolute right-0 mx-0 font-display top-0">
            {locations.map((item,index) => (
                <li key={index} className="mx-3"><Link to={`/item${index}`}>{item}</Link></li>
            ))}    
        </ul>
    );
}

export default Menu;