import { } from 'react'
import LandingPage from './pages/Home/LandingPage/LandingPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/common/Footer/index'

function App() {

  return (
    <>
       <Router>
          <Routes>
        
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/' element={  <LandingPage/>}/>
          </Routes>
          <Footer/>
       </Router>
     
    </>
  )
}

export default App
