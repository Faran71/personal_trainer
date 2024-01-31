import "./MainPage.css"

const MainPage = ({name, weight, selectedAge}) => {

    return(
        <div>
            <div className="top">
                <h1>Hi {name}</h1>
                <h1>You weight {weight}kg</h1>
            </div>
            <div className="options">
                <button className="diet">Diet Plans</button>
                <button className="excercise">Explore Excercises</button>
            </div>
            
        </div>
    )

}

export default MainPage;