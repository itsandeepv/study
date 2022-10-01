import React, { useState } from 'react'
import Data from '../../Datajson/Data'





function Usestate(props) {
  //console.log();
  const [data, setdata] = useState('')


  let country = (e) => {
    setdata(e.target.value)

  //  console.log(data);

  }




  return (
    <div>
      In it this all  detals are coming throw the this.props.first
      <p>
        Your name is Sandeep <hr />

        <div className="container">
          <input type="text" onChange={country} value={data} />
          {
                Data.filter((vlu)=>{
                  if(data ==''){
                    return vlu
                  } else if (vlu.name.toLowerCase().includes(data.toLowerCase())){
                    return  vlu

                  }


                }).map((countryname)=>{
                   return (

                    <h2>{countryname.name}</h2>


                   )


                })



          }




        </div>



      </p>






    </div>
  )
}

export default Usestate