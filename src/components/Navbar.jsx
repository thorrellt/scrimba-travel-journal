import { useState } from 'react'
import globe from '../assets/globe.png'

export default function Navbar(){
    return (
        <nav>
            <img src={globe} alt="globe" />
            <h3 className='nav--title'>my travel journal</h3>
        </nav>
    )
}