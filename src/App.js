import  { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import Players from './Players';
import Racers from './Racers';

function App(){
  const fetchedPlayers = [
        { id: 1, name: 'Ben', age: '27' },
        { id: 2, name: 'Jeff', age: '37' }
    ]
  const fetchedRacers = [
        { id: 1, name: 'tommy lee jones', age: '69' },
        { id: 2, name: 'Arnold Schwrzinegger', age: '420' }
    ]
  const [players, setPlayers] = useState([])
  const [racers, setRacers] = useState([])

 function addPlayer(newPlayer) {
    setPlayers([...players, newPlayer]);
  }
 function addRacer(newRacer) {
    setRacers([...racers, newRacer]);
  }

  function deletePlayer(id) {
    const filteredPlayers = players.filter(player => player.id !== id);
    setPlayers(filteredPlayers)
  }
  function deleteRacer(id) {
    const filteredRacers = racers.filter(racer => racer.id !== id);
    setRacers(filteredRacers)
  }

 function viewAllPlayers(){
   setPlayers(fetchedPlayers)
 }
 function viewAllRacers(){
   setRacers(fetchedRacers)
 }

  return(
  <main className='App'>
      <h1 className="title background-white" >Raffle 500</h1>
      <Routes>
        <Route path='/' element={<LandingPage viewAllPlayers={viewAllPlayers} viewAllRacers={viewAllRacers}/>}/>
        <Route path='/players' element={
          <Players addPlayer={addPlayer} players={players} deletePlayer={deletePlayer}/>}/>
        <Route path='/racers' element={
          <Racers addRacer={addRacer} racers={racers} deleteRacer={deleteRacer}/>}/>
      </Routes>
    </main>
  )
}

export default App;