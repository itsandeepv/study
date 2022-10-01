import React from 'react'
import {NavLink,Outlet} from 'react-router-dom';


function TopicList() {

    let activfun =(isActive)=> ({
        color :  isActive ?  "red" : ""
    })




  return (
    <div>
    <div className="container">
    


    <ul className='list-unstyled'>
    
    <li ><NavLink to="/topiclist/usestate"> Usestate</NavLink></li>
    <li><NavLink to="/topiclist/axios"  > Axios</NavLink></li>
    <li><NavLink to="/topiclist/useeffect"> Useeffect</NavLink></li>

    
    <li><NavLink to="/topiclist/class"> Class</NavLink></li>
    <li><NavLink to="/topiclist/perent"> Props Example</NavLink></li>
    <li><NavLink to="/topiclist/search"> Search fitler</NavLink></li>
    <li><NavLink to="/topiclist/fetchapi">API NEWS</NavLink></li>
    <li><NavLink to="/topiclist/todo">TODO APP</NavLink></li>
    <li><NavLink to="/login">Log In</NavLink></li>
    <li><NavLink to="/usecontext">Use Context</NavLink></li>

    <Outlet/>
   
   
   
   
   
   
    
    
    
    </ul>
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default TopicList