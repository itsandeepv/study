import React from 'react'
import { useState } from 'react'

function Todo() {

    const [text, settext] = useState('sandeep');
const [data,setdata] =useState([])

    let changehand = (e) => {
       // console.log(e);


        settext(e.target.value)
        

        //console.log(text);
    }
    let submitfun = (e)=>{
        
        setdata([...data ,text])
        e.preventDefault();
        
        
         settext("")

    }
    let deletedata =(e) =>{
      let   finaldata =data.filter((crrt ,index)=>{
             return index !== e;

        })

      setdata(finaldata);


    }





    return (
        <div>


     



            <div className="container">
                <h5>In this page we create todo app to create and delete value from the user</h5>
                <div className="row">
                    <div className="head bg-primary text-center text-light p-3" >
                        <h3> THis is todo app to user input value</h3>

                    </div>
                    <div className="col">
                        <form className="form-group" onSubmit={submitfun}>
                            <div className="row my-3">

                                <div className="col-sm-8">
                                    <input type="text " className='form-control' placeholder='your name' value={text} onChange={changehand} required />

                                </div>
                                <div className="col-sm-4 text-center">

                                    <button type='submit' className='btn btn-info'> Submit</button>

                                </div>

                            </div>
                        </form>


                    </div>
                     
                    





                </div>
                {
                    data.map((vlu,index)=>{
                        return(
                            <>
                            <div className="row my-2">
                            <div className="col-6"><h4>{vlu}</h4></div>
                            <div className="col-6 text-end"><h4><button className='btn btn-primary mx-3' onClick={()=> deletedata(index) }>Delete</button></h4></div>
                            </div>
                            </>
                            )
                    })


                }
                




            </div>






        </div>
    )
}

export default Todo