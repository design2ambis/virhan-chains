import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
const Index = () => {
  const [isLoaded, setLoad] = useState(true);
  const [ran, setrandomData] = useState([]);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawdata = await fetch(
          `https://utsarvajewels.com/api/crud?get_random_eight`
        );
        const jsondata = await rawdata.json();

        if (jsondata) {
          setrandomData(jsondata.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoaded) {
    return <Loader />;
  }
  return (
    <>
      <section className="ptb-120 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center mb-60">
                <h2
                  className="h1 fw-normal mb-4 wow fadeInUp"
                  data-wow-duration="0.5s"
                >
                  Shop By Category
                </h2>
                <p
                  className="mb-0 fw-light wow wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.5s"
                >
                  Our fashion jewellery is inspired by minimalism, focused on
                  minimal simplicity, perfect for everyday wear and cherished
                  for years.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 text-center ">
              <img
                src="assets/images/products/earrings.jpg"
                alt="earrings"
                className="img-fluid"
              />
              <a href="#!" className="text-center text-dark mt-3">
                <span>Earrings</span>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center ">
              <img
                src="assets/images/products/neaklaces.jpg"
                alt="neaklaces"
                className="img-fluid"
              />
              <a href="#!" className="text-center text-dark mt-3">
                <span>Neaklaces</span>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center ">
              <img
                src="assets/images/products/rings.jpg"
                alt="rings"
                className="img-fluid"
              />
              <a href="#" className="text-center text-dark mt-3">
                <span>Rings</span>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center ">
              <img
                src="assets/images/products/bracelets.jpg"
                alt="bracelets"
                className="img-fluid"
              />
              <a href="#!" className="text-center text-dark mt-3">
                <span>Bracelets</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*category section end*/}
      {/*newsticker area start*/}
      <div className="ur-ticker-area overflow-hidden">
        <div className="ur-ticker-wrapper primary-bg-color">
          <div className="ur-ticker">
            <span className="text-white text-uppercase">
              Get 20% Discount on your first product
            </span>
            <span className="text-white text-uppercase">
              DISCOVER LATEST COLLECTIONS AND TOP DESIGNERS{" "}
            </span>
            <span className="text-white text-uppercase">
              10% DISCOUNT FOR REGISTERED USERS
            </span>
            <span className="text-white text-uppercase">
              Get 20% Discount on your first product
            </span>
            <span className="text-white text-uppercase">
              DISCOVER LATEST COLLECTIONS AND TOP DESIGNERS
            </span>
            <span className="text-white text-uppercase">
              10% DISCOUNT FOR REGISTERED USERS
            </span>
          </div>
        </div>
      </div>
      {/*newsticker area end*/}
      {/*call to action start*/}
      <section className="ur-cta-section position-relative z-1 ptb-120 overflow-hidden bg-white">
        <span className="bg-shape position-absolute z--1 light-bg" />
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-xl-5 col-lg-5">
              <div className="feature-image-wrapper">
                <div className="cta-image position-relative">
                  <img
                    src="assets/images/products/rings.jpg"
                    alt="rings"
                    className="img-fluid feature-image wow fadeInUp"
                    data-wow-duration="0.5s"
                  />
                  <img
                    src="assets/images/shapes/shape-1.jpg"
                    alt="shape"
                    className="position-absolute shape-image d-none d-xl-block wow fadeInUp"
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7 ps-xl-5">
              <div className="ps-2 ur-cta-content">
                <h2
                  className="display-3 mb-32 fw-normal wow fadeInUp"
                  data-wow-duration="0.5s"
                >
                  Antique
                  <br />
                  Diamond Necklaces
                </h2>
                <h6
                  className="mb-50 fw-light text-color wow fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="0.5s"
                >
                  Vestibulam ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus deserunt autem vel modi ab doloribus sit omnis iusto
                  quo voluptas earum reiciendis molestias quam, dolorem
                  laudantium molestiae
                </h6>
                <a
                  href="#"
                  className="template-btn primary-btn wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.5s"
                >
                  <span>Discover More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*call to action end*/}
      {/*featured products start*/}
      <section className="pb-120 bg-white">
        <div className="container pb-5 pb-sm-0">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-title">
                <h2 className="h1 fw-normal mb-50">Our Limited Edition</h2>
              </div>
            </div>
          </div>
          <div className="row feature-product-slider slider-spacing">
            {ran.map((r, index) => (
              <div className="ur-product-card col-md-3 col-sm-12" key={index}>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <Link to={`/product/${r.design_no}`}>
                    <img
                      src={r.design_image}
                      alt={r.design_no}
                      className="img-fluid"
                    />
                  </Link>
                  {/* <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="#!">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="#!">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div> */}
                </div>
                <div className="mt-4 text-center">
                  <Link to={`/product/${r.design_no}`}>
                    <h6 className="my-2 fw-medium product-title">
                      {r.design_no}
                    </h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*featured products end */}
      {/*deal section start*/}
      <section className="primary-bg-color position-relative z-1 overflow-hidden deal-section">
        <span className="dark-overlay d-none d-xxl-block" />
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-3">
              <div>
                <h2 className="display-3 mb-5 text-white">
                  Deal <br className="d-none d-xxl-block" />
                  Of The Day
                </h2>
                <ul className="nav nav-tabs ur-tab-control border-0">
                  <li>
                    <a
                      href="#bracelets"
                      className="active"
                      data-bs-toggle="tab"
                    >
                      01. Bracelets
                    </a>
                  </li>
                  <li>
                    <a href="#neaklaces" data-bs-toggle="tab">
                      02. Neaklaces
                    </a>
                  </li>
                  <li>
                    <a href="#earrings" data-bs-toggle="tab">
                      03. Earrings
                    </a>
                  </li>
                  <li>
                    <a href="#rings" data-bs-toggle="tab">
                      04. Rings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="bracelets">
                  <div className="row align-items-center g-4">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="banner-image ps-xl-5 mt-5 mt-xl-0">
                        <img
                          src="assets/images/products/chain-lg.jpg"
                          alt="chain"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 ps-md-4">
                      <div className="ur-product-card position-relative bg-white">
                        <span className="ur-badge sale-badge position-absolute">
                          SALE
                        </span>
                        <div className="feature-image d-flex align-items-cneter justify-content-center">
                          <a href="#!">
                            <img
                              src="assets/images/products/product-6.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="#!"
                            className="secondary-text-color text-uppercase"
                          >
                            Necklaces
                          </a>
                          <a href="#!">
                            <h5 className="my-2 fw-medium product-title">
                              Hitmor 24k Neaklaces
                            </h5>
                          </a>
                          <span className="primary-text-color fs-sm fw-medium">
                            $250.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="neaklaces">
                  <div className="row align-items-center g-4">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="banner-image ps-xl-5 mt-5 mt-xl-0">
                        <img
                          src="assets/images/products/neaklace-lg.jpg"
                          alt="chain"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 ps-md-4">
                      <div className="ur-product-card position-relative bg-white">
                        <span className="ur-badge sale-badge position-absolute">
                          SALE
                        </span>
                        <div className="feature-image d-flex align-items-cneter justify-content-center">
                          <a href="#!">
                            <img
                              src="assets/images/products/product-4.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="#!"
                            className="secondary-text-color text-uppercase"
                          >
                            Bracelates
                          </a>
                          <a href="#!">
                            <h5 className="my-2 fw-medium product-title">
                              Green Diamond Earring
                            </h5>
                          </a>
                          <span className="primary-text-color fs-sm fw-medium">
                            $250.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="earrings">
                  <div className="row align-items-center g-4">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="banner-image ps-xl-5 mt-5 mt-xl-0">
                        <img
                          src="assets/images/products/ring-lg.jpg"
                          alt="chain"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 ps-md-4">
                      <div className="ur-product-card position-relative bg-white">
                        <span className="ur-badge sale-badge position-absolute">
                          SALE
                        </span>
                        <div className="feature-image d-flex align-items-cneter justify-content-center">
                          <a href="#!">
                            <img
                              src="assets/images/products/product-3.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="#!"
                            className="secondary-text-color text-uppercase"
                          >
                            Earrings
                          </a>
                          <a href="#!">
                            <h5 className="my-2 fw-medium product-title">
                              Blue Cool Earring
                            </h5>
                          </a>
                          <span className="primary-text-color fs-sm fw-medium">
                            $250.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="rings">
                  <div className="row align-items-center g-4">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="banner-image ps-xl-5 mt-5 mt-xl-0">
                        <img
                          src="assets/images/products/ring-lg-2.jpg"
                          alt="chain"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 ps-md-4">
                      <div className="ur-product-card position-relative bg-white">
                        <span className="ur-badge sale-badge position-absolute">
                          SALE
                        </span>
                        <div className="feature-image d-flex align-items-cneter justify-content-center">
                          <a href="#!">
                            <img
                              src="assets/images/products/product-2.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="#!"
                            className="secondary-text-color text-uppercase"
                          >
                            Rings
                          </a>
                          <a href="#!">
                            <h5 className="my-2 fw-medium product-title">
                              Amazing Gold Plated
                            </h5>
                          </a>
                          <span className="primary-text-color fs-sm fw-medium">
                            $250.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*deal section end*/}
      {/*latest arrival start*/}
      <section className="ur-latest-arrival ptb-120 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center">
                <h2 className="h1 mb-50">Browse Latest Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <span className="">50%</span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-7.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Necklaces
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Hitmor 24k Neaklaces
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $250.00
                  </span>
                  <del className="ms-3 fw-light text-color">$350</del>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#">
                    <img
                      src="assets/images/products/product-6.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Gold
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Amazing Gold Plated
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $200.00
                  </span>
                  <del className="ms-3 fw-light text-color">$300</del>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <span className="">50%</span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#">
                    <img
                      src="assets/images/products/product-4.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Rings
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Hoten Diamond Ring
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $150.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-3.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Earrings
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Green Ball Earrings
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $550.00
                  </span>
                  <del className="ms-3 fw-light text-color">$650</del>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-2.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Gold
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Witen Gold Earring
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-1.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Diamond
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Blue Diamond Rings
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $50.00
                  </span>
                  <del className="ms-3 fw-light text-color">$75</del>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-7.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Rings
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Hitmor 24k Neaklaces
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $250.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ur-product-card position-relative card-sm-small">
                <span className="">50%</span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="#!">
                    <img
                      src="assets/images/products/product-6.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="#!">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="#!">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#!" className="secondary-text-color text-uppercase">
                    Earrings
                  </a>
                  <a href="#!">
                    <h5 className="my-2 fw-medium product-title">
                      Witen Gold Earring
                    </h5>
                  </a>
                  <span className="primary-text-color fs-sm fw-medium">
                    $256.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-60">
            <a href="#!" className="template-btn primary-btn">
              <span>View All</span>
            </a>
          </div>
        </div>
      </section>
      {/*latest arrival end*/}

      <span className="theme-devider" />
    </>
  );
};

export default Index;
