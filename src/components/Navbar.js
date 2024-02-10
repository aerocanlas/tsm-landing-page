import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Typography } from "@mui/material";
import {Stack} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { Box  } from '@mui/material'

function Navbar() {

  const navRef = useRef();

    useEffect(() => {
        const nav = navRef.current;
      
        const handleNavClick = (event) => {
          const activeLinks = nav.querySelectorAll('a.active');
          activeLinks.forEach((link) => link.classList.remove('active'));
          event.target.classList.add('active');
        };
      
        if (nav) {
          nav.addEventListener('click', handleNavClick);
        }
      
        return () => {
          if (nav) {
            nav.removeEventListener('click', handleNavClick);
          }
        };
      }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

    const [activeTab, setActiveTab] = useState(window.location.pathname);

 useEffect(() => {
    const handlePathChange = () => {
      setActiveTab(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
 }, []);

  return (
    <header>
      {/* <h3>LOGO</h3> */}
      <nav ref={navRef}>
        <ul>
          <li>
            <NavLink to='/Home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/Community'>Community</NavLink>
          </li>
        </ul>

        <ul>
      <NavLink className={activeTab === '/SizeGuide' || activeTab === '/Teams' || activeTab === '/Pullover' || activeTab === '/Home' || activeTab === '/Contact' || activeTab === '/Community' || activeTab === '/StandardRate' || activeTab === '/Faqs' ? 'activeMode' : 'inactiveModeHome'} to='/Home'>Wholesale</NavLink>
        </ul>

        <ul>
        <NavLink className={activeTab === '/HomeRetail' || activeTab === '/retail/productretail' || activeTab === '/retail/bluehoodiev2' ? 'activeMode' : 'inactiveMode'} to='/HomeRetail'>Retail</NavLink>
        </ul>
            {/* <a href="/Home" className={activeTab === '/Home' ? 'active' : ''} onClick={showNavbar}>Home</a>
            <a className={activeTab === '/Contact' ? 'active' : ''} href="/Contact" onClick={showNavbar}>Contact</a>
      <a className={activeTab === '/Community' ? 'active' : ''} href="/Community" onClick={showNavbar}>Community</a> */}

            {/* { activeTab === '/Home' ? 
                        <a  className={(activeTab === '/Home')} href="/Home" onClick={showNavbar}>Wholesale</a>            
                : null
            }

{ activeTab === '/Contact' ? 
                        <a  className={(activeTab === '/Contact')} href="/Contact" onClick={showNavbar}>Wholesale</a>            
            : null
        }
        
        { activeTab === '/Community' ? 
                        <a  className={(activeTab === '/Community')} href="/Community" onClick={showNavbar}>Wholesale</a>            
            : null
        } */}
            <Box sx={{position: "relative",
            left: {lg: -530, xl: 1300 }
          }}>
              {/* <a className={activeTab === '/Teams' || activeTab === '/Pullover' || activeTab === '/Home' || activeTab === '/Contact' || activeTab === '/Community' ? 'activeMode' : ''} href="/Home" onClick={showNavbar}>Wholesale</a>
            <a className={activeTab === '/HomeRetail' || activeTab === '/Pullover' || activeTab === '/Home' || activeTab === '/Contact' || activeTab === '/Community' ? 'activeModeRetail' : ''} href="/HomeRetail" onClick={showNavbar}>Retail</a> */}
            </Box>
            
         {/* <a className={activeTab === '/Contact' ? 'active' : ''} href="/Contact">Contact</a>
        <a className={activeTab === '/Community' ? 'active' : ''} href="/Community">Community</a> */}
        {/* <a className={activeTab === '/Home' ? 'active' : ''} href="/#">About me</a> */}
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>

      </nav>
<Stack direction="column" spacing={0.2} 
        sx={{
        display: {xs: 'none', sm: 'none', lg: 'flex', xl: 'flex'}, 
        justifyContent: 'center', 
        alignItems: 'center',
        ml: {lg: '-400px', xl: '-50px'},
        mr: {lg: '100px', xl: '500px'},
        textDecoration: 'none'
        }}>
<Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 'bold',
              letterSpacing: '0px',
              color: 'black',
              fontSize: {xs: '18px', lg: '24px', xl: '28px'},
              textDecoration: 'none',
            }}
          >
            THE STREET MARKET <Typography variant="h6" sx={{ display: { xs: "flex", sm: "flex" }, fontSize: '8px', }}>TM</Typography>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 400,
              letterSpacing: '0px',
              color: 'black',
              fontSize: '12px',
              textDecoration: 'none',
            }}
          >
GARMENT MANUFACTURER          
</Typography>
</Stack>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
