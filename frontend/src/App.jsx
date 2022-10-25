import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import {Home} from "./pages/Home.jsx";
import {SignUp} from "./pages/SignUp.jsx";
import {PostDisplay} from "./pages/PostDisplay.jsx";
import {CreatePost} from "./pages/CreatePost";
import {LogIn} from "./pages/LogIn";

function App() {
  const [count, setCount] = useState(0)

  return (<div>

    <div className="App d-flex justify-content-center align-items-center">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/detail" element={<PostDisplay/>}/>
            <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>

    </div>
      </div>
  )
}

export default App
