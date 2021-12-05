import React from 'react';
import {Link, NavLink} from 'C:/Users/AGA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'




const Menu = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">       
            <Link className="navbar-brand"  to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"   aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                 <div className="collapse navbar-collapse" >
                   <ul className="navbar-nav">
                     <li className="nav-item">
                       <NavLink className="nav-link" exact to="/">Home </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" exact to="/about">About</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                    </li>
                  </ul>
               </div>
              <div>
              <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
            </div>
          </div>
      </nav>
    )
}

export default Menu;