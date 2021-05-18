/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faTasks, faPalette, faBlog, faAddressCard, faInfoCircle  } from '@fortawesome/free-solid-svg-icons'


import {Link, useLocation} from 'react-router-dom'

function Navigation() {
    let location = useLocation();
    let path = location.pathname;

    return (
        <nav class=" relative flex justify-center items-center w-full bg-darkBlue h-20">
        <ul class="flex flew-grow w-2/3 justify-evenly text-2xl">
          <li class={"navLink relative hover:text-white " + (path === '/' ? "text-white navLinkActive" : " text-sandle" )}>
            <Link  to="/"> <span class={(path === '/' ? "text-sandle " : " text-white hover:text-sandle" )}> <FontAwesomeIcon  icon={faHome}/> </span>Home</Link>
          </li>
          <li class="navLink relative hover:text-white text-sandle ">
            <a href="https://blogs.verreauxblack.biz"> <span class="text-white hover:text-sandle"> <FontAwesomeIcon  icon={faBlog}/> </span>Blogs</a>
          </li>
          <li class={"navLink relative hover:text-white " + (path === '/contact' ? "text-white navLinkActive" : " text-sandle " )}>
            <Link to="/contact"> <span class={(path === '/contact' ? "text-sandle " : " text-white hover:text-sandle" )}> <FontAwesomeIcon  icon={faAddressCard}/> </span>Contact</Link>
          </li>
          <li class={"navLink relative hover:text-white " + (path === '/about' ? "text-white navLinkActive" : " text-sandle " )}>
            <Link to="/about"> <span class={(path === '/about' ? "text-sandle " : " text-white hover:text-sandle" )}> <FontAwesomeIcon  icon={faInfoCircle}/> </span>About</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation
