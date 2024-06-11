import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  document.title = "Virhan Jewels - Wishlist";

  const [isLoaded, setLoad] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [wish, setWish] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = localStorage.getItem("token");

  useEffect(() => {
    if (username && username !== null && username != "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const wish = await fetch(
        "https://virhanchains.nivsjewels.com/api/select?get_wishlist&token=" + username
      );
      const fetchdata = await wish.json();
      if (fetchdata.status === 200) {
        setWish(true);
        setWishlist(fetchdata);
      } else if (fetchdata.status == 400) {
        setWish(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoad(false);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  const Removewishlist = async (id) => {
    try {
      const wish = await fetch(
        `https://virhanchains.nivsjewels.com/api/update?removeWishlist&token=${username}&id=${id}`
      );
      const fetchdata = await wish.json();
      if (fetchdata.status === true) {
        fetchData();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const MovetoCart = async (id, image, no, weight) => {
    var token = localStorage.getItem("token");

    if (token && token != null && token != "") {
      const cartdata = {
        pid: id,
        proimg: image,
        prono: no,
        qty: 1,
        prowgt: weight,
        token: token,
        add_cart: "",
      };
      try {
        const cartraw = await fetch(`https://virhanchains.nivsjewels.com/api/update`, {
          method: "POST",
          body: JSON.stringify(cartdata),
        });

        const cartjson = await cartraw.json();

        if (cartjson.status == true) {
          toast.success(`${no} Moved to Cart Successfully!`);
          fetchData();
        } else {
          toast.error("Something Went Wrong");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      toast.error("Login for Add to cart");
    }
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
            <Link to="/">Home</Link>
            <span className="primary-text-color">/ Wishlist</span>
          </p>
        </div>
      </div>
      {/*breadcrumb section end*/}
      {/*wishlist table start*/}
      <div className="ptb-120 bg-white">
        <div className="container">
          {isLoggedIn ? (
            <>
              {wish ? (
                <>
                  <div className="wishlist-table table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th className="text-uppercase">Product Name</th>
                          <th className="text-uppercase">Weight</th>
                          <th className="text-uppercase">Status</th>
                        </tr>

                        {wishlist.data.map((w, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center gap-4 product-box">
                                <button
                                  type="button"
                                  className="remove_product"
                                  onClick={() => Removewishlist(w.wId)}
                                >
                                  <i className="fas fa-close" />
                                </button>
                                <div className="feature-image light-bg">
                                  <img
                                    src={w.wProimg}
                                    className="img-fluid"
                                    alt="feature image"
                                  />
                                </div>
                                <div>
                                  <span className="fs-sm text-uppercase secondary-text-color d-block">
                                    {w.wProno}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>{w.wProweight}</td>
                            <td>
                              <div className="stock-status d-flex align-items-center justify-content-between">
                                {/* <span>Out of stock</span> */}
                                <button
                                  type="button"
                                  className="template-btn primary-btn text-uppercase fs-sm"
                                  onClick={() =>
                                    MovetoCart(
                                      w.wProId,
                                      w.wProimg,
                                      w.wProno,
                                      w.wProweight
                                    )
                                  }
                                >
                                  <span>Add to Cart</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <>
                  <h5 className="text-center">No Products In Wishlist</h5>
                </>
              )}
            </>
          ) : (
            <>
              <h5 className="text-center">
                <Link to={`/login`}>Login</Link> to View Wishlist
              </h5>
            </>
          )}
        </div>
      </div>
      {/*wishlist table end*/}
    </>
  );
};

export default Wishlist;
