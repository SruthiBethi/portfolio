import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {

  const [menu, setMenu]=useState("home")
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
    <img src={logo} alt='logo'style={{width:'60px', height:'60px'}}/>
    <img src={menu_open} onClick={openMenu} width='20px' height='20px' className='nav-mob-open'/>
    <ul ref={menuRef} className='nav-menu'>
    <img src={menu_close} onClick={closeMenu} width='20px' height='20px' className='nav-mob-close'/>
    <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} height='20px' width='20px'/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} height='20px' width='20px'/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"? <img src={underline} height='20px' width='20px'/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} height='20px' width='20px'/>:<></>}</li>
    </ul>
    <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
    </div>
  )
}

export default Navbar