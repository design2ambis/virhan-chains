import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const Login = () => {

    document.title = "Virhan Jewels - Login";

    const { message } = useParams();

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setLoad(false);
        }, 500);
        if (message == "registersuccess") {
            swal({
                icon: "success",
                title: "Welcome",
                text: "Account Verified Successfully"
            })
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token && token != null && token != '') {
            window.location.href = '/';
        }
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const Loginform = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch('https://virhanchains.nivsjewels.com/api/signin', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    rememberMe,
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (data.status == true) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.name);
                toast.success('Login successful!');
                window.location.href = '/';
            } else {
                toast.error('Login failed. Invalid Crediential');
            }
            // Handle success (e.g., redirect to another page, display a message, etc.)
        } catch (error) {
            console.error('Error:', error);
            toast.error('Login failed. Please try again.');
            // Handle error (e.g., display an error message)
        }

    };


    return (
        <>
            <ToastContainer />



            {/* Breadcrumb section start */}
            <div
                className="breadcrumb-section pt-40 pb-40"
                data-background="assets/images/shapes/breadcrumb-bg.jpg"
            >
                <div className="container">
                    <p className="breadcrumb-text fw-light mb-0">
                        <Link to="/">Home</Link> / <span className="primary-text-color">Login</span>
                    </p>
                </div>
            </div>
            {/* Breadcrumb section end */}

            {/* Login area start */}
            <div className="login-area ptb-120 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <form className="theme-form" onSubmit={Loginform}>
                                <h3 className="mb-40">Login Account</h3>
                                <input
                                    type="text"
                                    placeholder="User name or email address*"
                                    className="theme-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                />
                                <input
                                    type="password"
                                    placeholder="Password*"
                                    className="theme-input mt-3"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                />
                                <div className="forgot-password d-flex align-items-center justify-content-between gap-2 mt-32 flex-wrap">
                                    <label className="mb-0">
                                        <input
                                            name="rememberMe"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />{' '}
                                        Remember me
                                    </label>
                                    <a href="#!" className="secondary-text-color">
                                        Lost your password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="template-btn primary-btn w-100 mt-32"
                                >
                                    <span>Login</span>
                                </button>
                                <p className="mb-0 mt-32">
                                    Not registered yet?{' '}
                                    <Link to="/register" className="secondary-text-color">
                                        Create an Account
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login area end */}
        </>
    );
};

export default Login;
