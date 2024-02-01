import { useNavigate } from "react-router-dom";
import "./MainPage.css"

const MainPage = ({name, weight, selectedAge}) => {
    const navigate = useNavigate();

    const handleWorkoutClick = (event) => {
        event.preventDefault();
        navigate("/WorkoutPlan")
    }

    return(
        <div>
            <div className="top">
                <h1>Hi {name}</h1>
                <h1>You weight {weight}kg</h1>
            </div>
            <div className="options">
                <button className="diet">Diet Plans</button>
                <button className="workout" onClick={handleWorkoutClick}>Workout Plans</button>
                <button className="excercise">Explore Excercises</button>
            </div>
            
        </div>
    )

}

export default MainPage;