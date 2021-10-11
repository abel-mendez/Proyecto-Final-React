import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Footer(){
    return(
        <>
        <Footer className="bg-success">
        <Container fluid>                
              <Nav.Link href="#action2"><img className='facebookLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/facebook.svg"></img></Nav.Link>
              <Nav.Link href="#action2"><img className='instagramLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/instagram.svg"></img></Nav.Link>
              <Nav.Link href="#action2"><img className='gitLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/github.svg"></img></Nav.Link>
              <Nav.Link href="#action2"><img className='twitterLogo' src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/twitter.svg"></img></Nav.Link>            
        </Container>
      </Footer>          
        </>
    )
}