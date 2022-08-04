import { useState } from 'react'
import gpsMarker from '../assets/gps_marker.png'

export default function Card(props) {
    console.log(props)
    return (
        <div className='card'>
            <img src={props.imageUrl} className='coverImg' alt="cover photo" />
            <div className='content'>
                <div className="location">
                    <img src={gpsMarker} className='gpsMarker' alt="" />
                    <p>{props.location}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className="description">
                    {props.description}
                </p>

            </div>
        </div>
    )
}