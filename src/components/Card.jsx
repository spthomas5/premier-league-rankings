import React from "react"

export default function Card(props) {
    const rank = props.index + 1
    return (
        <div className={`card ${rank % 2 == 0 ? "card-white" : "card-purple"}`}>
            <div className="card-left">
                <h4 className="">{rank}</h4>
                <img src={props.info.team.logos[0].href} className="team-logo" align="left" alt="" />
            </div>
        
            <h4 className="card-center"> {props.info.team.location}</h4>
            <div className="record">
                <b>{props.info.stats[12].summary}</b>
            </div>
        </div>
    )
}