import React, { useState } from 'react'

function Maps() {
    // state
    const [value, setValue] = useState()
    // map functions
    const someList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // someList.map()
    // useEffect
    return (
        <div>{someList.map(i => <p>{i}</p>)}</div>
    )
}

export default Maps