import { } from 'react'
import LandingPage from './pages/Home/LandingPage/LandingPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <>
       <Router>
          <Routes>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/' element={  <LandingPage/>}/>
          </Routes>
       </Router>
     
    </>
  )
}

export default App
