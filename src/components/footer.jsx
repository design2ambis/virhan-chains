import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(
          "https://utsarvajewels.com/api/crud?getRandomFiveCategory"
        );
        const categoryData = await categoryResponse.json();

        setdata(categoryData);
        //   setSubCategories(categoryData.data.subcat);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {/*footer section start*/}
      <footer className="footer-style-3 primary-bg-color-dark pt-120 pb-3 pb-xl-0">
        <div className="container-large">
          <div className="row">
            <div className="col-12">
              <div className="row g-4">
                <div className="col-lg-3 col-sm-12">
                  <div className="ur3-footer-widget">
                    <span className="text-white fw-medium fs-sm d-block mt-40">
                      Quick Contact
                    </span>
                    <a href="tel:+91 91500 16195">
                      <h3 className="text-white fw-normal mt-1">
                        +91 91500 16195
                      </h3>
                    </a>
                    <div className="ur3-footer-social mt-32">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                {data.map((d, index) => (
                  <div className="col-lg-3 col-sm-12" key={index}>
                    <div className="row">
                      <div className="col-6">
                        <div className="ur3-footer-widget">
                          <h4 className="text-white widget-title mb-40 fw-normal">
                            {d.catName}
                          </h4>
                          <ul className="ur3-footer-links">
                            {d.subcat.map((s, indexs) => (
                              < li key={indexs}>
                                <Link to={`shop/${s.CatName}/${s.SubCatName}/1/0/0/0/0`}>{s.SubCatName}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ur3-footer-copyright">
                <div className="row align-items-center g-3">
                  <div className="col-md-6">
                    <p className="mb-0 text-white">
                      © 2022 Virhan Jewels Powered by{" "}
                      <a href="http://nivsjewels.com" target="_blank">
                        Nivsjewels
                      </a>
                      . All Rights Reserved
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="text-md-end">
                      <img
                        src="assets/images/icons/cards.png"
                        alt="cards"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*footer section end*/}
      {/*scroll top button start*/}
      <button type="button" className="scroll-top-btn">
        <i className="fa-solid fa-hand-pointer" />
      </button>
      {/*scroll top button end*/}
      {/*product modal start*/}
      <div className="modal fade" id="product_quickview">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-image bg-light">
                  <img
                    src="assets/images/products/product-lg-1.png"
                    alt="not found"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="single-product-info">
                  <a
                    href="#!"
                    className="category-btn text-uppercase fs-sm secondary-text-color d-inline-block mb-3"
                  >
                    Neaklace
                  </a>
                  <h3 className="mb-4">Tony Gold Neaklace</h3>
                  <div className="item-reivew d-flex align-items-center gap-3">
                    <ul className="rating-star d-flex align-items-center gap-1 fs-sm">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <span className="primary-text-color fw-light">
                      (1 Customer review)
                    </span>
                  </div>
                  <div className="pricing mt-4">
                    <span className="primary-text-color">$260.00</span>
                    <span className="pricing-devider primary-text-color">
                      -
                    </span>
                    <span className="primary-text-color">$360.00</span>
                  </div>
                  <div className="short-description mt-40">
                    <p className="mb-0 fw-light">
                      Eget taciti odio cum habitant egestas conubia turpis
                      phasellus, ante parturient donec duis primis nam faucibus
                      augue malesuada venenatis
                    </p>
                  </div>
                  <ul className="single-product-features mt-40">
                    <li>
                      <span className="me-2">
                        <svg
                          width={16}
                          height={18}
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 6H14.2812L11.125 9.15625C10.9375 9.34375 10.9375 9.6875 11.125 9.875C11.3125 10.0625 11.6562 10.0625 11.8438 9.875L15.8438 5.875C15.9375 5.78125 16 5.65625 16 5.5C16 5.375 15.9375 5.25 15.8438 5.15625L11.8438 1.15625C11.6562 0.96875 11.3125 0.96875 11.125 1.15625C10.9375 1.34375 10.9375 1.6875 11.125 1.875L14.2812 5H0.5C0.21875 5 0 5.25 0 5.5C0 5.78125 0.21875 6 0.5 6ZM15.5 12H1.6875L4.84375 8.875C5.03125 8.6875 5.03125 8.34375 4.84375 8.15625C4.65625 7.96875 4.3125 7.96875 4.125 8.15625L0.125 12.1562C0.03125 12.25 0 12.375 0 12.5C0 12.6562 0.03125 12.7812 0.125 12.875L4.125 16.875C4.3125 17.0625 4.65625 17.0625 4.84375 16.875C5.03125 16.6875 5.03125 16.3438 4.84375 16.1562L1.6875 13H15.5C15.75 13 16 12.7812 16 12.5C16 12.25 15.75 12 15.5 12Z"
                            fill="#121111"
                          />
                        </svg>
                      </span>
                      Free returns
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 13C0.875 13 0 12.125 0 11V2C0 0.90625 0.875 0 2 0H11C12.0938 0 13 0.90625 13 2V3H15.0312C15.4688 3 15.875 3.21875 16.1562 3.53125L18.625 6.40625C18.8438 6.6875 19 7.03125 19 7.375V12H19.5C19.75 12 20 12.25 20 12.5C20 12.7812 19.75 13 19.5 13H18C18 14.6562 16.6562 16 15 16C13.3125 16 12 14.6562 12 13H7.96875C7.96875 14.6562 6.65625 16 4.96875 16C3.3125 16 1.96875 14.6562 1.96875 13H2ZM1 2V11C1 11.5625 1.4375 12 2 12H2.15625C2.5625 10.8438 3.6875 10 5 10C6.28125 10 7.40625 10.8438 7.8125 12H12V2C12 1.46875 11.5312 1 11 1H2C1.4375 1 1 1.46875 1 2ZM17.8125 7L15.4062 4.1875C15.3125 4.0625 15.1562 4 15.0312 4H13V7H17.8125ZM13 8V10.7812C13.5 10.3125 14.2188 10 15 10C16.2812 10 17.4062 10.8438 17.8125 12H18V8H13ZM5 11C3.875 11 3 11.9062 3 13C3 14.125 3.875 15 5 15C6.09375 15 7 14.125 7 13C7 11.9062 6.09375 11 5 11ZM15 15C16.0938 15 17 14.125 17 13C17 11.9062 16.0938 11 15 11C13.875 11 13 11.9062 13 13C13 14.125 13.875 15 15 15Z"
                            fill="#121111"
                          />
                        </svg>
                      </span>
                      Free shipping via DHL, fully insured
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.34375 10.375C7.15625 10.5625 6.8125 10.5625 6.625 10.375L4.625 8.375C4.4375 8.1875 4.4375 7.84375 4.625 7.65625C4.8125 7.46875 5.15625 7.46875 5.34375 7.65625L7 9.3125L10.625 5.65625C10.8125 5.46875 11.1562 5.46875 11.3438 5.65625C11.5312 5.84375 11.5312 6.1875 11.3438 6.375L7.34375 10.375ZM16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8ZM8 1C4.125 1 1 4.15625 1 8C1 11.875 4.125 15 8 15C11.8438 15 15 11.875 15 8C15 4.15625 11.8438 1 8 1Z"
                            fill="#121111"
                          />
                        </svg>
                      </span>
                      All taxes and customer duties included
                    </li>
                  </ul>
                  <div className="d-flex align-items-center mt-40 gap-3 flex-wrap">
                    <div className="quantity-box">
                      <button type="button" className="drecrement">
                        <i className="fa-solid fa-minus" />
                      </button>
                      <input type="text" defaultValue={1} />
                      <button type="button" className="drecrement">
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                    <button type="button" className="add_to_cart_btn">
                      Add to Cart
                      <span className="ms-2">
                        <i className="fa-solid fa-basket-shopping" />
                      </span>
                    </button>
                    <button type="button" className="wish_btn">
                      <span className="me-2">
                        <i className="fa-regular fa-heart" />
                      </span>
                      Add to Wishlist
                    </button>
                  </div>
                  <ul className="product-meta mt-32">
                    <li>SKU:17</li>
                    <li>Categories: Light Bulb, Table</li>
                    <li>Tags: Iluminate, Textured</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*product modal end*/}
    </>
  );
}

export default Footer;
