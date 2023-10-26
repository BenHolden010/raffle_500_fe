import { useState } from 'react';
import './Players.css';

export default function Players({addPlayer, players, deletePlayer}){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

function submitPlayer(event) {
        event.preventDefault()
        const newPlayer = {
            id: Date.now(),
            name,
            age
        }
        addPlayer(newPlayer)
        clearInput()
  }
  function clearInput(){
        setName("")
        setAge("")
  }

  let displayedPlayers = players.map(player=>{
    return (
      <div className='player background-white'>
       <h1>Player# {player.id}</h1>
       <div className='name-age'>
       <h3>Name: {player.name}</h3>
       <h3>Age: {player.age}</h3>
       <button className='delete' onClick={()=>{deletePlayer(player.id)}}>DELETE</button>
       </div>
      </div>
    )
  })

    return (
        <div>
          <div className='players'>{displayedPlayers}</div>
          <input
            type='text'
            placeholder='name'
            name='Your Name'
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <input
            type='text'
            placeholder='Your Age'
            name='age'
            value={age}
            onChange={event => setAge(event.target.value)}
          />

          <button onClick = { event => submitPlayer(event)}>SUBMIT</button>
        </div>
      )}