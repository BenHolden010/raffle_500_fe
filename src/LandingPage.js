import { NavLink } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage({viewAllPlayers, viewAllRacers}){
  return (
    <div className="landing-page">
      <p className="info background-white">welcome to Raffle 500 where you can come to play against other users to get drivers and see who wins!<br/><br/> it is a competition in which you will enter your information to obtain drivers, and if your driver wins then you win! When the View All Players button is clicked, the players will draw Drivers at random!</p>
      <NavLink to='/players'>
        <button onClick={()=>{viewAllPlayers()}}>View All Players</button>
      </NavLink>
      <NavLink to='/racers'>
        <button onClick={()=>{viewAllRacers()}}>View All Racers</button>
      </NavLink>
    </div>
  )
}