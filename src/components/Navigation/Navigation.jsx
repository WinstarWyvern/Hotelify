import React from 'react'
import { Navbar, Nav, Button, Container, Form, FormControl } from 'react-bootstrap';
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <div class="d-flex">
          <Navbar.Brand>Hotelify</Navbar.Brand>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Hotel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Booking History</Nav.Link>
          </Nav.Item>
        </div>

        {/* <div class="d-lg-flex justify-content-end ">
          <Button variant="outline-success" className="m-2">Login</Button>
          <Button variant="outline-primary" className="m-2">Register</Button>
        </div> */}

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Navigation


