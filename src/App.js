import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' ;
import Home from './component/page/Home';
import Axios from './component/page/Axios';
import Axios2 from './component/page/Axios2';
import Usestate from './component/page/Usestate';
import Classbase from './component/page/Classbase';
import Index from './component/page/Index';
import TopicList from './component/page/TopicList';
import Perent from './component/page/Perent';
import Search from './component/page/Search';
import FetchApi from './component/page/FetchApi';
import Useeffect from './component/Useeffect';
import Todo from './component/Todo';
import Login from './component/page/Login';



function App() {
  return (
    <div>
    <Router>
    <Home/>
    <Routes>
    <Route path="/axios" element={<Axios/>}  ></Route>
    <Route path="/axios2" element={<Axios2/>}  ></Route>
    <Route path="/usestate" element={<Usestate/>}  ></Route>
    <Route path="/class" element={<Classbase/>}  ></Route>
    <Route path="/perent" element={<Perent/>}  ></Route>
    <Route path="/login" element={<Login/>}  ></Route>

 
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/fetchapi" element={<FetchApi/>} />
    </Route>
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/useeffect" element={<Useeffect/>} />
    </Route>
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/todo" element={<Todo/>} />
    </Route>



    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/search" element={<Search/>} />
    </Route>


    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/perent" element={<Perent/>} />
    </Route>
   
   
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/axios" element={<Axios/>} />
    </Route>
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/class" element={<Classbase/>} />
    </Route>

   
   
    <Route path="/topiclist" element={<TopicList/>}  exact >
    <Route  path="/topiclist/usestate" element={<Usestate/>} />
    </Route>

    
    
    
    
    </Routes>
    
    
    
    
    
    </Router>
    
    
    
    
    
    </div>
  )
}

export default App