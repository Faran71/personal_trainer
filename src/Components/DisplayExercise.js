import "./DisplayExercise.css";
import { useState } from "react"
import Modal from "react-modal";

const DisplayExercise = ({exercise}) => {

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

    const handleModal = (event) => {
        event.preventDefault();
        openLogInModal();
    }

    return(
        <div className="exercise-main">

            <Modal
            isOpen={logInModalOpen}
            onRequestClose={closeLogInModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
            >
                <div className="exercise-middle">
                    <p>Name: {exercise.name}</p>
                    <p>Type: {exercise.type}</p>
                    <p>Muscle: {exercise.muscle}</p>
                    <p>Equipment: {exercise.equipment}</p>
                    <p>Difficulty: {exercise.difficulty}</p> 
                </div>
                <div className="exercise-bottom">
                    <p>{exercise.instructions}</p>
                </div>
                
            </Modal>
            
            <div className="exercise-top" onClick={handleModal}>
                <p>{exercise.name}</p>
                <p>{exercise.equipment}</p>
                <p>{exercise.difficulty}</p>
            </div>
        </div>
    )

}

export default DisplayExercise;