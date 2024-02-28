import { useState } from "react";
import Modal from "react-modal";
import "./SecondPage.css"
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const SecondPage = ({user, setUser}) => {
    const navigate = useNavigate();

// Log In Modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'red',
        },
      };

    const [logInModalOpen, setLogInModalOpen] = useState(false);
    const openLogInModal = () => {setLogInModalOpen(true)};
    const closeLogInModal = () => {setLogInModalOpen(false)};

    const handleLogIn = (event) => {
        event.preventDefault();
        openLogInModal();
    }

    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");
    const [hideWrongLogInMessage, setHideWrongLogInMessage] = useState(true);

    const postLogInCustomer = async (logInEmail, logInPassword) => {
        let temp = {
            email: logInEmail,
            password: logInPassword
        }
        const newResponse = await fetch(`https://personal-trainer-backend.onrender.com/users/authenticate`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(temp)
        })
        console.log(newResponse.status);
        if(newResponse.status === 202){
            const newC = await newResponse.json();
            setUser(newC);
            navigate("/MainPage");
            setLogInEmail("");
            setLogInPassword("");
            setHideWrongLogInMessage(true);
        } else {
            setHideWrongLogInMessage(false);
        }
    }

    const handleLogInFormSubmit = (event) => {
        event.preventDefault();
        postLogInCustomer(logInEmail,logInPassword);
    }

// Main Page Stuff
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [weight, setWeight] = useState(null);
    const [selectedAge, setSelectedAge] = useState("Empty");

    const [hideMessage, setHideMessage] = useState(true)
    const [hideEmailAlreadyInUse, setHideEmailAlreadyInUse] = useState(true);

    const postRegisterUser = async (name, email, password, weight, selectedAge) => {
        let temp = {
            name: name,
            email: email,
            password: password,
            weight: weight,
            selectedAge: selectedAge
        }
        const newResponse = await fetch(`https://personal-trainer-backend.onrender.com/users`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(temp)
        })
        if(newResponse.status === 202){
            const newR = await newResponse.json();
            setUser(newR);
            setHideEmailAlreadyInUse(true);
            setName("");
            setEmail("");
            setPassword("");
            setWeight(null);
            setSelectedAge("Empty");
            navigate("/MainPage");
        } else {
            setHideEmailAlreadyInUse(false);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(name!="" && selectedAge!="Empty" && weight!=null){
            postRegisterUser(name,email,password,weight,selectedAge);
            // navigate("/MainPage")
            setHideMessage(true);
        } else {
            setHideMessage(false);
        }
    }

    const handleDropdownChange = (event) => {
        event.preventDefault();
        setSelectedAge(event.target.value)
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
                {/* <h1>Enter Your Details</h1> */}
                <form onSubmit={handleLogInFormSubmit} className="log-in-form">
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
                    <p hidden={hideWrongLogInMessage} style={{color:"black"}}>Wrong Credentials</p>
                </form>
            </Modal>


            <div className="log-in">
                <h4 onClick={handleLogIn}>Log In</h4>
            </div>
            <div className="main-info">
                <h1>Tell me a bit about yourself</h1>
                <form onSubmit={handleFormSubmit} className="form">
                    <p hidden={hideMessage}>Please fill in all boxes</p>
                    <p hidden={hideEmailAlreadyInUse}>Email already in use</p>
                    <input type="text" 
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputs"
                    />
                    <input type="text" 
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputs"
                    />
                    <input type="text" 
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                    
                    <button type="submit" className="btn-form">Lets Excercise</button>
                </form>
            </div>
        </div>
    )

}

export default SecondPage;