import React from 'react'
import './workflowcard.css'
import { DiscoverIcon, IdeaIcon } from '../../../Assets/SVGIcons'

function WorkFlowCard({data}) {
    return (
        <div className="workflow-card-container">

        <div className="workflow-card-icon">
         {data.icon}
        </div>

        <span className='workflow-card-tittle'>{data.tittle}</span>

        <p className="workflow-card-content">
       {data.content}
        </p>

    </div>
    )
}

export default WorkFlowCard
