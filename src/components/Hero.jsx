import {} from 'react'
import Header from './common/header'

function Hero() {
  return (
    <div className='container-fluid hero'>
      <Header/>
      <div className='row'>
           <div className='col-lg-12 d-flex align-items-center justify-content-center'>
               <h1 className='heading'>Zomato</h1>
              
           </div>
           <div className='d-flex align-items-center justify-content-center'>
           <p>Find the best restaurants, cafés and bars in India</p>
           </div>
      </div>
    </div>
  )
}

export default Hero