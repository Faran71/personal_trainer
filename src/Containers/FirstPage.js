import { useNavigate } from "react-router-dom";
import "./FirstPage.css"

const FirstPage = () => {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/information')
    }

    return(
        <div className="main">
            <h1>Ready to make an impact</h1>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}><img src="./run-circle.svg"/></button>
            </div>
        </div>
    )
}

export default FirstPage;