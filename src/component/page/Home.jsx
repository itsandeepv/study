import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from "react"


function Home() {

 const [city ,setcity] =useState("")

 let submitcity =(e)=>{
   e.preventDefault();
    console.log(city);      

getweather(city)
    setcity("")
 }

  let getweather = async(city)=>{
    let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=6634f7aa76698018cb91487b3f520e24&units=metric ")
 let data = await res.json();
    console.log(data.main);


  }

  return (
    <div className=" container-fluid ">
      <div className="row  bg-primary ">
      
      <div className="col container">
      
      <ul className='d-flex list-unstyled'>
      <li className='m-2  ' ><NavLink to="/home" className='text-light text-decoration-none'>Home</NavLink></li>
      <li className='m-2  ' ><NavLink to="/axios" className='text-light text-decoration-none'>Axios</NavLink></li>
      <li className='m-2  ' ><NavLink to="/axios2" className='text-light text-decoration-none'>Axios2</NavLink></li>
      <li className='m-2  ' ><NavLink to="/usestate" className='text-light text-decoration-none'>Usestate</NavLink></li>
      <li className='m-2  ' ><NavLink to="/class" className='text-light text-decoration-none'>classbase</NavLink></li>
      <li className='m-2  ' ><NavLink to="/topiclist" className='text-light text-decoration-none'>Important Topic </NavLink></li>

      
      </ul>
      
      
      </div>
      
      </div>
  <div className="container">
  <div className="row my-4">
  <div className="col text-center">
  <h2>Click to check to Today weather</h2>
  
  <form action="" className='my-2' >
  
  <input type="text"  placeholder='Enter Your City' value={city} onChange={e =>(setcity(e.target.value))}/>
  <button className='btn btn-primary mx-2' type='submit' onClick={submitcity}>Check Weather</button>
    </form>
      <div className="content">
      <img src="" alt="" />
     
      
      
      </div>






  
  </div></div>
  </div>



    
    
    
    
    
    </div>
  )
}

export default Home