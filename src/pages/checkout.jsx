import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import swal from "sweetalert";

const Checkout = () => {
    document.title = "Virhan Chains - Checkout";

    const [isLoaded, setLoad] = useState(true);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCount, setIsCount] = useState(false);

    const username = localStorage.getItem("token");



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        townCity: '',
        stateCountry: '',
        zipcode: '',
        phone: '',
        save: false,
        token: username
        // order_confirmation: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };



    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);

    const fetchData = async () => {
        try {
            setLoad(true);
            const cartResponse = await fetch(
                "https://nivsjewels.com/api/select?get_cart&token=" + username
            );
            const cartData = await cartResponse.json();
            if (cartData.status === 200) {
                setCart(cartData);
                setIsCount(true);
                // console.log(cartData.data);
            } else {
                setIsCount(false);
            }
            setLoad(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://nivsjewels.com/api/insert', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.status === true) {
                swal({
                    title: 'Success',
                    text: 'Order Placed Successfully',
                    icon: 'success'
                }).then(() => {
                    window.location.href = '/myaccount'
                });
            }
            console.log('Form submitted:', data);

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors or display an error message to the user
        }
    };

    useEffect(() => {
        fetchData();
    }, [username]);

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
                        <Link to="/">Home</Link> /
                        <span className="primary-text-color">Checkout</span>
                    </p>
                </div>
            </div>
            {/*breadcrumb section end*/}
            {/*checkout section start*/}
            <section className="checkout-section bg-white ptb-120">
                <div className="container">
                    {/* <div className="returning-box primary-bg-color checkout-toggle-form">
                        <p className="text-white mb-0">
                            Returning Customer?{" "}
                            <a href="#" className="form-toggle-btn text-white">
                                Click here to login
                            </a>
                        </p>
                        <form className="checkout-login-form toggle-form">
                            <input
                                type="email"
                                className="theme-input"
                                placeholder="Email Address"
                            />
                            <input
                                type="password"
                                className="theme-input"
                                placeholder="Password"
                            />
                            <button type="submit" className="template-btn primary-btn">
                                Login
                            </button>
                        </form>
                    </div> 
                     <div className="checkout-coupon-box checkout-toggle-form mt-32">
                        <p className="mb-0 primary-text-color">
                            Have a coupon?{" "}
                            <a href="#" className="form-toggle-btn primary-text-color">
                                Click here to enter your code
                            </a>
                        </p>
                        <form className="checkout-coupon-form toggle-form">
                            <input type="text" className="theme-input" placeholder="Coupon" />
                            <button type="submit" className="template-btn primary-btn">
                                Apply Voucher
                            </button>
                        </form>
                    </div> */}
                    <form className="checkout-form mt-80" onSubmit={handleSubmit} >
                        <div className="row g-4">
                            <div className="col-xl-6">
                                <h3 className="mb-4 fw-normal">Billing Details</h3>
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="input-field">
                                            <label htmlFor="fname">First Name*</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                className="theme-input bg-transparent"
                                                placeholder="Enter First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                id="fname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-field">
                                            <label htmlFor="lname">Last Name*</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="theme-input bg-transparent"
                                                placeholder="Enter Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                id="lname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-field">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                placeholder="Enter Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-field">
                                            <label htmlFor="town">Town / City </label>
                                            <input
                                                type="text"
                                                name="townCity"
                                                placeholder="Town / City"
                                                value={formData.townCity}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent"
                                                id="town"
                                            />
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <div className="input-field">
                                            <label htmlFor="country">Country / Region*</label>
                                            <input
                                                type="text"
                                                name="stateCountry"
                                                placeholder="India"
                                                value={formData.stateCountry}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent"
                                                id="country"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-field">
                                            <label htmlFor="street">Street Address*</label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="House number and street number"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent"
                                                id="street"
                                            />
                                            {/* <input
                                                type="text"

                                                placeholder="Apartment, suite, unit, etc. (optional)"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent mt-4"
                                            /> */}
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <div className="input-field">
                                            <label htmlFor="zip">Zip Code*</label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                placeholder="pincode"
                                                value={formData.zipcode}
                                                onChange={handleChange}
                                                className="theme-input bg-transparent"
                                                id="zip"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="input-field">
                                            <label htmlFor="note">Order Notes*</label>
                                            <textarea
                                                name=""
                                                className="theme-input bg-transparent"
                                                rows={5}
                                                id="note"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* <h3 className="mb-4">Your Order</h3> */}
                                <div className="order-table table-responsive" style={{ height: '822px' }}>
                                    <table className="table">
                                        <tbody>
                                            <h3 className="mb-4">Your Order</h3>
                                            <tr>
                                                <th>Products</th>
                                                <th>Weight</th>
                                            </tr>
                                            {cart.data.map((cart, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-4 product-box">
                                                            <div className="feature-image light-bg">
                                                                <Link to={`/product/${cart.capName}`}>
                                                                    <img
                                                                        src={cart.capImg}
                                                                        className="img-fluid"
                                                                        alt={cart.capName}
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <span className="fs-sm text-uppercase secondary-text-color d-block">
                                                                    {cart.capName}
                                                                </span>
                                                                <Link
                                                                    to={`/product/${cart.capName}`}
                                                                    className="product-title h6 mt-2 d-block"
                                                                >
                                                                    {cart.capWgt} X {cart.caQty}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="primary-text-color-color fw-medium pp-price">
                                                            {(parseFloat(cart.capWgt) * parseFloat(cart.caQty)).toFixed(2)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td>
                                                    <span className="primary-text-color fw-medium pp-price">
                                                        Total Qty
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="primary-text-color fw-medium pp-price">
                                                        {cart.total.total_qty}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="primary-text-color fw-medium pp-price">
                                                        Sub Total Weight
                                                    </span>
                                                </td>
                                                <td>
                                                    <p className="mb-0 pp-price">

                                                        <span className="primary-text-color fw-medium">
                                                            {cart.total.total_weight}
                                                        </span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="primary-text-color fw-medium pp-price">
                                                        Total
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="secondary-text-color fw-meidum pp-price">
                                                        {cart.total.total_weight}
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* <tr className="border-0">
                                                <td colSpan={2} className="border-0">
                                                    <div className="checkout-payment-methods">
                                                        <label>
                                                            <input type="radio" name="payment-method" />
                                                            <span className="radio">Direct Bank Transfer</span>
                                                            <span className="description mb-0 fw-light fs-sm text-color">
                                                                Make your payment directly into our bank account.
                                                                Please use your Order ID as the payment reference.
                                                                Your order will not be shipped until the funds have
                                                                cleared in our account.
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="payment-method" />
                                                            <span className="radio">Check Payments</span>
                                                            <span className="description mb-0 fw-light fs-sm text-color">
                                                                Make your payment directly into our bank account.
                                                                Please use your Order ID as the payment reference.
                                                                Your order will not be shipped until the funds have
                                                                cleared in our account.
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="payment-method" />
                                                            <span className="radio">Cash On Delivery</span>
                                                            <span className="description mb-0 fw-light fs-sm text-color">
                                                                Cash Upon Delivery
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="payment-method" />
                                                            <span className="radio">Paypal</span>
                                                        </label>
                                                        <p className="mt-32 text-color fw-light fs-sm">
                                                            Your personal data will be used to process your order,
                                                            support your experience throughout this website, and
                                                            for other purposes described in our privacy policy.
                                                        </p>
                                                        <label className="d-flex align-items-center gap-2">
                                                            <input type="checkbox" />
                                                            <span className="text-color fw-light fs-sm checkbox">
                                                                {" "}
                                                                I have read and agree terms and conditions *
                                                            </span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr> */}
                                            <tr className="border-0">
                                                <td colSpan={2} className="border-0">
                                                    <button
                                                        type="submit"
                                                        className="template-btn primary-btn w-100 text-uppercase fw-normal"
                                                    >
                                                        <span>Place Order</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/*checkout section end*/}
        </>

    )
}

export default Checkout