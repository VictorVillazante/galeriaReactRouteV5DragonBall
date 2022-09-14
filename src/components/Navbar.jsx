import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';
import {authTypes} from '../types/authTypes';

const Navbar = () => {
    const {dispatch} = useContext(AuthContext);
    const history=useHistory();
    const handleLogout=()=>{    
        dispatch({type:authTypes.logout});
        history.replace("login")
    }
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Bolas del dragon
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to={"/men"}
                    >
                        Men
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to={"/women"}
                    >
                        Women
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to={"/search"}
                    >
                        Search
                    </NavLink>
                </li>
            </ul>
            <div className='d-flex'>
                <button className='btn btn-danger' onClick={handleLogout}>
                    Logout
                </button>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar