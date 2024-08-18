import {} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg top-fixed bg-transparent">
  <div className="container">
    <a className="navbar-brand" href="#"><img className='img-fluid logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'/></a>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active text-white fw-bolder fs-5" aria-current="page" to="/addresturent">Add Resturent</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder fs-5" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder fs-5" to="/register">Signup</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header