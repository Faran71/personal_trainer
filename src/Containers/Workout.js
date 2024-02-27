import IndividualWorkout from "../Components/IndividualWorkout"
import "./Workout.css"
import CalendarComponent from "../Components/CalendarComponent"
import { useState } from "react"
import Modal from "react-modal";

const Workout = ({user, setUser}) => {

    const displayWorkouts = user.workouts.map((temp) => {
        return(
            <div>
                <IndividualWorkout workout={temp}/>
            </div>
        )
    })

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'red',
        //   height:'50vh',
        },
      };

    const [logInModalOpen, setLogInModalOpen] = useState(false);
    const openLogInModal = () => {setLogInModalOpen(true)};
    const closeLogInModal = () => {setLogInModalOpen(false)};
    const [hideFillAllMessage, setHideFillAllMessage] = useState(true);

    const [activity, setActivity] = useState(null);
    const [duration, setDuration] = useState(null);
    const [description, setDescription] = useState("")

    const handleWorkoutModal = (event) => {
        event.preventDefault();
        openLogInModal();
    }

    const postWorkout = async (activity, duration, description) => {
        let temp = {
            activity: activity,
            duration: duration,
            description: description
        }
        const newResponse = await fetch(`http://localhost:8080/workouts/postWorkout/${user.id}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(temp)
        })
        if(newResponse.status === 201){
            const newR = await newResponse.json();
            setUser(newR);
            setHideFillAllMessage(true);
            setActivity(null);
            setDuration(null);
            setDescription("");
            closeLogInModal();
        } 
    }

    const handleWorkoutFormSubmit = (event) => {
        event.preventDefault();
        if(activity!=="Empty" && duration!==null && description!==""){
            setHideFillAllMessage(true);
            postWorkout(activity, duration, description);
        } else {
            setHideFillAllMessage(false);
        }
    }

    const handleDropdownChange = (event) => {
        event.preventDefault();
        setActivity(event.target.value)
    }

    return(
        <div className="workout-main">
            <div className="workout-top">
                <h2 onClick={handleWorkoutModal}>Add a Workout</h2>
                <Modal
                isOpen={logInModalOpen}
                onRequestClose={closeLogInModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                >
                    <form onSubmit={handleWorkoutFormSubmit} className="log-in-form">
                        <select id="dropdown" 
                        name="dropdown" 
                        value={activity} 
                        onChange={handleDropdownChange}
                        className="dropdown">
                            <option value={null}>Select an activity</option>
                            <option value={"Run"}>Run</option>
                            <option value={"Walk"}>Walk</option>
                            <option value={"Powerlifting"}>Powerlifting</option>
                            <option value={"Swim"}>Swim</option>
                            <option value={"Free Weights"}>Free Weights</option>
                        </select>
                        <input type="number" 
                        name="duration"
                        placeholder="Duration in mins"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        />
                        <input type="text" 
                        className="description-input"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">Save</button>
                        <p hidden={hideFillAllMessage} style={{color:"black"}}>Fill in all Fields</p>
                    </form>
                </Modal>
            
                <CalendarComponent user={user} className="calendar" />
            </div>
            {user.workouts.length === 0 ? <p>No Workouts on Record</p>: <div className="workouts-box">{displayWorkouts}</div>}
        </div>
    )

    

}

export default Workout;