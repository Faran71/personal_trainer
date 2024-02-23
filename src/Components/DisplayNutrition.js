import "./DisplayNutrition.css"

const DisplayNutrition = ({item}) => {

    return(
        <div className="table-nutrition">
            <p>Name</p>
            <p>{item.name}</p>
            <p>Calories</p>
            <p>{item.calories}</p>
            <p>Serving Size</p>
            <p>{item.serving_size_g} g</p>
            <p>Fat Total</p>
            <p>{item.fat_total_g} g</p>
            <p>Fat saturated</p>
            <p>{item.fat_saturated_g} g</p>
            <p>Protein</p>
            <p>{item.protein_g} g</p>
            <p>Sodium</p>
            <p>{item.sodium_mg} mg</p>
            <p>Potassium</p>
            <p>{item.potassium_mg} mg</p>
            <p>Cholesterol</p>
            <p>{item.cholesterol_mg} mg</p>
            <p>Carbohydrates Total</p>
            <p>{item.carbohydrates_total_g} g</p>
            <p>Fiber</p>
            <p>{item.fiber_g} g</p>
            <p>Sugar</p>
            <p>{item.sugar_g} g</p>
        </div>
    )

}

export default DisplayNutrition;