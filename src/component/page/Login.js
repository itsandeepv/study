
import React, { useState } from "react"
import Logindata from "./Logindata";




function Login() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [mob, setmob] = useState('');

    const [alldata, setalldata] = useState([])



    const newdata = { name: name, email: email, pass: pass, mob: mob }

    let submitform = (e) => {
       e.preventDefault()

      setalldata([...alldata ,newdata]);

     console.log(alldata);


      setname("");
      setemail("");
      setpass("");
      setmob("");
      

    }


   let postdata = async (e)=>{

        e.preventDefault();

    const result=  await fetch("https://data02-d436a-default-rtdb.firebaseio.com/user.json", {
         method: "POST" ,
         headers :{
            "Content-Type": "application/json"
         },
         body : JSON.stringify({
            name:name,
            email:email,
            mob:mob,
            pass:pass
         })
         
      }).then((res)=>{
        console.log(res);
      });
     //console.log(res);

     setname("");
     setemail("");
     setpass("");
     setmob("");
     alert("your  form is submited")

    


   }









    return (

        <>

            <div className="container">
                <h3>This is log Form page</h3>
                <div className="row">
                    <div className="col">
                        <form className="form-group" method ="POST">

                            <input type="text" className="form-control my-2" placeholder="Enter Your name" value={name} onChange={e => setname(e.target.value)} />
                            <input type="email" className="form-control my-2" placeholder="Enter Your Email" value={email} onChange={e => setemail(e.target.value)} />
                            <input type="password" className="form-control my-2" placeholder="Enter Your Password" onChange={e => setpass(e.target.value)} />
                            <input type="text" className="form-control my-2" placeholder="Enter Your Mobile number" onChange={e => setmob(e.target.value)} />

                                <button type="submit" value="Submit" className="btn btn-primary" onClick={postdata}> Submit</button>

                        </form>



                    </div>





                </div>
        <Logindata  data={alldata}/>


            </div>



        </>






    )
}


export default Login;