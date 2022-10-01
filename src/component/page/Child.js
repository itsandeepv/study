import React from 'react'

function Child(props) {
console.log(props.changeName);


  return (
    <div>
    <h2>    child element {props.name}</h2>



    <h5>This is your name this props frome the perent component {props.name}</h5>

 <p>props of prent h3 tag is {props.children}</p>

    <hr />
change name {props.nam}; <hr />
<button className='btn btn-success' onClick={()=>{props.changeName('deepu')}}> change this name</button>


    
    </div>
  )
}

export default Child