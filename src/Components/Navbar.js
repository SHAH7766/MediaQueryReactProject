import React from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ()=>{
  const navigate = useNavigate()
  const LogoutUser = (e)=>{
    e.preventDefault();
    localStorage.removeItem("Email");
    toast.success("Logged Out Successfully");
    navigate("/login")
  }
    return(
        <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand fs-4" href="#">Michael Fabrics</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active " style={{fontSize:"13px"}} aria-current="page" >Home </Link>
        </li>
        <li className="nav-item">
          <Link to='/con' className="nav-link active " style={{fontSize:"13px"}} aria-current="page" >Contact us</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
       
        {!localStorage.getItem("Email") ? (
          <Link to='/login'> <button className="loginButton fs-6">Login</button></Link>    
          
        ) : (
          <>
          <Link className='text-decoration-none' to='/cart'><i class="fa-solid fa-cart-shopping mx-2 mt-2 fs-6"></i></Link>  
          <button className='btn btn-warning' onClick={LogoutUser}>Logout</button>
          </>
        ) }
      </form>
      <Toaster/>
    </div>
  </div>
</nav>

        
        </>
    )
}