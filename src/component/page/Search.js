import React from 'react'
import { useState } from 'react';
import Data from '../../Datajson/Data';
import Usestate from './Usestate';


function Search() {

const [data,setdata] =useState('');

const findcountry =(e)=>{

setdata(e.target.value)




}



  return (
    <div>
     <div className="container text-center">
     <h2> In it we make a search bar using filter and map method</h2>
     <div className="row">
     <div className="col">

     <input type="text" onChange={findcountry} value={data} className='form-control' />
     
     {
       Data.filter((elm)=>{
          
           if(data == ""){
                return elm ;
 
        } else if (elm.name.toLowerCase().includes(data.toLowerCase())){
                return elm ;



        }




       }).map((vlu)=>{
         return (
       
                <h2>{vlu.name} <hr /></h2>

         )


       })



     }
     
     
     </div>
     
     </div>
     
     
     
     </div>
    
    
    
    
    
    
    </div>
  )
}

export default Search