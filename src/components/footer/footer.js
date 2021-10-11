import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <div className="bg-success fixed-bottom d-flex justify-content-center me-auto my-lg-0 flex-grow-0 p-2">
        <div>
          Contactanos
        </div>
        <NavLink to="#action2"><img className='facebookLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/facebook.svg"></img></NavLink>
              <NavLink to="#action2"><img className='instagramLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/instagram.svg"></img></NavLink>
              <NavLink to="#action2"><img className='gitLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/github.svg"></img></NavLink>
              <NavLink to="#action2"><img className='twitterLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/twitter.svg"></img></NavLink>
      </div>          
        </>
    )
}