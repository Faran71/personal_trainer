import "./IndividualWorkout.css"
const IndividualWorkout = ({workout}) => {


    return(
        <div className="workout-individual">
            <h3>{workout.activity}</h3>
            <div className="description">
                <p>Date: {workout.workoutDate}</p>
                <p>Time: {workout.workoutTime.slice(0,8)}</p>
                <p>Duration: {workout.duration} mins</p>
            </div>
            <p>Description: {workout.description}</p>
        </div>
    )

}

export default IndividualWorkout;