import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Useeffect() {

  let [post ,setpost] = useState([]);




  useEffect(()=>{
     fetchdata()

  },[])

   let fetchdata = async()=>{
  try {
    
    let res = await axios.get('https://api.github.com/users');

      //console.log(res.data);
     setpost(res.data);    

      console.log(post.map((vlu) =>{
        console.log(vlu);
      }));




  } catch (error) {
     console.log(error);
  }
   }



  return (
    <div>
    <div className="container">
    <h2> In this snariyon we discuss about the useeffect using await/async throw the github api</h2>
     <button className='btn btn-outline-primary' onClick={fetchdata}>GitHuB API</button>
    <div className="row">

    
    
      {
       post.map((vlu)=>{
   return (
   <>
   <div className="col-lg-4 col-am-4 text-justify">

     <div className="img p-2" >
       <img src={vlu.avatar_url}  key={vlu.id}alt="" className='img-fluid' />
     
       <h3>Your Node id is : {vlu.node_id}</h3>
       <h3>Name : {vlu.login}</h3>

     </div>
   </div>
   
   
   
   </>
    


   )


       })

      }

   
    
    
    
    
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Useeffect