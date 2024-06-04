import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/loader'


const Wishlist = () => {
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
                        <span className="primary-text-color">Wishlist</span>
                    </p>
                </div>
            </div>
            {/*breadcrumb section end*/}
            {/*wishlist table start*/}
            <div className="ptb-120 bg-white">
                <div className="container">
                    <div className="wishlist-table table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th className="text-uppercase">Product Name</th>
                                    <th className="text-uppercase">Price</th>
                                    <th className="text-uppercase">Stock Status</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-4 product-box">
                                            <button type="button" className="remove_product">
                                                <i className="fas fa-close" />
                                            </button>
                                            <div className="feature-image light-bg">
                                                <img
                                                    src="assets/images/products/product-1.png"
                                                    className="img-fluid"
                                                    alt="feature image"
                                                />
                                            </div>
                                            <div>
                                                <span className="fs-sm text-uppercase secondary-text-color d-block">
                                                    Rings
                                                </span>
                                                <a href="#" className="product-title h6 mt-2 d-block">
                                                    Dolda Sweet Gold Rings
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$550.55</td>
                                    <td>
                                        <div className="stock-status d-flex align-items-center justify-content-between">
                                            <span>Out of stock</span>
                                            <button
                                                type="button"
                                                className="template-btn primary-btn text-uppercase fs-sm"
                                            >
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-4 product-box">
                                            <button type="button" className="remove_product">
                                                <i className="fas fa-close" />
                                            </button>
                                            <div className="feature-image light-bg">
                                                <img
                                                    src="assets/images/products/product-2.png"
                                                    className="img-fluid"
                                                    alt="feature image"
                                                />
                                            </div>
                                            <div>
                                                <span className="fs-sm text-uppercase secondary-text-color d-block">
                                                    Earrings
                                                </span>
                                                <a href="#" className="product-title h6 mt-2 d-block">
                                                    Blue Cool Earring
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$250.55</td>
                                    <td>
                                        <div className="stock-status d-flex align-items-center justify-content-between">
                                            <span>In stock</span>
                                            <button
                                                type="button"
                                                className="template-btn primary-btn text-uppercase fs-sm"
                                            >
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-4 product-box">
                                            <button type="button" className="remove_product">
                                                <i className="fas fa-close" />
                                            </button>
                                            <div className="feature-image light-bg">
                                                <img
                                                    src="assets/images/products/product-3.png"
                                                    className="img-fluid"
                                                    alt="feature image"
                                                />
                                            </div>
                                            <div>
                                                <span className="fs-sm text-uppercase secondary-text-color d-block">
                                                    Plated
                                                </span>
                                                <a href="#" className="product-title h6 mt-2 d-block">
                                                    Amazing Gold Plated
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$150.55</td>
                                    <td>
                                        <div className="stock-status d-flex align-items-center justify-content-between">
                                            <span>In stock</span>
                                            <button
                                                type="button"
                                                className="template-btn primary-btn text-uppercase fs-sm"
                                            >
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*wishlist table end*/}
        </>

    )
}

export default Wishlist