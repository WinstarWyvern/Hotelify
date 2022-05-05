import React from 'react'
import { Navbar, Nav, Button, Container, Form, FormControl, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

  return (
    <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg">
      <Container fluid>
        <div class="d-flex">
          <Navbar.Brand>Hotelify</Navbar.Brand>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li><Nav.Item><Nav.Link href="/Home">Home</Nav.Link></Nav.Item></li>
              <li><Nav.Item><Nav.Link href="/Hotel">Hotel</Nav.Link></Nav.Item></li>
              <li><Nav.Item><Nav.Link href="/">Booking History</Nav.Link></Nav.Item></li>
              <li><Nav.Item><Nav.Link href="/About">AboutUs</Nav.Link></Nav.Item></li>
            </ul>
          </div>
        </div>

        <div class="d-md-flex">
          <ul className='nav navbar-nav ms-auto'>
            <li>
              <Link to="/Login"><Button variant="outline-primary" className="m-2" >Login</Button></Link>
            </li>
            <li>
              <Link to="/Register"><Button variant="outline-danger" className="m-2">Register</Button></Link>
            </li>
          </ul>
        </div>


        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  )
}

export default Navigation



