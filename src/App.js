import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import { useState } from 'react';
import MainPage from './Components/MainPage';

function App() {

const [name, setName] = useState("");
const [selectedAge, setSelectedAge] = useState("Empty");
const [weight, setWeight] = useState(null);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' 
          element={<FirstPage />} 
          key={1}/>
          <Route path='/information' 
          element={<SecondPage 
            name={name}
            setName={setName}
            selectedAge={selectedAge}
            setSelectedAge={setSelectedAge}
            weight={weight}
            setWeight={setWeight}/>} 
          key={2}/>
          <Route path='/MainPage' 
          element={<MainPage 
          name={name}
          weight={weight}
          selectedAge={selectedAge}/>} 
          key={3}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
