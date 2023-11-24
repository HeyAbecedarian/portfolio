import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactIMg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>CLIENTS</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>ABOUT</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>PORTFOLIO</Link>
        </div>
        <button className='desktopMenubtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactIMg} alt='' className='desktopMenuImg'/>Contact me</button>

            <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>CLIENTS</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>ABOUT</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>PORTFOLIO</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>CONTACT</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar