import React from 'react'
import { useRouteMatch } from 'react-router-dom'

function Contact() {
        let mat = useRouteMatch();
    return (
        <div>
            Contact
            <p>{mat.url}</p>
        </div>
    )
}

export default Contact
