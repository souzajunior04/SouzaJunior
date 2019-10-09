import React, {useState} from 'react';
import './App.css';
import api from './services/api'

function App() {
  const [wars, setWars] = useState('');

    const loadWars = async () =>{
      const response = await api.get(`/planets/${Math.floor(Math.random() * 61 + 1)}`);

      setWars(response.data)
    }


      return (
    <>
    <div className="container">

           <div className="content">
        <table>
         <thead>
           <tr><th colSpan='2'> {wars.name}</th></tr>
           </thead>

          <tbody>
           <tr><td>Population:</td><td> {wars.population}</td></tr> 
           <tr><td>Climate:</td><td> {wars.climate}</td></tr>
           <tr><td>Terrain:</td><td> {wars.terrain}</td></tr>

           <tr><td className="fnf">Featured in NFilms</td></tr>
     

          </tbody>
        </table>  
      <button className="btn" onClick={loadWars} >NEXT</button>
      </div>
    </div>
    </> 
  );
}


export default App;

