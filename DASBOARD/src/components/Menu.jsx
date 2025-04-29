import React from 'react'
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav >
      <div className="menu-container">
        <div className="menus">
          <ul >
            <li >
              <Link  style={{ textDecoration: "none" }} to={"/"}>dashboard </Link>
            </li>
            <li className="nav-item mx-3">
              <Link  style={{ textDecoration: "none" }} to={"/order"}>order</Link>
            </li>
            <li className="nav-item mx-3">
              <Link  style={{ textDecoration: "none" }} to={"/holding"}>holding</Link>
            </li>
            <li className="nav-item mx-3">
              <Link  style={{ textDecoration: "none" }} to={"/position"}>positions</Link>
            </li>
            <li className="nav-item mx-3">
              <Link  style={{ textDecoration: "none" }} to={"/funds"}>Funds</Link>
            </li>
            <li className="nav-item mx-3">
              <Link  style={{ textDecoration: "none" }} to={"/apps"}>app</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu