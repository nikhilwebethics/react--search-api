import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {

    const amount = useSelector(state => state.amount)

    return(
            <div className="nav"  style={{backgroundColor: "lightblue"}} >
                <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>  
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Api Posts</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Amount : {amount}</a>
                </li>
                </ul>
            </div>
    );
}
export default NavBar;