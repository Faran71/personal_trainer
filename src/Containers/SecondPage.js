import { useState } from "react";
import Modal from "react-modal";
import "./SecondPage.css"
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const SecondPage = ({user, setUser}) => {
    const navigate = useNavigate();

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const [logInModalOpen, setLogInModalOpen] = useState(false);
    const openLogInModal = () => {setLogInModalOpen(true)};
    const closeLogInModal = () => {setLogInModalOpen(false)};

    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const [name, setName] = useState("");
    const [selectedAge, setSelectedAge] = useState("Empty");
    const [weight, setWeight] = useState(null);

    const [hideMessage, setHideMessage] = useState(true)

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(name!="" && selectedAge!="Empty" && weight!=null){
            navigate("/MainPage")
            setHideMessage(true);
        } else {
            setHideMessage(false);
        }
    }

    const handleLogInFormSubmit = (event) => {
        event.preventDefault();
        // postLogInCustomer(logInEmail,logInPassword);
    }

    const handleDropdownChange = (event) => {
        event.preventDefault();
        setSelectedAge(event.target.value)
    }

    const handleLogIn = (event) => {
        event.preventDefault();
    }

    return(
        <div className="second-main">
            <Modal
                    isOpen={logInModalOpen}
                    onRequestClose={closeLogInModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <h1>Enter Your Details</h1>
                    <form onSubmit={handleLogInFormSubmit} className="log-in">
                        <input type="text" 
                        name="email"
                        placeholder="Email"
                        value={logInEmail}
                        onChange={(e) => setLogInEmail(e.target.value)}
                        />
                        <input type="password" 
                        name="password"
                        placeholder="Password"
                        value={logInPassword}
                        onChange={(e) => setLogInPassword(e.target.value)}
                        />
                        <button type="submit">Log In</button>
                        {/* <p hidden={hideWrongLogInMessage} style={{color:"red"}}>Wrong Credentials</p> */}
                    </form>
                </Modal>


            <div className="log-in">
                <h4 onClick={handleLogIn}>Log In</h4>
            </div>
            <div className="main-info">
                <h1>Tell me a bit about yourself</h1>
                <form onSubmit={handleFormSubmit} className="form">
                    <input type="text" 
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputs"
                    />
                    <input type="integer" 
                    name="weight"
                    placeholder="Weight in kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="inputs"
                    />

                    <select id="dropdown" 
                    name="dropdown" 
                    value={selectedAge} 
                    onChange={handleDropdownChange}
                    className="dropdown">
                        <option value={"Empty"}>Select an age</option>
                        <option value={"0-17"}>0 - 17</option>
                        <option value={"18-40"}>18 - 40</option>
                        <option value={"41-75"}>41 - 75</option>
                        <option value={"75+"}>75+</option>
                    </select>

                    <p hidden={hideMessage}>Please fill in all boxes</p>
                    <button type="submit" className="btn-form">Lets Excercise</button>
                </form>
            </div>
        </div>
    )

}

export default SecondPage;