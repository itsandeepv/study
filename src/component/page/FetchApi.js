import React, { useState } from 'react'
import axios from 'axios';


function FetchApi() {

    const [news, setnews] = useState([]);
   const [git ,setgit] = useState();



    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=45586aabba7e479c93d3138c2ebb7e4e ";

    let fun = () => {
        axios.get(url).then((res) => {

            setnews(res.data.articles)
            console.log(news[0]);
        })
    }
let gitapi =()=>{
   axios.get('https://api.github.com/users/defunkt').then((res)=>{
    console.log(res);
  setgit(res.data)
   console.log(git);
   }).catch((error)=>{

    return error;
   })
}


//gitapi()




    return (
        <div>
            <div className="container text-start">
                <div className="row">
                    <h1 className='text-danger my-3 text-center'>Today Fast News is In this page</h1>
                    <button className='btn btn-primary' onClick={fun}>Show News</button>
                    <div className="col">

                        {
                            news.map((vlu) => {
                                return (
                                    <>
                                        <div className="news p-2 text-justify">
                                            <h2>{vlu.author}</h2>
                                            <img src={vlu.urlToImage} alt="" className='img-fluid' />
                                            <h4>Heading :</h4>
                                            <h6>News Title :{vlu.title}</h6>
                                            <p>Author : {vlu.author}</p>
                                            <p className=''>Content And News : {vlu.content} and <hr /> To visit the site Click here <a href={vlu.url} className="btn btn-success">Click</a> </p>
                                    <p> <hr /> And description is : {vlu.description}</p>
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>

      




                </div>





            </div>








        </div>
    )
}

export default FetchApi