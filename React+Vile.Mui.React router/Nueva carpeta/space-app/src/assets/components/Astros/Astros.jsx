import { useState, useEffect } from "react";
import "./Astros.css";

const Astro = (props) => {
    return (
            <div className="card flex">
                <p className="card-name">{props.name}</p>
                <p className="card-station">Craft: {props.craft}</p>
                </div>
    )
}

const Astros = () => {
    const [astros, setAstros] = useState([])

    useEffect(()=>{
        try{
            const fetchData = async () => {
                const response = await fetch("http://api.open-notify.org/astros.json");
                const result = await response.json();
                setAstros(result.people);
            }
            fetchData();
        } catch (error) {
            console.error(error);
        }
    },[])
    return (
        <div className="cards-container flex">
            {
                astros.map((astro, index)=> (
                    <Astro key={index} {... astro} />
                ))
            }
            </div>
    )
}
export default Astros;
