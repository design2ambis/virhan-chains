import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loader";

const Orderdetail = () => {
    const { orderId } = useParams();
    document.title = "Virhan Jewels - Orderdetail";
    const [isLoaded, setLoad] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);




    const username = localStorage.getItem("token");

    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);




    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setLoad(false);
        }, 500);
    }, []);



    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            try {
                const proRes = await fetch(
                    `https://virhanjewels.nivsjewels.com/api/select?get_order_details&id=${orderId}&token=${username}`
                );
                const proData = await proRes.json();
                if (proData.status === 200) {
                    setCart(proData.data);
                } else {

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [orderId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [orderId]);

    document.title = `Virhan Jewels - Orderdetail`;

    if (isLoaded) {
        return <Loader />;
    }

    return (
        <>
            {/* Breadcrumb section start */}
            <div
                className="breadcrumb-section pt-40 pb-40"
                data-background="assets/images/shapes/breadcrumb-bg.jpg"
            >
                <div className="container">
                    <p className="breadcrumb-text fw-light mb-0">
                        <Link to="/">Home</Link>
                        <span className="primary-text-color">/ Orders</span>
                    </p>
                </div>
            </div>
            {/* Breadcrumb section end */}

            {/* Orders table start */}
            <div className="ptb-120 bg-white">
                <div className="container">
                    {isLoaded ? (
                        <Loader />
                    ) : (
                        <div className="wishlist-table table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Design no</th>
                                        <th>Qty</th>
                                        <th>Image</th>
                                        <th>Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((pro, index) => (
                                            <tr key={index}>
                                                <td className="productImage">{index + 1}</td>
                                                <td className="productName">{pro.proname}</td>
                                                <td className="qty">{pro.qty}</td>
                                                <td className="qty">
                                                    <img src={pro.img} alt={pro.proname} style={{ width: "80px" }} />
                                                </td>
                                                <td className="qty">{pro.wgt}</td>

                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            {/* Orders table end */}
        </>
    );
};

export default Orderdetail;
