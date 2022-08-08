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
            console.log("SET DATA")
        } 
        catch (error) {
            console.log("error")
        }
    };
    
    return (
        <div>
            <form>
                <label htmlFor="">Select a year</label>
                <input type="number" className="year-select" value={season} onChange={handleChange} min="2001" max="2022" step="1" />
            </form>
            <br />
            <div className="cards">
                {data && data.data.standings.map((standing, index) => (
                    <Card info={standing} index={index} />
                ))}
            </div>
        </div>
    )  
}
