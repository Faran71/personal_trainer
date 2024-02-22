import { useState } from "react";

const DietPlan = () => {

    const [search, setSearch] = useState("");
    const [recipe, setRecipe] = useState(null);

    // Not working
    const getRecipe = async (search) => {
        const newResponse = await fetch(`https://api.calorieninjas.com/v1/recipe?query=${search}`,{
            method: "GET",
            headers: {'X-Api-Key':'EoE9Vfi9YlG4Q7OHKPYGOg==iDoP16NR6Snt1UNx',
            "Content-Type": "application/json"}
        })
        const newR = await newResponse.json();
        setRecipe(newR);
    }

    const handleClick = (event) => {
        event.precentDefault();
        getRecipe("mushroom risotto");
    }

    if(recipe){
        return(
            <div>
                <button onClick={handleClick}>Click</button>
                <p>{recipe[0].title}</p>
            </div>
        )
    } else {
        return(
            <div>
                <button onCLick={handleClick}>Click</button>
                <h1>No Recipe</h1>
            </div>
        )
    }
    

}

export default DietPlan;