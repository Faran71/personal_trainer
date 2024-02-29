import DisplayNutrition from "../Components/DisplayNutrition";
import "./DietPlan.css"

import { useState } from "react";

const DietPlan = () => {

    const [hideValidTag, setHideValidTag] = useState(true);

    const [search, setSearch] = useState("");
    const [nutrition, setNutrition] = useState({
        "items":[{
        "name": "None",
        "calories": 0,
        "serving_size_g": 0,
        "fat_total_g": 0,
        "fat_saturated_g": 0,
        "protein_g": 0,
        "sodium_mg": 0,
        "potassium_mg": 0,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 0,
        "fiber_g": 0,
        "sugar_g": 0
      }]});

    
    const getNutrition = async (search) => {
        const newResponse = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${search}`,{
            method: "GET",
            headers: {'X-Api-Key':'EoE9Vfi9YlG4Q7OHKPYGOg==iDoP16NR6Snt1UNx',
            "Content-Type": "application/json"}
        })
        const newR = await newResponse.json();
        if(newR.items.length === 0){
            setHideValidTag(false);
        } else {
            setNutrition(newR);
            setSearch("");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(search !== ""){
            getNutrition(search);
            setHideValidTag(true);
        } else {
            setHideValidTag(false);
        }
    }


    return(
        <div className="main-diet-page">
            <form onSubmit={handleFormSubmit}>
                <h3>Enter a food item to find its nutritional values</h3>
                <input type="text" 
                name="search"
                placeholder="Enter..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
                <p hidden={hideValidTag}>Please enter a valid expression</p>
            </form>
            <div className="display">
                <DisplayNutrition item={nutrition.items[0]}/>
            </div>
        </div>
    )

}

export default DietPlan;