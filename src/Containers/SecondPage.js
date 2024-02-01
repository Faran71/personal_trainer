import { useState } from "react";
import "./SecondPage.css"
import { useNavigate } from "react-router-dom";

const SecondPage = ({name, setName, selectedAge, setSelectedAge, weight, setWeight}) => {
    const navigate = useNavigate();

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

    const handleDropdownChange = (event) => {
        event.preventDefault();
        setSelectedAge(event.target.value)
    }

    return(
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
    )

}

export default SecondPage;