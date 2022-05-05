import React from 'react'
import { Nav, Button, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

  return (
    <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
      {/* <Container fluid> */}
      <div className="container-fluid justify-content-between">
        <ul className='nav navbar-nav'>
          <li><Nav.Item><Nav.Link href="/">Hotelify</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/Hotel">Hotel</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/">Booking History</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/About">About Us</Nav.Link></Nav.Item></li>

          <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
            <Link to="/Login"><Button variant="outline-primary">Login</Button></Link>
          </li>
          <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
            <Link to="/Register"><Button variant="outline-danger">Register</Button></Link>
          </li>
        </ul>

        <ul className='nav navbar-nav'>
          <li className="mx-2 d-none d-md-block">
            <Link to="/Login"><Button variant="outline-primary" >Login</Button></Link>
          </li>
          <li className="mx-2 d-none d-md-block">
            <Link to="/Register"><Button variant="outline-danger" >Register</Button></Link>
          </li>
        </ul>
      </div>

      {/* 
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      {/* </Container> */}
    </nav>
  )
}
export default Navigation



