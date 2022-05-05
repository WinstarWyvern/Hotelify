import React from 'react'
import { Form, Button, Card, FormControl, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BgLogin } from '../../import/importAssets'
import './Login.css'
const Login = () => {
  return (

    <Card className="vh-100 bg-card">
      <Container className="py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-4 d-none d-md-block">
                  <img src={BgLogin}
                    alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <Card.Body className="p-4 p-lg-6 text-black">

                    <Form>

                      <div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <Card.Title><div className="h1 fw-bold">Hotelify</div></Card.Title>
                      </div>

                      <Card.Text className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</Card.Text>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <FormControl type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl type="password" placeholder="Password" />
                      </Form.Group>

                      <div className="my-4">
                        <Link to="/">
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </Link>
                      </div>

                      <div className='mb-4'>
                        <Link className="small text-muted" to="/">Forgot password?</Link>
                      </div>

                      <div className="mb-4 pb-lg-2">
                        <p style={{ color: '#393f81' }}>
                          Don't have an account?
                          {' '}
                          <Link to='/Register' style={{ color: '#393f81' }}>
                            Register here
                          </Link>
                        </p>
                      </div>

                      <div>
                        <p>By continuing, you are indicating that you accept our  <Link to="/" className="small text-muted">Terms of use</Link> and <Link to="/" className="small text-muted">Privacy policy</Link>
                        </p>
                      </div>

                    </Form>

                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Card>

  )
}

export default Login