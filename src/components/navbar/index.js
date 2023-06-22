import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

var hasFlipped = "False";

function openNav(){
	if (hasFlipped == "True") {
		document.getElementById("nav").style.display = "none";
		hasFlipped = "False";
	}
	else if(hasFlipped == "False"){
		document.getElementById("nav").style.display = "flex";
		hasFlipped = "True";
	}

}

const Navbar = () => {
  return (
    <>
      <Nav>
          <Bars id={"hamburger"} onClick={openNav} />
		<NavMenu id={"nav"}>

          <NavBtnLink to='/' activeStyle>
            Home
          </NavBtnLink>
          <NavBtnLink to='/Jetskis' activeStyle>
            Jet-skis
          </NavBtnLink>
          <NavBtnLink to='/Contact' activeStyle>
            Contact
          </NavBtnLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;