import './App.css';
import BarChart from './Components/BarChart';
import { UserData } from './data';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'Users Gained Yearly',
      data: UserData.map((data) => data.userGain)
      }]
  });


  return (
    <div className="App">
      <BarChart ChartData={userData}/>
      
    </div>
  );
}

export default App;
