import React from 'react'

const Signup = () => {
  return (
      <>
          {/*breadcrumb section start*/}
          <div
              className="breadcrumb-section pt-40 pb-40"
              data-background="assets/images/shapes/breadcrumb-bg.jpg"
          >
              <div className="container">
                  <p className="breadcrumb-text fw-light mb-0">
                        <Link to="/">Home</Link>
                        <span className="primary-text-color">Signup</span>
                  </p>
              </div>
          </div>
          {/*breadcrumb section end*/}
          {/*login area start*/}
          <div className="login-area ptb-120 bg-white">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-6">
                          <form className="theme-form">
                              <h3 className="mb-40">Create Account</h3>
                              <input
                                  type="text"
                                  placeholder="Your Name"
                                  className="theme-input"
                              />
                              <input
                                  type="text"
                                  placeholder="Username"
                                  className="theme-input mt-3"
                              />
                              <input
                                  type="password"
                                  placeholder="Password*"
                                  className="theme-input mt-3"
                              />
                              <div className="forgot-password d-flex align-items-center justify-content-between gap-2 mt-32">
                                  <label className="mb-0">
                                      <input type="checkbox" /> Accept The Terms and Privacy Policy
                                  </label>
                              </div>
                              <button
                                  type="submit"
                                  className="template-btn primary-btn w-100 mt-32"
                              >
                                  <span>Signup</span>
                              </button>
                              <p className="mb-0 mt-32">
                                  Already have an account?{" "}
                                  <a href="login.html" className="secondary-text-color">
                                      Login
                                  </a>
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          {/*login area end*/}
      </>

  )
}

export default Signup