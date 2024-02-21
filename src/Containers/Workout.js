import Calendar from "react-calendar"
import IndividualWorkout from "../Components/IndividualWorkout"
import "./Workout.css"

const Workout = ({user}) => {

    const displayWorkouts = user.workouts.map((temp) => {
        return(
            <div>
                <IndividualWorkout workout={temp}/>
            </div>
        )
    })

    return(
        <div>
            <p>workout</p>
            <Calendar user={user}/>
            <div className="workouts-box">
                {displayWorkouts}
            </div>
        </div>
    )

}

export default Workout;