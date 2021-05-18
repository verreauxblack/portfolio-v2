import React from 'react'

import { useLocation } from 'react-router-dom'

function About() {
    let location = useLocation();
    return (
        <div>
            About
            <p>{location.pathname === '/about' ? 'true' : 'false'}</p>
        </div>
    )
}

export default About
