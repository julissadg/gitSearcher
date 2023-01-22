import { useEffect } from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={()=> setActive(!active)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={ active ? "navbar-menu is-active" : "navbar-menu" }>
                <div className="navbar-start">
                    <Link className="navbar-item" to={`/`} onClick={()=> setActive(!active)}>Home</Link>
                    <Link className="navbar-item" to={`/users`} onClick={()=> setActive(!active)}>User Search</Link>
                    <Link className="navbar-item" to={`/repositories`} onClick={()=> setActive(!active)}>Repository Search</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;