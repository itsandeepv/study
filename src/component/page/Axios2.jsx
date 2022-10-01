import { logDOM } from '@testing-library/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import {useState} from 'react';
import Index from './Index';


function Axios2() {
   const [post ,setpost] = useState(null);

 let fun =()=>{


  const url = 'https://jsonplaceholder.typicode.com/posts';
  axios.get(url).then((res)=>{
setpost(res.data)

  })

     post.map((e)=>{
   return e

  });



 }



  return (

    




    <div>
    
    <h2>this the title :  </h2>

    


    
    <button className='btn btn-primary m-3' onClick={fun}>click api</button>
     <Index/>
    </div>
  )
}

export default Axios2