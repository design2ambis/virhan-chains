import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

const Orders = () => {
  document.title = "Virhan Chains - Orders";

  const [isLoaded, setLoad] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("token");
    if (username) {
      setIsLoggedIn(true);
      fetchData(username);
    } else {
      window.location.href = "/";
    }
  }, []);

  const fetchData = async (username) => {
    try {
      setLoad(true);
      const orderResponse = await fetch(
        `https://virhanchains.nivsjewels.com/api/select?get_order&token=${username}`
      );
      const orderData = await orderResponse.json();
      if (orderData.status === 200) {
        setOrders(orderData);
        setIsCount(true);
      } 
      setLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoad(false);
    }
  };

  const getStatus = (type) => {
    switch (type) {
      case '1':
        return <button className='btn btn-warning text-warning' style={{ backgroundColor: "#eb9316" }}>Pending</button>;
      case '2':
        return <button className='btn btn-success' style={{ backgroundColor: "#419641" }}>Order Accept</button>;
      default:
        return <button className='btn btn-primary' style={{ backgroundColor: "#2e6da4" }}>Order complete</button>;
    }
  };

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
                <tbody>
                  <tr>
                    <th className="text-uppercase">S No</th>
                    <th className="text-uppercase">Order</th>
                    <th className="text-uppercase">Qty</th>
                    <th className="text-uppercase">Status</th>
                    <th className="text-uppercase">Action</th>
                  </tr>
                  {isCount ? (
                    orders.data.map((o, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>VI-{o.Orderno}</td>
                        <td>{o.Qty}</td>
                        <td>{getStatus(o.OSta)}</td>
                        <td><Link to={`/orderdetail/${o.id}`} >View</Link></td>
                      </tr>
                    ))
                  ) : (
                        <tr className="text-center">
                      <td colSpan="5" >No orders found</td>
                    </tr>
                  )}
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

export default Orders;
