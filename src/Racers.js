import { useState } from 'react';
import './Racers.css';

export default function Racers({addRacer, racers, deleteRacer}){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

function submitRacer(event) {
        event.preventDefault()
        const newRacer = {
            id: Date.now(),
            name,
            age
        }
        addRacer(newRacer)
        clearInput()
  }
  function clearInput(){
        setName("")
        setAge("")
  }

  let displayedRacers = racers.map(racer=>{
    return (
      <div className='Racer background-white'>
       <h1>Racer# {racer.id}</h1>
       <div className='name-age'>
       <h3>Name: {racer.name}</h3>
       <h3>Age: {racer.age}</h3>
       <button className='delete' onClick={()=>{deleteRacer(racer.id)}}>DELETE</button>
       </div>
      </div>
    )
  })

    return (
        <div>
          <div className='racers'>{displayedRacers}</div>
          <input
            type='text'
            placeholder='Racer Name'
            name='Racer Name'
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <input
            type='text'
            placeholder='Racer Age'
            name='Racer Age'
            value={age}
            onChange={event => setAge(event.target.value)}
          />

          <button onClick = { event => submitRacer(event)}>SUBMIT</button>
        </div>
      )}