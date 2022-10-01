import { logDOM } from '@testing-library/react';
import axios from 'axios'
import React, { useState } from 'react'

function Axios() {
  const [name,setname] = useState('sanddep');
  const [flag,setflag] = useState(false);



 function change(){

setflag(!flag)
 }



    const [num ,setnum] = useState(0);
     
function plus() {
    setnum(num + 1);
    
}
function sub() {
    setnum(num - 1);
    
}






    async function makerequest() {

        let res = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log(res);
        console.log(res.data);
   setname(res.data)
     console.log(name[0].name);
    }






    return (
        <div>

            <div className="container ">


                <h1>In this page all about axios</h1>
                <button className='btn btn-info' onClick={makerequest}>News API</button>
   <br />
   <button onClick={sub}  > - </button>
                    <h3>{num}</h3>
                    <button onClick={plus}>+</button>




<h2> hello:{flag ?  "sandeep" : ""} </h2>
<button onClick={change} className="btn"> Change name</button>



            </div>


        </div>
    )
}

export default Axios