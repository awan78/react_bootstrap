import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

export const NavigationBar = () => {

  const Styles = styled.div`
    .navbar {
    	background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link {
    	color: #bbb;

    	&:hover {
    		color: white;
    	}
    } 
  `
  return(
  	<Styles>
	  	<Navbar expand="lg">
	  	  <Navbar.Brand href="/">Antiques</Navbar.Brand>
	  	  <Navbar.Toggle aria-controls='basic-navbar-nav' />
	  	  <Navbar.Collapse id="basic-navbar-nav">
	        <Nav className="ml-auto">
	          <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
	          <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
	          <Nav.Item><Nav.Link href='/contact'>Contact Us</Nav.Link></Nav.Item>
	        </Nav>
          <Nav style={{marginLeft: "auto", paddingRight: "80px"}}>
            <Nav.Item>
              <input type='text' placeholder="Search here..."/>
            </Nav.Item>
          </Nav>
	  	  </Navbar.Collapse>
	  	</Navbar>
  	</Styles>
  )
}