import {} from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <div className='container container_wrapper d-flex justify-content-center align-items-center'>
            <form className='form_wrapper shadow px-3 py-3'>
               <div>
                <h6>Login</h6>
               </div>
               <div>
                 <input type='text' placeholder='Number' className='form-control'/>
               </div>
               <div className='d-grid py-2'>
                  <button className='btn btn-danger'>Send On Time Password</button>
               </div>
               <div className='d-flex align-items-center py-1'>
               <div className='line'></div>
                 <div className='mx-2'>or</div>
                 <div className='line'></div>
               </div>

               <div className='d-grid py-1'>
                 <button className='btn btn-dark'>Continue With Email</button>
               </div>
               <div className='d-grid py-1'>
                 <button className='btn btn-warning'>Sign In With Google</button>
               </div>
               <div className='py-2 mx-1'>
                 <p>New to zomato ? <NavLink href='/register'>Create Account Here</NavLink></p>
               </div>
            </form>
    </div>
  )
}

export default Login