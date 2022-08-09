import React from "react"

export default function Card(props) {
    const rank = props.index + 1
    return (
        <tr className={rank % 2 == 0 ? "bg-indigo-400 text-white" : null}>
            <td className="text-center pt-3 pb-3 pl-3"><img src={props.info.team.logos[0].href} className="w-12 mx-auto" alt="" /> </td>
            <td className="text-center pt-3 pb-3">{rank}</td>
            <td className="text-center">{props.info.team.name}</td>
            <td className="text-center">{props.info.stats[3].value}</td>
            <td className="text-center">{props.info.stats[0].value}</td>
            <td className="text-center">{props.info.stats[2].value}</td>
            <td className="text-center">{props.info.stats[1].value}</td>
            <td className="text-center">{props.info.stats[4].value}</td>
            <td className="text-center">{props.info.stats[5].value}</td>    
        </tr>     
    )
}