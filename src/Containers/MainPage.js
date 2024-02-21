import { useNavigate } from "react-router-dom";
import "./MainPage.css"

const MainPage = ({user}) => {
    const navigate = useNavigate();

    const handleWorkoutClick = (event) => {
        event.preventDefault();
        navigate("/WorkoutPlan")
    }

    const handleDietClick = (event) => {
        event.preventDefault();
        navigate("/DietPlan");
    }

    return(
        <div>
            <div className="top">
                <h1>Hi {user.name}</h1>
                <h1>You weight {user.weight}kg</h1>
            </div>
            <div className="options">
                <button className="diet" onClick={handleDietClick}>Diet Plans</button>
                <button className="workout" onClick={handleWorkoutClick}>Workout Plans</button>
                <button className="excercise">Explore Excercises</button>
            </div>
            
        </div>
    )

}

export default MainPage;