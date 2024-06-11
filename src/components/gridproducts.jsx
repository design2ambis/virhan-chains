import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gridproducts = (props) => {
  // const { cat, subcat, page } = useParams();

  // let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isCount, setCount] = useState(true);
  const [pages, setPage] = useState([]);
  const [isLoaded, setLoad] = useState(true);
  const [innerLoad, setInnerLoad] = useState(true);
  const [weight, setWeight] = useState([]);
  const [collection, setCollection] = useState([]);
  const [manu, setManu] = useState([]);

  document.title = `Virhan Jewels - ${props.cat
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")} | ${props.subcat
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`;

  useEffect(() => {
    setLoad(true);
    setInnerLoad(true);
    const fetchData = async () => {
      try {
        const proRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&&subcat=${props.subcat}&&page=${props.page}&&wgt=${props.weight}&&type=${props.type}&&collection=${props.collection}&&manu=${props.manu}`
        );
        const proData = await proRes.json();

        if (proData.status.status == 200) {
          setCount(true);
          setProducts(proData.data);
          setPage(proData.status.page);
          setWeight(proData.filter.weight);
          setManu(proData.filter.manufacture);
          setCollection(proData.filter.collection);
        } else {
          setCount(false);
        }
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setInnerLoad(false);
    };

    fetchData();
  }, [props]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  var minuspage,
    addpage = "";
  var currentpage = props.page;

  if (currentpage == 1) {
    minuspage = 1;
  } else {
    minuspage = parseInt(currentpage) - 1;
  }
  addpage = parseInt(currentpage) + 1;

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  const addCart = async (id, image, jewelcat, no, size, weight) => {
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
          toast.success(`${cartjson.message} Successfully!`);
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

  const addWishList = async (id, no, weight, img, index) => {
    var token = localStorage.getItem("token");
    var postdata = {
      proid: id,
      prono: no,
      prowei: weight,
      proimg: img,
      token: token,
      addtowishlist: "",
    };
    if (token && token != null && token != "") {
      try {
        const req = await fetch(`https://virhanchains.nivsjewels.com/api/update`, {
          method: "POST",
          body: JSON.stringify(postdata),
        });

        const res = await req.json();
        var element = document.getElementById(`wishlistheart${index}`);
        if (res.status == true) {
          if (res.type == "added") {
            toast.success(`${res.message} Successfully!`);
            element.classList.add("fa-solid");
          } else {
            toast.error(`${res.message} Successfully!`);
            element.classList.remove("fa-solid");
          }
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
      <section className="shop-section bg-white ptb-120">
        {isCount ? (
          <>
            {innerLoad ? (
              <div className="text-center">
                <span className="loader"></span>
              </div>
            ) : (
              <div className="container">
                <div className="row g-4">
                  <div className="col-xl-2 order-2 order-xl-1">
                    <div className="shop-sidebar pe-xl-5 mt-5 mt-xl-0">
                      <div className="sidebar-widget color-select-widget mt-60">
                        <h6 className="widget-title position-relative mb-5">
                          Weight Range
                        </h6>
                        <ul className="color-select">
                          <li>
                            <label>
                              <span>
                                {0 == props.weight ? (
                                  <Link
                                    style={{ background: "#f0f0f0" }}
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/0/${props.type}/${props.collection}/${props.manu}`}
                                  >
                                    0-100{" "}
                                  </Link>
                                ) : (
                                  <Link
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/0/${props.type}/${props.collection}/${props.manu}`}
                                  >
                                    0-100{" "}
                                  </Link>
                                )}
                              </span>
                            </label>
                          </li>

                          {weight.map((wgt, index) => (
                            <li key={index}>
                              <label>
                                <span>
                                  {wgt.weight_id == props.weight ? (
                                    <Link
                                      style={{ background: "#f0f0f0" }}
                                      to={`/shop/${props.cat}/${props.subcat}/1/${wgt.weight_id}/${props.type}/${props.collection}/${props.manu}`}
                                    >
                                      {wgt.weight_code} <span>{wgt.count}</span>
                                    </Link>
                                  ) : (
                                    <Link
                                      to={`/shop/${props.cat}/${props.subcat}/1/${wgt.weight_id}/${props.type}/${props.collection}/${props.manu}`}
                                    >
                                      {wgt.weight_code} <span>{wgt.count}</span>
                                    </Link>
                                  )}
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="sidebar-widget color-select-widget mt-60">
                        <h6 className="widget-title position-relative mb-5">
                          Product Type
                        </h6>
                        <ul className="color-select">
                          <li>
                            <label>
                              <span>
                                {0 == props.type ? (
                                  <Link
                                    style={{ background: "#f0f0f0" }}
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/0/${props.collection}/${props.manu}`}
                                  >
                                    All Design{" "}
                                  </Link>
                                ) : (
                                  <Link
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/0/${props.collection}/${props.manu}`}
                                  >
                                    All Design{" "}
                                  </Link>
                                )}
                              </span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <span>
                                {1 == props.type ? (
                                  <Link
                                    style={{ background: "#f0f0f0" }}
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/1/${props.collection}/${props.manu}`}
                                  >
                                    Plain{" "}
                                  </Link>
                                ) : (
                                  <Link
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/1/${props.collection}/${props.manu}`}
                                  >
                                    Plain
                                  </Link>
                                )}
                              </span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <span>
                                {2 == props.type ? (
                                  <Link
                                    style={{ background: "#f0f0f0" }}
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/2/${props.collection}/${props.manu}`}
                                  >
                                    Stone{" "}
                                  </Link>
                                ) : (
                                  <Link
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/2/${props.collection}/${props.manu}`}
                                  >
                                    Stone{" "}
                                  </Link>
                                )}
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="sidebar-widget color-select-widget mt-60">
                        <h6 className="widget-title position-relative mb-5">
                          Manufacture Type
                        </h6>
                        <ul className="color-select">
                          <li>
                            <label>
                              <span>
                                {0 == props.type ? (
                                  <Link
                                    style={{ background: "#f0f0f0" }}
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/0/${props.collection}/0`}
                                  >
                                    All Design{" "}
                                  </Link>
                                ) : (
                                  <Link
                                    to={`/shop/${props.cat}/${props.subcat}/${currentpage}/${props.weight}/0/${props.collection}/0`}
                                  >
                                    All Design{" "}
                                  </Link>
                                )}
                              </span>
                            </label>
                          </li>

                          {manu.map((man, index) => (
                            <li key={index}>
                              <label>
                                <span>
                                  {man.mid == props.manu ? (
                                    <Link
                                      style={{ background: "#f0f0f0" }}
                                      to={`/shop/${props.cat}/${props.subcat}/1/${props.weight}/${props.type}/${props.collection}/${man.mid}`}
                                    >
                                      {man.mname} <span>{man.count}</span>
                                    </Link>
                                  ) : (
                                    <Link
                                      to={`/shop/${props.cat}/${props.subcat}/1/${props.weight}/${props.type}/${props.collection}/${man.mid}`}
                                    >
                                      {man.mname} <span>{man.count}</span>
                                    </Link>
                                  )}
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-10 order-1 order-xl-2">
                    <div className="shop-grid">
                      <div className="products-grid mt-40">
                        <div className="row g-4">
                          {products.map((pro, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                              <div className="ur-product-card position-relative card-sm-small text-center">
                                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                                  <Link to={`/product/${pro.no}`}>
                                    <img
                                      src={pro.image}
                                      alt={pro.no}
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="product-overlay position-absolute">
                                    <div className="product-btns d-flex align-items-center justify-content-between">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          addWishList(
                                            pro.id,
                                            pro.no,
                                            pro.weight,
                                            pro.image,
                                            index
                                          )
                                        }
                                      >
                                        <i
                                          id={`wishlistheart${index}`}
                                          className="fa-regular fa-heart"
                                        />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          addCart(
                                            pro.id,
                                            pro.image,
                                            pro.jewelcat,
                                            pro.no,
                                            pro.size,
                                            pro.weight
                                          )
                                        }
                                      >
                                        <i className="fa-solid fa-basket-shopping" />
                                      </button>

                                      <Link
                                        to={`/product/${pro.no}`}
                                        className="#product_quickview"
                                      >
                                        <i className="fa-regular fa-eye" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <Link to={`/product/${pro.no}`}>
                                    <h5 className="my-2 fw-medium product-title">
                                      {pro.no}
                                    </h5>
                                  </Link>
                                  <span className="primary-text-color fs-sm fw-medium">
                                    Weight : {pro.weight}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {isCount ? (
                        <>
                          <div className="text-center mt-60">
                            <ul className="template-pagination d-inline-flex align-items-center gap-3">
                              <li>
                                <Link
                                  to={`/shop/${props.cat}/${props.subcat}/${minuspage}/${props.weight}/${props.type}/${props.collection}/${props.manu}`}
                                >
                                  <i className="fa-solid fa-angles-left" />
                                </Link>
                              </li>
                              {pages.map((page, index) => (
                                <li key={index}>
                                  {page.i == props.page ? (
                                    <Link
                                      className="active"
                                      to={`/shop/${props.cat}/${props.subcat}/${page.i}/${props.weight}/${props.type}/${props.collection}/${props.manu}`}
                                    >
                                      {page.i}
                                    </Link>
                                  ) : (
                                    <Link
                                      className=""
                                      to={`/shop/${props.cat}/${props.subcat}/${page.i}/${props.weight}/${props.type}/${props.collection}/${props.manu}`}
                                    >
                                      {page.i}
                                    </Link>
                                  )}
                                </li>
                              ))}
                              <li>
                                <Link
                                  to={`/shop/${props.cat}/${props.subcat}/${addpage}/${props.weight}/${props.type}/${props.collection}/${props.manu}`}
                                >
                                  <i className="fa-solid fa-angles-right" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <> </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 text-center">
            <h5>No Products in this Category</h5>
          </div>
        )}
      </section>
    </>
  );
};

export default Gridproducts;
