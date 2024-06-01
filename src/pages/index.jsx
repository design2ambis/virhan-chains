import React from "react";

const Index = () => {
  return (
    <>
      {/*hero section start*/}
      <section
        className="ur-hero-section position-relative z-1 overflow-hidden"
        data-background="assets/images/bg/hero-bg.jpg"
      >
        <span className="circle-white position-absolute z--1 rounded-circle" />
        <img
          src="assets/images/shapes/circle-1.png"
          alt="circle"
          className="position-absolute end-0 bottom-0 z--1 circle-color"
        />
        <div className="container">
          <div className="ur-hero-slider slider-spacing">
            <div className="ur-hero-single-slide">
              <div className="row align-items-center">
                <div className="col-xxl-5 col-xl-6">
                  <div className="hero-left-content">
                    <h5 className="hero-subtitle fw-normal mb-40">
                      design by Andrew Holi
                    </h5>
                    <h1 className="hero-title mb-50">Hand Crafted Jewelry</h1>
                    <a href="#" className="template-btn primary-btn">
                      <span>Explore Now</span>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-6">
                  <div className="hero-right mt-5 mt-xl-0">
                    <img
                      src="assets/images/home1/hero-girl-1.png"
                      alt="girl"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ur-hero-single-slide">
              <div className="row align-items-center">
                <div className="col-xxl-5 col-xl-6">
                  <div className="hero-left-content">
                    <h5 className="hero-subtitle fw-normal mb-40">
                      design by Andrew Holi
                    </h5>
                    <h1 className="hero-title mb-50">Fory Ring In Diamond</h1>
                    <a href="#" className="template-btn primary-btn">
                      <span>Explore Now</span>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-6">
                  <div className="hero-right mt-5 mt-xl-0">
                    <img
                      src="assets/images/home1/hero-girl-2.png"
                      alt="girl"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ur-hero-feature-card d-flex align-items-center bg-white">
          <div className="item-thumb">
            <a href="#">
              <img
                src="assets/images/products/ring-sm.png"
                alt="product"
                className="img-fluid"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <h5 className="mb-4 fw-normal">
                Deltanor Fory Ring in 24k Diamond
              </h5>
            </a>
            <div className="d-flex align-items-center product-meta gap-4">
              <a href="#" className="wish-btn">
                <i className="fa-regular fa-heart" />
              </a>
              <a href="#" className="card-btn">
                <i className="fa-solid fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*hero section end*/}
      {/*category section start*/}
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
          <div className="ur-category-slider slider-spacing">
            <div className="position-relative pp-overlay-card overflow-hidden">
              <img
                src="assets/images/products/earrings.jpg"
                alt="earrings"
                className="img-fluid"
              />
              <span className="category-title position-absolute">Earrings</span>
              <a href="shop-list.html" className="pp-overlay position-absolute">
                <span>Earrings</span>
              </a>
            </div>
            <div className="position-relative pp-overlay-card overflow-hidden">
              <img
                src="assets/images/products/neaklaces.jpg"
                alt="neaklaces"
                className="img-fluid"
              />
              <span className="category-title position-absolute">
                Neaklaces
              </span>
              <a href="shop-list.html" className="pp-overlay position-absolute">
                <span>Neaklaces</span>
              </a>
            </div>
            <div className="position-relative pp-overlay-card overflow-hidden">
              <img
                src="assets/images/products/rings.jpg"
                alt="rings"
                className="img-fluid"
              />
              <span className="category-title position-absolute">Rings</span>
              <a href="#" className="pp-overlay position-absolute">
                <span>Rings</span>
              </a>
            </div>
            <div className="position-relative pp-overlay-card overflow-hidden">
              <img
                src="assets/images/products/bracelets.jpg"
                alt="bracelets"
                className="img-fluid"
              />
              <span className="category-title position-absolute">
                Bracelets
              </span>
              <a href="shop-list.html" className="pp-overlay position-absolute">
                <span>Bracelets</span>
              </a>
            </div>
            <div className="position-relative pp-overlay-card overflow-hidden">
              <img
                src="assets/images/products/rings.jpg"
                alt="rings"
                className="img-fluid"
              />
              <span className="category-title position-absolute">Rings</span>
              <a href="shop-list.html" className="pp-overlay position-absolute">
                <span>Rings</span>
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
          <div className="feature-product-slider slider-spacing">
            <div className="ur-product-card position-relative">
              <span className="position-absolute ur-badge coupon-badge">
                -50%
              </span>
              <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                <a href="product-details.html">
                  <img
                    src="assets/images/products/product-1.png"
                    alt="rings"
                    className="img-fluid"
                  />
                </a>
                <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="shop-list.html"
                  className="secondary-text-color text-uppercase"
                >
                  Necklaces
                </a>
                <a href="product-details.html">
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
            <div className="ur-product-card position-relative">
              <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                <a href="product-details.html">
                  <img
                    src="assets/images/products/product-2.png"
                    alt="rings"
                    className="img-fluid"
                  />
                </a>
                <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="shop-list.html"
                  className="secondary-text-color text-uppercase"
                >
                  Bracelates
                </a>
                <a href="product-details.html">
                  <h5 className="my-2 fw-medium product-title">
                    Amazing Gold Plated
                  </h5>
                </a>
                <span className="primary-text-color fs-sm fw-medium">
                  $180.00
                </span>
              </div>
            </div>
            <div className="ur-product-card position-relative">
              <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                <a href="product-details.html">
                  <img
                    src="assets/images/products/product-3.png"
                    alt="rings"
                    className="img-fluid"
                  />
                </a>
                <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="shop-list.html"
                  className="secondary-text-color text-uppercase"
                >
                  Rings
                </a>
                <a href="product-details.html">
                  <h5 className="my-2 fw-medium product-title">
                    Deko Diamond Ring
                  </h5>
                </a>
                <span className="primary-text-color fs-sm fw-medium">
                  $220.00
                </span>
              </div>
            </div>
            <div className="ur-product-card position-relative">
              <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                <a href="product-details.html">
                  <img
                    src="assets/images/products/product-4.png"
                    alt="rings"
                    className="img-fluid"
                  />
                </a>
                <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="shop-list.html"
                  className="secondary-text-color text-uppercase"
                >
                  Diamond
                </a>
                <a href="product-details.html">
                  <h5 className="my-2 fw-medium product-title">
                    Green Diamond Earring
                  </h5>
                </a>
                <span className="primary-text-color fs-sm fw-medium">
                  $210.00
                </span>
                <del className="ms-3 fw-light text-color">$350</del>
              </div>
            </div>
            <div className="ur-product-card position-relative">
              <span className="position-absolute ur-badge sale-badge">
                SALE
              </span>
              <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                <a href="product-details.html">
                  <img
                    src="assets/images/products/product-6.png"
                    alt="rings"
                    className="img-fluid"
                  />
                </a>
                <div className="product-overlay position-absolute">
                  <div className="product-btns d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)">
                      <i className="fa-regular fa-heart" />
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-basket-shopping" />
                    </a>
                    <a href="#product_quickview" data-bs-toggle="modal">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="shop-list.html"
                  className="secondary-text-color text-uppercase"
                >
                  Earrings
                </a>
                <a href="product-details.html">
                  <h5 className="my-2 fw-medium product-title">
                    Blue Cool Earring
                  </h5>
                </a>
                <span className="primary-text-color fs-sm fw-medium">
                  $150.00
                </span>
              </div>
            </div>
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
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/product-6.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="shop-list.html"
                            className="secondary-text-color text-uppercase"
                          >
                            Necklaces
                          </a>
                          <a href="product-details.html">
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
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/product-4.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="shop-list.html"
                            className="secondary-text-color text-uppercase"
                          >
                            Bracelates
                          </a>
                          <a href="product-details.html">
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
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/product-3.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="shop-list.html"
                            className="secondary-text-color text-uppercase"
                          >
                            Earrings
                          </a>
                          <a href="product-details.html">
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
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/product-2.png"
                              alt="rings"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="text-center pb-40">
                          <a
                            href="shop-list.html"
                            className="secondary-text-color text-uppercase"
                          >
                            Rings
                          </a>
                          <a href="product-details.html">
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
                <span className="position-absolute ur-badge coupon-badge">
                  50%
                </span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-7.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Necklaces
                  </a>
                  <a href="product-details.html">
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
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Gold
                  </a>
                  <a href="product-details.html">
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
                <span className="position-absolute ur-badge coupon-badge">
                  50%
                </span>
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
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Rings
                  </a>
                  <a href="product-details.html">
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
                <span className="position-absolute ur-badge sale-badge">
                  SALE
                </span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-3.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Earrings
                  </a>
                  <a href="product-details.html">
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
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-2.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Gold
                  </a>
                  <a href="product-details.html">
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
                <span className="position-absolute ur-badge sale-badge">
                  SALE
                </span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-1.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Diamond
                  </a>
                  <a href="product-details.html">
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
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-7.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Rings
                  </a>
                  <a href="product-details.html">
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
                <span className="position-absolute ur-badge coupon-badge">
                  50%
                </span>
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <a href="product-details.html">
                    <img
                      src="assets/images/products/product-6.png"
                      alt="rings"
                      className="img-fluid"
                    />
                  </a>
                  <div className="product-overlay position-absolute">
                    <div className="product-btns d-flex align-items-center justify-content-between">
                      <a href="javascript:void(0)">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-basket-shopping" />
                      </a>
                      <a href="#product_quickview" data-bs-toggle="modal">
                        <i className="fa-regular fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="shop-list.html"
                    className="secondary-text-color text-uppercase"
                  >
                    Earrings
                  </a>
                  <a href="product-details.html">
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
            <a href="shop-list.html" className="template-btn primary-btn">
              <span>View All</span>
            </a>
          </div>
        </div>
      </section>
      {/*latest arrival end*/}
      {/*feedback section start*/}
      <section
        className="ptb-120 feedback-section overflow-hidden position-relative z-1"
        data-background="assets/images/banner/bg-overlay.jpg"
      >
        <img
          src="assets/images/shapes/neaklace-2.png"
          alt="neaklace"
          className="position-absolute start-0 top-0 z--1 neaklace-shape"
        />
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
              <div className="section-content">
                <span className="fw-light fs-sm text-white">YOUR WORDS</span>
                <h2 className="h1 mt-4 mb-5 text-white">
                  Our Customer Testimonial
                </h2>
                <div className="ur-feedback-slider slider-spacing">
                  <div className="ur-feedback-single">
                    <p className="fw-light mb-4">
                      “Globally recaptiualize world channels and virtual niche
                      markets enhance premium initiatives enabled technology
                      extend powered whereas sticky services reconceptualize
                      optimal”
                    </p>
                    <h3 className="text-white mb-0">Antor Walid</h3>
                    <span className="fs-sm fw-light text-white">DESIGNER</span>
                  </div>
                  <div className="ur-feedback-single">
                    <p className="fw-light mb-4">
                      “Globally recaptiualize world channels and virtual niche
                      markets enhance premium initiatives enabled technology
                      extend powered whereas sticky services reconceptualize
                      optimal”
                    </p>
                    <h3 className="text-white mb-0">Jacyka Jacy</h3>
                    <span className="fs-sm fw-light text-white">Developer</span>
                  </div>
                  <div className="ur-feedback-single">
                    <p className="fw-light mb-4">
                      “Globally recaptiualize world channels and virtual niche
                      markets enhance premium initiatives enabled technology
                      extend powered whereas sticky services reconceptualize
                      optimal”
                    </p>
                    <h3 className="text-white mb-0">Devid Lyes</h3>
                    <span className="fs-sm fw-light text-white">Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
              <div className="feedback-clients-thumbail-slider slider-spacing">
                <div className="single-item">
                  <img
                    src="assets/images/clients/client-lg-1.jpg"
                    alt="not found"
                    className="img-fluid"
                  />
                </div>
                <div className="single-item">
                  <img
                    src="assets/images/clients/client-lg-2.jpg"
                    alt="not found"
                    className="img-fluid"
                  />
                </div>
                <div className="single-item">
                  <img
                    src="assets/images/clients/client-lg-3.jpg"
                    alt="not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*feedback section end*/}
      {/*instagram section start*/}
      <section className="instagram-section pt-120 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center">
                <h2 className="h1 fw-normal">Instagram Memory</h2>
              </div>
            </div>
          </div>
          <div className="instagram-slider mt-5">
            <div className="instagram-slide-single position-relative">
              <img
                src="assets/images/gallery/gallery-1.jpg"
                alt="gallery"
                className="img-fluid"
              />
              <a
                href="assets/images/gallery/gallery-1.jpg"
                className="item-overlay"
                data-fancybox="gallery"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="instagram-slide-single position-relative">
              <img
                src="assets/images/gallery/gallery-2.jpg"
                alt="gallery"
                className="img-fluid"
              />
              <a
                href="assets/images/gallery/gallery-2.jpg"
                className="item-overlay"
                data-fancybox="gallery"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="instagram-slide-single position-relative">
              <img
                src="assets/images/gallery/gallery-3.jpg"
                alt="gallery"
                className="img-fluid"
              />
              <a
                href="assets/images/gallery/gallery-3.jpg"
                className="item-overlay"
                data-fancybox="gallery"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="instagram-slide-single position-relative">
              <img
                src="assets/images/gallery/gallery-4.jpg"
                alt="gallery"
                className="img-fluid"
              />
              <a
                href="assets/images/gallery/gallery-4.jpg"
                className="item-overlay"
                data-fancybox="gallery"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*instagram section end*/}
      {/*brand slider start*/}
      <div className="brand-section ptb-120 bg-white">
        <div className="container">
          <div className="ur-brand-slider slider-spacing">
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-1.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-2.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-3.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-4.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-5.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="ur-brand-single text-center">
              <a href="#">
                <img
                  src="assets/images/brands/brand-5.png"
                  alt="brand"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*brand slider end*/}
      {/*devider*/}
      <span className="theme-devider" />
      {/*blog section start*/}
      <section className="ptb-120 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center">
                <h2 className="h1 fw-normal mb-4">From Our Blog</h2>
                <p className="mb-60 fw-light">
                  Our fashion jewellery is inspired by minimalism, focused on
                  minimal simplicity, perfect for everyday wear and cherished
                  for years.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <article className="ur-blog-card position-relative">
                <span className="date py-2 px-4 fs-sm text-white primary-bg-color position-absolute z-1 start-0 top-0">
                  22 SEP, 2022
                </span>
                <div className="feature-image overflow-hidden">
                  <a href="#">
                    <img
                      src="assets/images/blog/blog-1.jpg"
                      alt="feature image"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-content mt-32">
                  <span className="fs-sm fw-light">JEWELRY COLLECTIONS</span>
                  <a href="#">
                    <h4 className="fw-normal my-3">
                      Working Hours Everyday Same Happy Days
                    </h4>
                  </a>
                  <p className="mb-4 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  </p>
                  <a href="#" className="explore-btn">
                    Read More
                  </a>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="ur-blog-card position-relative">
                <span className="date py-2 px-4 fs-sm text-white primary-bg-color position-absolute z-1 start-0 top-0">
                  21 SEP, 2022
                </span>
                <div className="feature-image overflow-hidden">
                  <a href="#">
                    <img
                      src="assets/images/blog/blog-2.jpg"
                      alt="feature image"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-content mt-32">
                  <span className="fs-sm fw-light">BRACELATES COLLECTIONS</span>
                  <a href="#">
                    <h4 className="fw-normal my-3">
                      How to protect your jewelry in the summer?
                    </h4>
                  </a>
                  <p className="mb-4 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  </p>
                  <a href="#" className="explore-btn">
                    Read More
                  </a>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="ur-blog-card position-relative">
                <span className="date py-2 px-4 fs-sm text-white primary-bg-color position-absolute z-1 start-0 top-0">
                  18 SEP, 2022
                </span>
                <div className="feature-image overflow-hidden">
                  <a href="#">
                    <img
                      src="assets/images/blog/blog-3.jpg"
                      alt="feature image"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-content mt-32">
                  <span className="fs-sm fw-light">GOLD COLLECTIONS</span>
                  <a href="#">
                    <h4 className="fw-normal my-3">
                      27 Chunky Gold Rings That Will Elevate Any Outfit
                    </h4>
                  </a>
                  <p className="mb-4 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  </p>
                  <a href="#" className="explore-btn">
                    Read More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/*blog section end*/}
      {/*newsletter section start*/}
      <section className="newsletter-section light-bg ptb-120 position-relative z-1">
        <img
          src="assets/images/shapes/neaklace.png"
          alt="neaklace"
          className="position-absolute end-0 top-0 z--1 d-none d-xxl-block"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="newsletter-box text-center">
                <span className="fs-sm fw-light secondary-text-color">
                  GET OUR NEWSLETTER
                </span>
                <h2 className="fw-normal mt-4 mb-50">
                  Get News &amp; Update to Your Inbox
                </h2>
                <form className="newsletter-form d-flex align-items-center">
                  <input type="email" placeholder=" Email address..." />
                  <button type="submit" className="template-btn primary-btn">
                    <span>Subscribe</span>
                  </button>
                </form>
                <p className="mb-0 mt-32 fw-light">
                  Will be used accordance with our{" "}
                  <a
                    href="#"
                    className="text-decoration-underline primary-text-color hover-secondary"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*newsletter section end*/}
    </>
  );
};

export default Index;
