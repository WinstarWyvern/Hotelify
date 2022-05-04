import React from 'react'
import { Navbar, Nav, Button, Container, Form, FormControl, NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <div class="d-flex">
          <Navbar.Brand>Hotelify</Navbar.Brand>
          <Nav.Item>
            <NavLink>
              <Link to="/" class="link">
                Home
              </Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink>
              <Link to="/Hotel" class="link">
                Hotel
              </Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink>Booking History</NavLink>
          </Nav.Item>
        </div>

        <div class="d-lg-flex justify-content-end ">
          <Link to="/Login"><Button variant="outline-primary" className="m-2" >Login</Button></Link>
          <Link to="/Register"><Button variant="outline-danger" className="m-2">Register</Button></Link>
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



