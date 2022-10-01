import React from 'react'

function Logindata(props) {
  
 let user = props.data
    //console.log(user[0]);

  return (
    <>
    <div>
    
   {
    user.map((vlu)=>{
        return(
            <>
            <div className="row my-3 ">
            <hr />
            <h4>User Information</h4>
            <div className="col-lg-4">
             <h4>Your Name : {vlu.name}</h4>
             <h4>Your Name : {vlu.email}</h4>
             <h4>Your Name : {vlu.pass}</h4>
             <h4>Your Name : {vlu.mob}</h4>
         
            
            </div>
            
            </div>  
            
            </>
          
        )    
    })

   }
    
    
    
    </div>
    
    </>
  )
}

export default Logindata