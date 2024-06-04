import React from 'react'

const Newsletter = () => {
    return (
        <>
            {/*newsletter section start*/}
            < section className="newsletter-section light-bg ptb-120 position-relative z-1" >
                <img
                    src="assets/images/shapes/neaklace.png"
                    alt="neaklace"
                    className="position-absolute end-0 top-0 z--1 d-none d-xxl-block"
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="newsletter-box text-center">
                                <span className="fs-sm fw-light secondary-text-color">
                                    GET OUR NEWSLETTER
                                </span>
                                <h2 className="fw-normal mt-4 mb-50">
                                    Get News &amp; Update to Your Inbox
                                </h2>
                                <form className="newsletter-form d-flex align-items-center">
                                    <input type="email" placeholder=" Email address..." />
                                    <button type="submit" className="template-btn primary-btn">
                                        <span>Subscribe</span>
                                    </button>
                                </form>
                                <p className="mb-0 mt-32 fw-light">
                                    Will be used accordance with our{" "}
                                    <a
                                        href="#"
                                        className="text-decoration-underline primary-text-color hover-secondary"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*newsletter section end*/}
        </>
    )
}

export default Newsletter