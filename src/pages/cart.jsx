import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/loader';

const Cart = () => {

    document.title = "Virhan Jewels - Cart";

    const [isLoaded, setLoad] = useState(true);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCount, setIsCount] = useState(false);

    const username = localStorage.getItem("token");

    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);

    const fetchData = async () => {
        try {
            const cartResponse = await fetch(
                "https://virhanjewels.nivsjewels.com/api/select?get_cart&token=" + username
            );
            const cartData = await cartResponse.json();
            if (cartData.status === 200) {
                setCart(cartData);
                setIsCount(true);
                // console.log(cartData.data);
            } else {
                setIsCount(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoad(false);
    };

    useEffect(() => {
        fetchData();
    }, [username]);

    const qty = async (id, qty, type) => {
        try {
            setLoad(true);
            const cartResponse = await fetch(
                `https://virhanjewels.nivsjewels.com/api/update?update_cart&id=${id}&qty=${qty}&type=${type}`
            );
            const cartData = await cartResponse.json();
            if (cartData.update_sta === true) {
                fetchData();
            }
            setLoad(false);
        } catch (error) {
            console.error("Error updating cart:", error);
        }


    };

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
                        <span className="primary-text-color"> / Cart</span>
                    </p>
                </div>
            </div>
            {/*breadcrumb section end*/}
            {/*-cart table start*/}


            {isLoggedIn ? (
                <>
                    {isCount ? (
                        <>
                            <div className="ptb-120 bg-white">
                                <div className="container">
                                    <div className="cart-table-wrapper table-responsive">
                                        <table className="cart-table table">
                                            <tbody>
                                                <tr>
                                                    <th className="text-center">Products</th>
                                                    <th>WEIGHT</th>
                                                    <th>Quantity</th>
                                                    <th className="text-end">Subtotal</th>
                                                </tr>
                                                {
                                                    cart.data.map((cart, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-4 product-box">
                                                                    <button type="button" className="remove_product"
                                                                        onClick={() =>
                                                                            qty(
                                                                                cart.caId,
                                                                                cart.caQty,
                                                                                "delete"
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fas fa-close" />
                                                                    </button>
                                                                    <div className="feature-image light-bg">
                                                                        <img
                                                                            src={cart.capImg}
                                                                            className="img-fluid"
                                                                            alt={cart.capName}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <span className="fs-sm text-uppercase secondary-text-color d-block">
                                                                            {cart.capName}
                                                                        </span>
                                                                        {/* <a href="#" className="product-title h6 mt-2 d-block">
                                                            Dolda Sweet Gold Rings
                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="fw-medium primary-text-color">{cart.capWgt}</span>
                                                            </td>
                                                            <td>
                                                                <div className="quantity d-flex align-items-center">
                                                                    <input type="text" defaultValue={1} readOnly value={cart.caQty} />
                                                                    <div className="step-btns">
                                                                        <button className="increment"
                                                                            onClick={() =>
                                                                                qty(
                                                                                    cart.caId,
                                                                                    cart.caQty,
                                                                                    "add"
                                                                                )
                                                                            }>
                                                                            <i className="fa-solid fa-angle-up" />
                                                                        </button>
                                                                        <button className="decrement"
                                                                            onClick={() =>
                                                                                qty(
                                                                                    cart.caId,
                                                                                    cart.caQty,
                                                                                    "sub"
                                                                                )
                                                                            }
                                                                        >
                                                                            <i className="fa-solid fa-angle-down" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="primary-text-color fw-medium d-block text-end">
                                                                    {(parseFloat(cart.caQty) * parseFloat(cart.capWgt)).toFixed(2)}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                <tr>
                                                    {/* <td colSpan={4}>
                                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                                            <form className="cart-coupon-form d-flex align-items-center">
                                                <input
                                                    type="text"
                                                    placeholder="Coupon Code"
                                                    className="theme-input"
                                                />
                                                <button type="submit" className="submit-btn">
                                                    Apply Coupon
                                                </button>
                                            </form>
                                            <button type="button" className="template-btn primary-btn">
                                                <span>Update Cart</span>
                                            </button>
                                        </div>
                                    </td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <section className="pb-120 bg-white">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="cart-calculator">
                                                <h3 className="mb-40">Cart Totals</h3>
                                                <form className="cart-calculator-form table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Total Qty</td>
                                                                <td>{cart.total.total_qty}</td>
                                                            </tr>
                                                            {/* <tr>
                                                <td>Shipping</td>
                                                <td>
                                                    <div className="shipping-method">
                                                        <label>
                                                            <input type="radio" name="shipping" />
                                                            <span>Free Shipping</span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="shipping" />
                                                            <span>Flat Rate</span>
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="shipping" />
                                                            <span>Local Pickup</span>
                                                        </label>
                                                        <p className="my-4 fs-sm fw-light">
                                                            Shipping options will be updated during checkout
                                                        </p>
                                                        <a href="#" className="primary-text-color">
                                                            Calculate Shipping
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr> */}
                                                            <tr>
                                                                <td>Total</td>
                                                                <td>{cart.total.total_weight}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <Link
                                                        to="/checkout"
                                                        className="template-btn primary-btn text-uppercase mt-5"
                                                    >
                                                        <span>Proceed to checkout</span>
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            <div className="ptb-120 bg-white">
                                <div className="container text-center">
                                    <h4>No Products In cart</h4>
                                </div>
                            </div>
                        </>
                    )}

                </>
            ) : (
                <>
                    <div className="ptb-120 bg-white">
                        <div className="container text-center">
                            <h4><Link to="/login">Login</Link> to View cart</h4>
                        </div>
                    </div>
                </>
            )
            }

        </>

    )
}

export default Cart