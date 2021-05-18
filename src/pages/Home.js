import React from 'react'

import { useRouteMatch } from 'react-router-dom'

function Home() {

    let mat = useRouteMatch();
    return (
        <div>
            Home hi
            <p>{mat.url}</p>
        </div>
    )
}

export default Home
