import React from 'react'
import products from './products'

function ShowP() {
    let R = products.length
    return (
        <div>
            <div> <ul>{products.map(A => <li> {A.title} {A.id} {A.price}</li>)}</ul> </div>
        </div>
    )
}

export default ShowP
