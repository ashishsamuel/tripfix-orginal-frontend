import React, { useContext, useEffect, useRef} from 'react'
import { Nav, Container, Button, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import './Header.css'

const nav_links = [
  {path:'/home',display:'Home'},
  {path:'/home',display:'About'},
  {path:'/home',display:'Tours'},
]

function Header() {

    const headerRef = useRef(null)
    const navigate = useNavigate()

    const stickyHeaderFunc = ()=>{
    window.addEventListener("scroll", ()=>{
      if(
        document.body.scrollTop>10 || document.documentElement.scrollTop > 10
      ){
        headerRef?.current?.classList?.add("sticky_header");
      }
      else{
        headerRef?.current?.classList?.remove("sticky_header")
      }
    })
  } 

    useEffect(()=>{
        stickyHeaderFunc();
    
        return window.removeEventListener("scroll",stickyHeaderFunc)
      })
  return (
    <div className='header' ref={headerRef}>
       <Navbar expand="lg" className='navbar-style bg-light position-fixed'>
       <Container fluid className='mx-2 nav_wrapper' style={{display:'flex',justifyContent:'space-between'}}>
         <Link to='/' className='logo'><img src="images/logo.PNG" alt="tripfix logo"/></Link>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
           <Nav>
             <Nav.Link className='fw-bold' style={{width:'85px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/'}>Home</Link></Nav.Link>
             <Nav.Link className='fw-bold' style={{width:'85px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/about'}>About</Link></Nav.Link>
             <Nav.Link className='fw-bold' style={{width:'85px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/tours'}>Tour</Link></Nav.Link>

              {/* {user? ( */}
                  <div className='d-flex align-items-center me-5'>
               <NavDropdown className='nav-title text-info' title={
                <span className='text-info'><i class="fa-solid fa-user text-info me-2 fw-bold me-2"></i>amal</span>
               }>
                 <NavDropdown.Item><Link style={{textDecoration:'none'}} className='text-info fw-bold' to={'/home'}>Profile</Link></NavDropdown.Item>
                 <NavDropdown.Item><Link style={{textDecoration:'none'}} className='text-info fw-bold' to={'/bookings'}>Bookings</Link></NavDropdown.Item>
                 <NavDropdown.Item><Link style={{textDecoration:'none'}} className='text-info fw-bold' to={'/'}>Logout</Link></NavDropdown.Item>
               </NavDropdown>
                </div>
                {/* ):( */}
                  <>
                    <Nav.Link className='fw-bold' style={{width:'85px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/login'}>Login</Link></Nav.Link>
  
                    <Nav.Link className='text-light'><Link style={{textDecoration:'none'}} to={'/register'}><button className='btn btn-info px-3 py-1 my-0 fw-bold'>Register</button></Link></Nav.Link>
                  </>
                {/* )} */}
            
            
            
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     </div>
  )
}

export default Header
