import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "./categoryfetch";
import MobileCategory from "./mobilecategory";
import Logo from "../../assets/Virhan-Chains.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./css/all.css";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.css";
import "./css/jquery-ui.css";
import "./css/nice-select.css";
import "./css/slick.css";
import "./css/style.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  var username = localStorage.getItem("token");

  useEffect(() => {
    if (username && username !== null && username != "") {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleClick = () => {
  //   // console.log("test");
  //   localStorage.removeItem("token");
  //   window.location.href = "/";
  // };

  const Openoffcanvus = () => {
    document.querySelector("#MobileSidebar").classList.add("active");
  };
  const Closeoffcanvus = () => {
    document.querySelector("#MobileSidebar").classList.remove("active");
  };
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Loggedout Successfully");
    window.location.href = "/";
  };
  return (
    <>
      {/*header section start*/}
      <ToastContainer />
      <header className="ur_header_section primary-bg-color header-sticky">
        {/* <div className="topbar py-2 bottom-border d-none d-lg-block">
          <div className="container-large">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8">
                <div className="topbar-info d-flex align-items-center gap-48 flex-wrap">
                  <span className="text-white item-single">
                    <a href="tel:38122252525" className="text-white">
                      +381 2225 25 25
                    </a>{" "}
                    (9AM - 6PM EST)
                  </span>
                  <span className="text-white item-single">
                    FREE SHIPPING ON ALL U.S. ORDERS
                  </span>
                  <span className="text-white item-single">GIFT CARDS</span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="d-flex align-items-center justify-content-end gap-48 topbar-info flex-wrap">
                  <div className="ur-header-select item-single">
                    <select>
                      <option>EN</option>
                      <option>BN</option>
                      <option>CN</option>
                    </select>
                  </div>
                  <div className="ur-header-select item-single">
                    <select>
                      <option>USD</option>
                      <option>BDT</option>
                      <option>CNY</option>
                      <option>INR</option>
                    </select>
                  </div>
                  <a href="#!" className="item-single text-uppercase">
                    store
                  </a>
                  <a href="#" className="item-single text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="header-wrapper">
          <div className="container-large">
            <div className="row align-items-center">
              <div className="col-xl-2 col-6">
                <Link to="/" className="logo-white">
                  <img
                    src={Logo}
                    alt="Virhan-Chains-logo"
                    className="img-fluid m-4"
                    style={{ width: "120px" }}
                  />
                </Link>
              </div>
              <div className="col-xxl-7 col-xl-8 d-none d-xl-block">
                <nav className="ur-navmenu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="has-submenu">
                      <a href="#!">Shop</a>
                      <Category />
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-2 col-6">
                <div className="ur-header-right d-flex align-items-center justify-content-end">
                  <div className="ur-user-links position-relative">
                    <a href="#!" className="user-btn text-white">
                      <i className="fa-regular fa-user" />
                    </a>
                    <ul className="position-absolute user-menu">
                      {isLoggedIn ? (
                        <>
                          <li>
                            <Link to="/myaccount">My Account</Link>
                          </li>
                          <li>
                            <a href="#!" onClick={handleLogout}>
                              Logout
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Sign Up</Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="user-cart d-none d-sm-block">
                    <Link to="/cart" className="cart-btn">
                      <span className="me-2">
                        <i className="fa-solid fa-basket-shopping" />
                      </span>
                      <span className="btn-text">Cart</span>
                    </Link>
                  </div>

                  <div className="header-search d-none d-sm-block">
                    <div className="dropdown">
                      <button className="search-btn" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <form className="search-form d-flex align-items-center gap-2">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="theme-input bg-transparent"
                          />
                          <button type="submit" className="submit-btn">
                            Go
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-none">
                    <a href="#" className="header-link header-search-open">
                      <i className="fa-solid fa-magnifying-glass" />
                    </a>
                  </div>
                  <div className="header-toggle">
                    <button
                      type="button"
                      className="ur3-header-toggle offcanvus-toggle d-none d-xl-inline-block"
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                    <button
                      type="button"
                      className="ur3-header-toggle mobile-menu-toggle d-xl-none"
                      onClick={Openoffcanvus}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*header section end*/}
      {/*offcanvus start*/}
      <div className="offcanvus-box position-fixed bg-white">
        <a href="#" className="offcanvus-close">
          <i className="fa-solid fa-xmark" />
        </a>
        <div className="content-top mb-100">
          <p className="mb-0 mt-32 fw-light">
            Distrak Street 2SK Line, Germanygalore@inside-support.com (+125)
            2156-2145
          </p>
        </div>
        <div className="offcanvus-gallery d-flex align-items-center flex-wrap">
          <a href="#">
            <img src="assets/images/gallery/1.jpg" alt="not found" />
          </a>
          <a href="#">
            <img src="assets/images/gallery/2.jpg" alt="not found" />
          </a>
          <a href="#">
            <img src="assets/images/gallery/3.jpg" alt="not found" />
          </a>
          <a href="#">
            <img src="assets/images/gallery/4.jpg" alt="not found" />
          </a>
          <a href="#">
            <img src="assets/images/gallery/5.jpg" alt="not found" />
          </a>
          <a href="#">
            <img src="assets/images/gallery/6.jpg" alt="not found" />
          </a>
        </div>
        <div className="offcanvus-newsletter">
          <h4 className="mb-4 text-center">Newsletter</h4>
          <form action="#">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="theme-input"
            />
            <button
              type="submit"
              className="template-btn primary-btn mt-3 w-100"
            >
              <span>SUBSCRIBE NOW</span>
            </button>
          </form>
        </div>
        <div className="offcanvus-bottom d-flex align-items-center justify-content-between">
          <div className="language-switcher">
            <div className="dropdown">
              <button type="button" data-bs-toggle="dropdown">
                <img src="assets/images/icons/flag-usa.png" alt="flag" />
                English{" "}
                <span>
                  <i className="fas fa-angle-down" />
                </span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <img src="assets/images/icons/flag-bd.jpg" alt="flag" />
                    Bangla
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/icons/flag-india.jpg" alt="flag" />
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="currency-switcher">
            <select>
              <option>USD</option>
              <option>BDT</option>
              <option>CNY</option>
            </select>
          </div>
          <div className="user-links">
            <Link to="/login">
              <span className="me-2">
                <i className="fa-regular fa-user" />
              </span>
              Account
            </Link>
          </div>
        </div>
      </div>
      {/*offcanvus end*/}
      {/*mobile menu start*/}
      <div className="mobile-menu" id="MobileSidebar">
        <a href="#" className="close" onClick={Closeoffcanvus}>
          <i className="fas fa-xmark" />
        </a>
        <ul className="mobile-nav-menu">
          <li className="has-submenu">
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <MobileCategory />

          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <form
          className="mobile-search d-flex align-items-center mt-5"
          action="#"
        >
          <input type="text" placeholder="Search..." className="theme-input" />
          <button type="submit" className="template-btn primary-btn">
            <span>Go</span>
          </button>
        </form>
      </div>
      {/*mobile menu end*/}
      {/*search form start*/}
      <div className="ur-search-form">
        <a href="#" className="close">
          <i className="fas fa-xmark" />
        </a>
        <form action="#" className="d-flex align-items-center">
          <input type="text" placeholder="Search...." className="theme-input" />
          <button type="submit" className="submit-btn">
            Go
          </button>
        </form>
      </div>
      {/*search form end*/}
      {/*cart drawer start*/}
      <div className="cart-drawer position-fixed">
        <div className="drawer-close d-flex align-items-center justify-content-between position-absolute start-0 top-0 w-100 px-4 py-4 border-bottom">
          <h6 className="mb-0">Shopping Cart</h6>
          <a href="!#" className="drawer-close">
            <i className="fas fa-xmark" />
          </a>
        </div>
        <div className="drawer-bottom border-top">
          <div className="d-flex align-items-center justify-content-between mt-4">
            <h6 className="mb-0">Total:</h6>
            <span className="fw-medium secondary-text-color">$750.00</span>
          </div>
          <Link
            to="/cart"
            className="template-btn primary-btn text-uppercase fw-medium w-100 text-center mt-4"
          >
            <span>View Cart &amp; Check Out</span>
          </Link>
        </div>
      </div>
      {/*cart drawer end*/}
    </>
  );
}
export default Header;
