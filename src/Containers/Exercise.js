import { useState } from "react";
import "./Exercise.css";
import DisplayExercise from "../Components/DisplayExercise";

const Exercise = () => {

    const [search, setSearch] = useState("");
    const [exercises, setExercises] = useState([]);
    const [hideValidTag, setHideValidTag] = useState(true);

    const getExercises = async (search) => {
        const newResponse = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${search}`,{
            method: "GET",
            headers: {'X-Api-Key':'EoE9Vfi9YlG4Q7OHKPYGOg==Vi65m68H8XlNUMAX',
            "Content-Type": "application/json"}
        })
        const newR = await newResponse.json();
        if(newR.length === 0){
            setHideValidTag(false);
        } else {
            setExercises(newR);
            setSearch("");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(search !== ""){
            getExercises(search);
            setHideValidTag(true);
        } else {
            setHideValidTag(false);
        }

    }

    const displayExercises = exercises.map((temp) => {
        return(
            <div>
                <DisplayExercise exercise={temp}/>
            </div>
        )
    })


    return(
        <div className="exercise-main-page">
            <form onSubmit={handleFormSubmit}>
                <h3>Enter a body part</h3>
                <input type="text" 
                name="search"
                placeholder="Enter..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Click</button>
                <p hidden={hideValidTag}>Please enter a valid expression</p>
            </form>
            {exercises.length===0 ? <p>Please Enter a valid body part to begin search</p>: <div className="exercises-box">{displayExercises}</div>}
        </div>
    )

}

export default Exercise;