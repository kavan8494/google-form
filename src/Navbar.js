import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( <div>
        <nav className="navbar">
            <ul className="list">
                <li><Link to="/home">forms</Link></li>
                <li><Link to="/sheets">Sheet</Link></li>
                <li><Link to="/details">details</Link></li>
            </ul>
        </nav>
    </div> );
}
 
export default Navbar;