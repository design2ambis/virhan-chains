import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/loader';
import swal from 'sweetalert';

const Register = () => {

    document.title = "Virhan Jewels - Register";

    const [isLoaded, setLoad] = useState(false);

    document.title = "Virhan Jewels - Register";

    const [formData, setFormData] = useState({
        customerName: "",
        mobile: "",
        address: "",
        phone: "",
        city: "",
        email: "",
        password: "",
        termsAccepted: false,
        register: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        // Validate form data
        const validationErrors = {};
        if (!formData.customerName.trim()) {
            validationErrors.customerName = "Customer Name is required";
        }

        // Add more validation logic for other fields

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If validation passes, submit the form data
        setLoad(true);
        try {
            const response = await fetch("https://virhanchains.nivsjewels.com/api/register", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.status === true) {
                swal({
                    title: 'Success',
                    text: data.message,
                    icon: 'success'
                }).then(() => {
                    window.location.href = '/';
                });
            } else {
                swal({
                    title: 'Failed',
                    text: 'Registration Failed',
                    icon: 'error'
                });
            }
        } catch (error) {
            console.error("Registration error:", error);
            // Handle error response from the server
        }
        setLoad(false);
    };

    if (isLoaded) {
        return <Loader />;
    }

    return (
        <>
            <ToastContainer />
            {/*breadcrumb section start*/}
            <div
                className="breadcrumb-section pt-40 pb-40"
                data-background="assets/images/shapes/breadcrumb-bg.jpg"
            >
                <div className="container">
                    <p className="breadcrumb-text fw-light mb-0">
                        <Link to="/">Home</Link> / <span className="primary-text-color">Signup</span>
                    </p>
                </div>
            </div>
            {/*breadcrumb section end*/}
            {/*login area start*/}
            <div className="login-area ptb-120 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <form className="theme-form" onSubmit={handleRegister}>
                                <h3 className="mb-40">Create Account</h3>
                                <input
                                    type="text"
                                    name="customerName"
                                    placeholder="Customer Name"
                                    className="theme-input"
                                    value={formData.customerName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.customerName && <p className="error">{errors.customerName}</p>}
                                <input
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    className="theme-input mt-3"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="address"
                                    placeholder="Address"
                                    className="theme-input mt-3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="theme-input mt-3"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="theme-input mt-3"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="theme-input mt-3"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="theme-input mt-3"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {/* <div className="forgot-password d-flex align-items-center justify-content-between gap-2 mt-32">
                                    <label className="mb-0">
                                        <input
                                            type="checkbox"
                                            name="termsAccepted"
                                            checked={formData.termsAccepted}
                                            onChange={handleChange}
                                        />{" "}
                                        Accept The Terms and Privacy Policy
                                    </label>
                                </div> */}
                                <button
                                    type="submit"
                                    className="template-btn primary-btn w-100 mt-32"
                                >
                                    <span>Signup</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*login area end*/}
        </>

    )
}

export default Register