import { useNavigate } from "react-router-dom";
import "./MainPage.css"
import SideBar from "../Components/SideBar";
import { useState } from "react";

const MainPage = ({user, setUser}) => {
    const navigate = useNavigate();

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    const handleWorkoutClick = (event) => {
        event.preventDefault();
        navigate("/Workout");
    }

    const handleWorkoutPlanClick = (event) => {
        event.preventDefault();
        navigate("/WorkoutPlan")
    }

    const handleDietClick = (event) => {
        event.preventDefault();
        navigate("/DietPlan");
    }

    const handleExerciseClick = (event) => {
        event.preventDefault();
        navigate("/Exercise");
    }

    return(
        <div>
            <div className="top">
                <h1 onClick={handleViewSidebar} className="name">Hi {user.name}</h1>
                <h1>Workout count: {user.workouts.length}</h1>
                <SideBar isOpen={sidebarOpen} 
                toggleSidebar={handleViewSidebar}
                user={user}
                setUser={setUser}/>
            </div>
            <div className="options">
                <button className="workout" onClick={handleWorkoutClick}>Record a Workout</button>
                <button className="diet" onClick={handleDietClick}>Diet Plans</button>
                <button className="workout-plan" onClick={handleWorkoutPlanClick}>Workout Plans</button>
                <button className="exercise" onClick={handleExerciseClick}>Explore Exercises</button>
            </div>
            
        </div>
    )

}

export default MainPage;