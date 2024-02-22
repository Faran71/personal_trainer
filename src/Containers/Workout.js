import IndividualWorkout from "../Components/IndividualWorkout"
import "./Workout.css"
import CalendarComponent from "../Components/CalendarComponent"

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
            <CalendarComponent user={user} />
            {user.workouts.length === 0 ? <p>No Workouts on Record</p>: <div className="workouts-box">{displayWorkouts}</div>}
        </div>
    )

    

}

export default Workout;