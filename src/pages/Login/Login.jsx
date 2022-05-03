import React from 'react'
import { Form, Button, Card, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <Card>
      <section className="vh-100 bg-card">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: '1rem' }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" class="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

                      <Form>

                        <div class="d-flex align-items-center mb-3 pb-1 justify-content-center">
                          <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                          <Card.Title><div class="h1 fw-bold">Hotelify</div></Card.Title>
                        </div>

                        <Card.Text class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</Card.Text>

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

                        <div className="mb-3">
                          <Link to="/">
                            <Button variant="primary" type="submit">
                              Login
                            </Button>
                          </Link>
                        </div>

                        <div>
                          <a class="small text-muted" href="#!">Forgot password?</a>
                        </div>
                        <p class="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!"
                          style={{ color: '#393f81' }}>Register here</a></p>
                        <div>
                          <a href="#!" class="small text-muted">Terms of use</a>
                        </div>
                        <div>
                          <a href="#!" class="small text-muted">Privacy policy</a>
                        </div>

                      </Form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>

  )
}

export default Login