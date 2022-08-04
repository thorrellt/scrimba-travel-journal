import { useState } from 'react'
import gpsMarker from '../assets/gps_marker.png'

export default function Card() {
    return (
        <div className='card'>
            <img src="https://source.unsplash.com/WLxQvbMyfas" className='coverImg' alt="cover photo" />
            <div className='content'>
                <div className="location">
                    <img src={gpsMarker} className='gpsMarker' alt="" />
                    <p>japan</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <p className='dates'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>

            </div>
        </div>
    )
}