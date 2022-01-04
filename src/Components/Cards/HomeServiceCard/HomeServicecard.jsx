import React from 'react'
import { HtmlIcon, ReactIcon } from '../../../Assets/SVGIcons'
import './homeservicecard.css'

function HomeServicecard({data}) {
    return (
        <div className="home-service-card-container">

            <div className="home-service-card-icon">
               {data.icon}
            </div>

            <span className='home-service-card-tittle'>{data.tittle}</span>

            <p className="home-service-card-content">
           {data.content}
            </p>

        </div>
    )
}

export default HomeServicecard
