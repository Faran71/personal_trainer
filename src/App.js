import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Containers/FirstPage';
import SecondPage from './Containers/SecondPage';
import { useState } from 'react';
import MainPage from './Containers/MainPage';
import WorkoutPlan from './Containers/WorkoutPlan';
import DietPlan from './Containers/DietPlan';
import Workout from './Containers/Workout';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' 
          element={<FirstPage />} 
          key={1}/>
          <Route path='/information' 
          element={<SecondPage 
          user={user}
          setUser={setUser}/>} 
          key={2}/>
          <Route path='/MainPage' 
          element={<MainPage 
          user={user}/>} 
          key={3}/>
          <Route path='/WorkoutPlan'
          element={<WorkoutPlan />}
          key={4}/>
          <Route path='/DietPlan'
          element={<DietPlan />}
          key={5}/>
          <Route path='/Workout'
          element={<Workout 
          user={user}/>}
          key={6}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
