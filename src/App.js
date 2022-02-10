import Home from './page/home';
import Login from './page/login';
import Posts from './page/posts';
import SinglePost from './page/singlepost';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
   
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
       </Routes>
       <Routes>
          <Route path="/login" element={<Login/>}/>
       </Routes>
       <Routes>
          <Route path="/posts" element={<Posts/>}/>
       </Routes>
       <Routes>
          <Route path="/singleposts/:id" element={<SinglePost/>}/>
       </Routes>

    </BrowserRouter>
  );
}

export default App;
