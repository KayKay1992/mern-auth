import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './component/Header'
import PrivateRoute from './component/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />  
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route element={<PrivateRoute />}>
        <Route path="/Profile" element={<Profile/>} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

