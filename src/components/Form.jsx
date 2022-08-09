import React from "react";
import Card from "./Card";

export default function Form() {
    const [season, setSeason] = React.useState("2021")
    const [data, setData] = React.useState()
    
    function handleChange(event) {
        if (event.target.value >= 2001 && event.target.value <= 2022) {
            setSeason(event.target.value)
            console.log(season)
    }
        }
        
    function handleSubmit(event) {
        event.preventDefault()
    }

    React.useEffect(() => {
        fetchData()
      },[season])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${season}&sort=asc`)
            const json = await response.json()
            setData(json)
        } 
        catch (error) {
            console.log(`Error: ${error} `)
        }
    };
    
    return (
        <div>
            <form className="flex justify-center mb-6" >
                <label htmlFor="" className="inline-block h-6 pr-3 mt-14">Select a year</label>
                <input type="number" className="h-6 border border-gray-800 mt-14 pl-3" value={season} onChange={handleChange} min="2001" max="2022" step="1" />
            </form>
            <br />
            <table className="table-auto mx-auto text-xl border-collapse">
                <thead>
                    <tr className="rounded-br-lg">
                        <th className="p-5"></th>
                        <th className="p-5">Rank</th>
                        <th className="p-5">Team</th>
                        <th className="p-5">Matches played</th>
                        <th className="p-5">Wins</th>
                        <th className="p-5">Draws</th>
                        <th className="p-5">Losses</th>
                        <th className="p-5">Goals For</th>
                        <th className="p-5">Goals Against</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.data.standings.map((standing, index) => (
                        <Card info={standing} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )  
}
