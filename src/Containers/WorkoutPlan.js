import { useEffect, useState } from "react";
import FourTimes from "../Components/FourTimes";
import ThreeTimes from "../Components/ThreeTimes";
import "./WorkoutPlan.css"
import FiveTimes from "../Components/FiveTimes";



const WorkoutPlan = () => {
    
    const [numberOfDays, setNumberOfDays] = useState(3)

    const numberOfDaysSelected = () => {
        if(numberOfDays === 3){
            return(
                <div>
                    <ThreeTimes />
                </div>
            )
        } else if(numberOfDays === 4){
            return(
                <div>
                    <FourTimes />
                </div>
            )
        } else if(numberOfDays === 5){
            return(
                <div>
                    <FiveTimes />
                </div>
            )
        } else {
            return(
                <div>
                    <h1>Pick a number to configure you week plan</h1>
                </div>
            )
        }
    }

    return(
        <div className="main-workout">
            <div className="btns">
                <button onClick={() => {setNumberOfDays(3)}}>3</button>
                <button onClick={() => {setNumberOfDays(4)}}>4</button>
                <button onClick={() => {setNumberOfDays(5)}}>5</button>
            </div>
            {numberOfDaysSelected()}
        </div>
    )

}

export default WorkoutPlan;