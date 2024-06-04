import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/loader';

const Contact = () => {
    const [isLoaded, setLoad] = useState(true);
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setLoad(false);
        }, 2000);
    }, []);
    if (isLoaded) {
        return <Loader />;
    }
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
                        <span className="primary-text-color">Contact</span>
                    </p>
                </div>
            </div>
            {/*breadcrumb section end*/}
            {/*contact section start*/}
            <section className="contact-section bg-white ptb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="text-center">
                                <span className="text-uppercase secondary-text-color fw-light fs-sm">
                                    Contact Us
                                </span>
                                <h2 className="mb-4 mt-2">Keep In Touch with Us</h2>
                                <p className="text-color fw-light">
                                    Our Customer Care team are available for support Monday - Friday
                                    from 9am to 5pm GMT. Alternatively, look to our FAQs page for
                                    answers to common queries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="light-bg contact-form-box mt-60">
                        <form action="#" className="ct-form">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Your Name*"
                                            className="theme-input bg-white"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <input
                                            type="email"
                                            placeholder="Email Address*"
                                            className="theme-input bg-white"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="input-field">
                                        <textarea
                                            className="theme-input bg-white"
                                            placeholder="Type Message here"
                                            rows={7}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="template-btn primary-btn w-100 text-uppercase fw-normal mt-32"
                            >
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/*contact section end*/}
            {/*location map start*/}
            <div className="location-map overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.03351809071515!2d-74.00386275444733!3d40.706211994888974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bbc62134845%3A0x70cef33126ac551d!2sThe%20Canvas!5e0!3m2!1sen!2sbd!4v1684131449550!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    loading="lazy"
                />
            </div>
            {/*location map end*/}
            {/*location box start*/}
            <section className="location-box-area bg-white ptb-120 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6">
                            <div className="location-box light-bg text-center position-relative z-1">
                                <h3 className="mb-40">Berlin</h3>
                                <p className="text-color mb-0 fw-light">
                                    Distrak Street 2SK Line, Germany galore@inside-support.com (+125)
                                    2156-2145
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="location-box light-bg text-center position-relative z-1">
                                <h3 className="mb-40">Dhaka</h3>
                                <p className="text-color mb-0 fw-light">
                                    Distrak Street 2SK Line, Germany galore@inside-support.com (+125)
                                    2156-2145
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="location-box light-bg text-center position-relative z-1">
                                <h3 className="mb-40">Ottawa</h3>
                                <p className="text-color mb-0 fw-light">
                                    Distrak Street 2SK Line, Germany galore@inside-support.com (+125)
                                    2156-2145
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*location box end*/}
        </>

    )
}

export default Contact