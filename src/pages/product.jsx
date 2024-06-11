import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import vidbanner from "../../assets/images/banner/video-banner.jpg"

const Product = () => {

  document.title = "Virhan Jewels - Product";

  const { prono } = useParams();
  const [product, setproduct] = useState([]);
  const [ran, setrandomData] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [prono]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ProductRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product&designno=${prono}`
        );
        const proData = await ProductRes.json();

        if (proData) {
          setproduct(proData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [prono]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawdata = await fetch(
          `https://utsarvajewels.com/api/crud?get_random_eight&count=6`
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
  }, [prono]);
  // console.log(ran);

  const adjustQty = (action) => {
    if (action === "add") {
      setQty(qty + 1);
    } else if (action === "sub" && qty > 1) {
      setQty(qty - 1);
    }
  };

  const addCart = async (id, image, jewelcat, no, size, weight, qty) => {
    var token = localStorage.getItem("token");

    if (token && token != null && token != "") {
      const cartdata = {
        pid: id,
        proimg: image,
        prono: no,
        qty: qty,
        prowgt: weight,
        token: token,
        add_cart: "",
      };
      try {
        const cartraw = await fetch(`https://virhanjewels.nivsjewels.com/api/update`, {
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

  return (
    <>
      <ToastContainer />
      {/*breadcrumb section start*/}
      <div
        className="breadcrumb-section pt-40 pb-40"
        data-background="../assets/images/shapes/breadcrumb-bg.jpg"
      >
        <div className="container">
          <p className="breadcrumb-text fw-light mb-0">
            <Link to="/">Home</Link> / <a href="#">Shop</a> /{" "}
            <span className="primary-text-color">{prono}</span>
          </p>
        </div>
      </div>
      {/*breadcrumb section end*/}
      {/*product details start*/}
      <section className="ptb-120 bg-white">
        <div className="container pb-5 pb-sm-0">
          <div className="product-single">
            <div className="row g-4">
              <div className="col-md-6 col-sm-12">
                <div className="product-single-slider d-flex">
                  <div className="product-nav-slider-wrapper">
                    {/* <div className="product-nav-slider">
                      <div className="feature-image light-bg p-3">
                        <img
                          src={product.design_image}
                          alt="not found"
                          className="img-fluid"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="product-main-slider-wrapper">
                    <div className="single-product-slider slider-spacing">
                      <div className="single-item">
                        <div className="feature-image bg-light">
                          <img
                            src={product.design_image}
                            alt="not found"
                            className="img-fluid"
                          // width={"600"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="single-product-info">
                  <a
                    href="#!"
                    className="category-btn text-uppercase fs-sm secondary-text-color d-inline-block mb-3"
                  >
                    {product.sub_cat_name}
                  </a>
                  <h3 className="mb-4">{product.design_no}</h3>
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
                    <span className="primary-text-color">Weight </span>
                    {/* <span className="pricing-devider primary-text-color">-</span> */}
                    <span className="primary-text-color">
                      {product.design_weight}
                    </span>
                  </div>
                  <div className="short-description mt-40">
                    <p className="mb-0 fw-light">
                      <>
                        {product.sub_cat_name === "Bangle" && (
                          <>
                            Introducing our exquisite Gold Bangle Collection:
                            Elevate your style and add a touch of timeless
                            elegance with our stunning Gold Bangles. Crafted
                            with precision and attention to detail, each piece
                            in our collection is a testament to exquisite
                            craftsmanship and unparalleled beauty. Whether
                            you're looking for a statement piece or a delicate
                            accessory, our gold bangles are designed to
                            complement any occasion and suit every taste.
                            Material: Our Gold Bangles are meticulously crafted
                            using high-quality, 18-karat gold. This premium
                            material ensures a luxurious finish, durability, and
                            a lustrous shine that will last for generations. We
                            carefully select our gold to provide you with a
                            piece of jewelry that exudes brilliance and
                            sophistication.
                          </>
                        )}

                        {product.sub_cat_name === "Bracelet" && (
                          <>
                            Introducing our exquisite gold bracelet, a true
                            symbol of elegance and timeless beauty. Crafted with
                            utmost precision and attention to detail, this
                            bracelet is designed to adorn your wrist with
                            unparalleled grace. Material: Made from the finest
                            22K solid gold, this bracelet combines durability
                            with a luxurious appeal. The radiant yellow gold
                            glimmers in the light, adding a touch of opulence to
                            any ensemble.
                          </>
                        )}

                        {product.sub_cat_name === "Chain" && (
                          <>
                            Introducing our Exquisite Gold Chain Collection:
                            Indulge in the timeless allure of our stunning gold
                            chains, meticulously crafted to elevate your style
                            and make a statement. Each piece showcases the
                            perfect blend of luxury, sophistication, and
                            unparalleled craftsmanship. Whether you're looking
                            to enhance your everyday elegance or adorn yourself
                            for a special occasion, our gold chains are designed
                            to captivate and endure. Classic Gold Chain: Unleash
                            the allure of simplicity with our Classic Gold
                            Chain. Crafted with the utmost precision, this chain
                            boasts a seamless blend of understated elegance and
                            enduring style. Its sleek and polished surface
                            reflects light effortlessly, creating a captivating
                            glow. Perfect for any occasion, it effortlessly
                            complements both casual and formal attire.
                          </>
                        )}

                        {product.sub_cat_name === "Charms" && (
                          <>
                            Introducing our exquisite collection of Gold Charms
                            that are designed to add a touch of elegance and
                            personalization to your jewelry collection. Crafted
                            with meticulous attention to detail, our gold charms
                            are the perfect way to express your unique style and
                            commemorate special moments. Timeless Heart Charm:
                            Capture the essence of love with our Timeless Heart
                            Charm. Crafted in gleaming 14K gold, this delicate
                            charm features a classic heart shape, symbolizing
                            affection and devotion. Whether worn on a bracelet
                            or necklace, this timeless piece is a perfect gift
                            for someone special or a beautiful addition to your
                            own collection.
                          </>
                        )}

                        {product.sub_cat_name === "Jhummiki" && (
                          <>
                            Introducing the Exquisite Gold Jhummiki: Welcome to
                            our website, where we proudly present the stunning
                            Gold Jhummiki collection. Our Gold Jhummikis are
                            intricately crafted and beautifully designed pieces
                            of jewelry that celebrate the rich heritage and
                            elegance of Indian culture. With their timeless
                            charm and exquisite craftsmanship, these Jhummikis
                            are perfect for adding a touch of grace and glamour
                            to any occasion. Our Gold Jhummikis are meticulously
                            crafted from high-quality 22-karat gold, ensuring a
                            lustrous shine and durability that will last for
                            generations.
                          </>
                        )}

                        {product.sub_cat_name === "Mugappu" && (
                          <>
                            Introducing our exquisite gold Mugappu collection,
                            where traditional charm meets contemporary elegance.
                            Crafted with meticulous attention to detail, our
                            Mugappu designs showcase the timeless beauty of
                            gold, accentuating the grace of every individual who
                            adorns them. Intricate Artistry: Each Mugappu is a
                            testament to the craftsmanship of our skilled
                            artisans. Every stroke and curve is meticulously
                            etched, resulting in intricate patterns and designs
                            that are a delight to behold. Our Mugappu pieces are
                            created with a perfect blend of traditional
                            techniques and modern aesthetics, making them truly
                            unique.
                          </>
                        )}

                        {product.sub_cat_name === "Plain Charms" && (
                          <>
                            Introducing our exquisite collection of Gold Plain
                            Charms, crafted with meticulous attention to detail
                            and designed to add a touch of elegance to any
                            jewelry piece. These timeless charms are perfect for
                            creating personalized bracelets, necklaces, or
                            anklets that reflect your unique style and
                            personality. Each Gold Plain Charm is expertly
                            crafted using high-quality 14K or 18K gold, ensuring
                            durability and a stunning luster that will stand the
                            test of time. The charms feature a sleek and
                            minimalistic design, making them versatile and
                            suitable for any occasion, whether you prefer a
                            casual everyday look or a sophisticated evening
                            ensemble.
                          </>
                        )}

                        {product.sub_cat_name === "Ring" && (
                          <>
                            Introducing the "Eternal Radiance" Gold Ring:
                            Embrace timeless elegance and grace with our
                            exquisite "Eternal Radiance" Gold Ring. Meticulously
                            crafted to perfection, this stunning piece embodies
                            sophistication and beauty, making it an ideal
                            accessory for any occasion. The band of the ring is
                            meticulously handcrafted from 18-carat yellow gold,
                            chosen for its exquisite luster and exceptional
                            durability. Its smooth and polished surface glimmers
                            with a captivating radiance, reflecting the light
                            with every movement.
                          </>
                        )}

                        {product.sub_cat_name === "Stone Charms" && (
                          <>
                            Introducing our exquisite Gold Stone Charms, a
                            collection of enchanting accessories that will add a
                            touch of elegance and charm to your jewelry
                            collection. Crafted with meticulous attention to
                            detail, these stunning charms are the perfect choice
                            to elevate your style and make a statement. Each
                            Gold Stone Charm is meticulously crafted from
                            high-quality 14K gold, ensuring durability and a
                            luxurious shine that will endure for years to come.
                            The captivating centerpiece of each charm is a
                            carefully selected gemstone, known for its beauty
                            and inherent metaphysical properties.
                          </>
                        )}

                        {product.sub_cat_name === "Stud" && (
                          <>
                            Introducing our exquisite gold stud collection,
                            where elegance meets sophistication. Crafted with
                            meticulous attention to detail, these timeless
                            pieces are designed to add a touch of glamour to any
                            ensemble. Let's delve into the captivating
                            description of our gold studs: Material: Each stud
                            is meticulously crafted from high-quality 14-karat
                            or 18-karat gold, ensuring durability and lasting
                            beauty. The lustrous gold captures the essence of
                            luxury, making these studs a perfect investment for
                            your jewelry collection.
                          </>
                        )}

                        {product.sub_cat_name === "Wedding Ring" && (
                          <>
                            Introducing our exquisite collection of gold wedding
                            rings, designed to symbolize the eternal bond of
                            love and commitment. Handcrafted with utmost
                            precision and adorned with timeless elegance, each
                            ring is a testament to exceptional craftsmanship and
                            enduring beauty. Material: Our gold wedding rings
                            are meticulously crafted from the finest quality
                            gold, ensuring both exceptional durability and a
                            luxurious aesthetic. We offer a range of gold
                            options to suit every preference, including classic
                            yellow gold, romantic rose gold, and contemporary
                            white gold.
                          </>
                        )}
                      </>
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
                      <button
                        type="button"
                        className="drecrement"
                        onClick={() => adjustQty("sub")}
                      >
                        <i className="fa-solid fa-minus" />
                      </button>
                      <input type="text" value={qty} readOnly />
                      <button
                        type="button"
                        className="drecrement"
                        onClick={() => adjustQty("add")}
                      >
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="add_to_cart_btn"
                      onClick={() =>
                        addCart(
                          product.design_id,
                          product.design_image,
                          product.jewelcat,
                          product.design_no,
                          product.size,
                          product.design_weight,
                          qty
                        )
                      }
                    >
                      Add to Cart
                      <span className="ms-2">
                        <i className="fa-solid fa-basket-shopping" />
                      </span>
                    </button>
                    {/* <button type="button" className="wish_btn">
                      <span className="me-2">
                        <i className="fa-regular fa-heart" />
                      </span>
                      Add to Wishlist
                    </button> */}
                  </div>
                  <ul className="product-meta mt-32">
                    <li>SIZE : {product.size}</li>
                    <li>
                      Categories: {product.category_name} -{" "}
                      {product.sub_cat_name}
                    </li>
                    <li>Tags: Iluminate, Textured</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-product-tab pt-120">
              <ul className="nav nav-tabs">
                <li>
                  <a href="#tab-1" data-bs-toggle="tab" className="active">
                    Description
                  </a>
                </li>
                <li>
                  <a href="#tab-2" data-bs-toggle="tab">
                    Addition information
                  </a>
                </li>
                {/* <li>
                                    <a href="#tab-3" data-bs-toggle="tab">
                                        Reviews(2)
                                    </a>
                                </li> */}
              </ul>
              <div className="tab-content mt-32">
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap">
                    <div className="product-description">
                      <p className="mb-0 fw-light">
                        <>
                          {product.sub_cat_name === "Bangle" && (
                            <>
                              Introducing our exquisite Gold Bangle Collection:
                              Elevate your style and add a touch of timeless
                              elegance with our stunning Gold Bangles. Crafted
                              with precision and attention to detail, each piece
                              in our collection is a testament to exquisite
                              craftsmanship and unparalleled beauty. Whether
                              you're looking for a statement piece or a delicate
                              accessory, our gold bangles are designed to
                              complement any occasion and suit every taste.
                              Material: Our Gold Bangles are meticulously
                              crafted using high-quality, 18-karat gold. This
                              premium material ensures a luxurious finish,
                              durability, and a lustrous shine that will last
                              for generations. We carefully select our gold to
                              provide you with a piece of jewelry that exudes
                              brilliance and sophistication.
                            </>
                          )}

                          {product.sub_cat_name === "Bracelet" && (
                            <>
                              Introducing our exquisite gold bracelet, a true
                              symbol of elegance and timeless beauty. Crafted
                              with utmost precision and attention to detail,
                              this bracelet is designed to adorn your wrist with
                              unparalleled grace. Material: Made from the finest
                              22K solid gold, this bracelet combines durability
                              with a luxurious appeal. The radiant yellow gold
                              glimmers in the light, adding a touch of opulence
                              to any ensemble.
                            </>
                          )}

                          {product.sub_cat_name === "Chain" && (
                            <>
                              Introducing our Exquisite Gold Chain Collection:
                              Indulge in the timeless allure of our stunning
                              gold chains, meticulously crafted to elevate your
                              style and make a statement. Each piece showcases
                              the perfect blend of luxury, sophistication, and
                              unparalleled craftsmanship. Whether you're looking
                              to enhance your everyday elegance or adorn
                              yourself for a special occasion, our gold chains
                              are designed to captivate and endure. Classic Gold
                              Chain: Unleash the allure of simplicity with our
                              Classic Gold Chain. Crafted with the utmost
                              precision, this chain boasts a seamless blend of
                              understated elegance and enduring style. Its sleek
                              and polished surface reflects light effortlessly,
                              creating a captivating glow. Perfect for any
                              occasion, it effortlessly complements both casual
                              and formal attire.
                            </>
                          )}

                          {product.sub_cat_name === "Charms" && (
                            <>
                              Introducing our exquisite collection of Gold
                              Charms that are designed to add a touch of
                              elegance and personalization to your jewelry
                              collection. Crafted with meticulous attention to
                              detail, our gold charms are the perfect way to
                              express your unique style and commemorate special
                              moments. Timeless Heart Charm: Capture the essence
                              of love with our Timeless Heart Charm. Crafted in
                              gleaming 14K gold, this delicate charm features a
                              classic heart shape, symbolizing affection and
                              devotion. Whether worn on a bracelet or necklace,
                              this timeless piece is a perfect gift for someone
                              special or a beautiful addition to your own
                              collection.
                            </>
                          )}

                          {product.sub_cat_name === "Jhummiki" && (
                            <>
                              Introducing the Exquisite Gold Jhummiki: Welcome
                              to our website, where we proudly present the
                              stunning Gold Jhummiki collection. Our Gold
                              Jhummikis are intricately crafted and beautifully
                              designed pieces of jewelry that celebrate the rich
                              heritage and elegance of Indian culture. With
                              their timeless charm and exquisite craftsmanship,
                              these Jhummikis are perfect for adding a touch of
                              grace and glamour to any occasion. Our Gold
                              Jhummikis are meticulously crafted from
                              high-quality 22-karat gold, ensuring a lustrous
                              shine and durability that will last for
                              generations.
                            </>
                          )}

                          {product.sub_cat_name === "Mugappu" && (
                            <>
                              Introducing our exquisite gold Mugappu collection,
                              where traditional charm meets contemporary
                              elegance. Crafted with meticulous attention to
                              detail, our Mugappu designs showcase the timeless
                              beauty of gold, accentuating the grace of every
                              individual who adorns them. Intricate Artistry:
                              Each Mugappu is a testament to the craftsmanship
                              of our skilled artisans. Every stroke and curve is
                              meticulously etched, resulting in intricate
                              patterns and designs that are a delight to behold.
                              Our Mugappu pieces are created with a perfect
                              blend of traditional techniques and modern
                              aesthetics, making them truly unique.
                            </>
                          )}

                          {product.sub_cat_name === "Plain Charms" && (
                            <>
                              Introducing our exquisite collection of Gold Plain
                              Charms, crafted with meticulous attention to
                              detail and designed to add a touch of elegance to
                              any jewelry piece. These timeless charms are
                              perfect for creating personalized bracelets,
                              necklaces, or anklets that reflect your unique
                              style and personality. Each Gold Plain Charm is
                              expertly crafted using high-quality 14K or 18K
                              gold, ensuring durability and a stunning luster
                              that will stand the test of time. The charms
                              feature a sleek and minimalistic design, making
                              them versatile and suitable for any occasion,
                              whether you prefer a casual everyday look or a
                              sophisticated evening ensemble.
                            </>
                          )}

                          {product.sub_cat_name === "Ring" && (
                            <>
                              Introducing the "Eternal Radiance" Gold Ring:
                              Embrace timeless elegance and grace with our
                              exquisite "Eternal Radiance" Gold Ring.
                              Meticulously crafted to perfection, this stunning
                              piece embodies sophistication and beauty, making
                              it an ideal accessory for any occasion. The band
                              of the ring is meticulously handcrafted from
                              18-carat yellow gold, chosen for its exquisite
                              luster and exceptional durability. Its smooth and
                              polished surface glimmers with a captivating
                              radiance, reflecting the light with every
                              movement.
                            </>
                          )}

                          {product.sub_cat_name === "Stone Charms" && (
                            <>
                              Introducing our exquisite Gold Stone Charms, a
                              collection of enchanting accessories that will add
                              a touch of elegance and charm to your jewelry
                              collection. Crafted with meticulous attention to
                              detail, these stunning charms are the perfect
                              choice to elevate your style and make a statement.
                              Each Gold Stone Charm is meticulously crafted from
                              high-quality 14K gold, ensuring durability and a
                              luxurious shine that will endure for years to
                              come. The captivating centerpiece of each charm is
                              a carefully selected gemstone, known for its
                              beauty and inherent metaphysical properties.
                            </>
                          )}

                          {product.sub_cat_name === "Stud" && (
                            <>
                              Introducing our exquisite gold stud collection,
                              where elegance meets sophistication. Crafted with
                              meticulous attention to detail, these timeless
                              pieces are designed to add a touch of glamour to
                              any ensemble. Let's delve into the captivating
                              description of our gold studs: Material: Each stud
                              is meticulously crafted from high-quality 14-karat
                              or 18-karat gold, ensuring durability and lasting
                              beauty. The lustrous gold captures the essence of
                              luxury, making these studs a perfect investment
                              for your jewelry collection.
                            </>
                          )}

                          {product.sub_cat_name === "Wedding Ring" && (
                            <>
                              Introducing our exquisite collection of gold
                              wedding rings, designed to symbolize the eternal
                              bond of love and commitment. Handcrafted with
                              utmost precision and adorned with timeless
                              elegance, each ring is a testament to exceptional
                              craftsmanship and enduring beauty. Material: Our
                              gold wedding rings are meticulously crafted from
                              the finest quality gold, ensuring both exceptional
                              durability and a luxurious aesthetic. We offer a
                              range of gold options to suit every preference,
                              including classic yellow gold, romantic rose gold,
                              and contemporary white gold.
                            </>
                          )}
                        </>
                      </p>
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
                    </div>
                    <div className="video-content flex-shrink-0 position-relative">
                      <img
                        src={vidbanner}
                        alt="video banner"
                        className="img-fluid"
                      />
                      <a
                        href="https://www.youtube.com/watch?v=6WZOxnYi4Cs"
                        data-fancybox=""
                        className="video-popup-btn"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2">
                  <ul className="product-meta d-flex gap-2 flex-column">
                    <li>SIZE : {product.size}</li>
                    <li>
                      Categories: {product.category_name} -{" "}
                      {product.sub_cat_name}
                    </li>
                    <li>Tags: Iluminate, Textured</li>
                  </ul>
                </div>
                {/* <div className="tab-pane fade" id="tab-3">
                                    <ul className="prduct-reviews">
                                        <li className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                                            <img
                                                src="assets/images/clients/client-1.jpg"
                                                alt="user"
                                                className="user-thumb"
                                            />
                                            <div>
                                                <span className="date fs-sm fw-light text-color">
                                                    Sep 25, 2022
                                                </span>
                                                <h6 className="mt-1 mb-2">Amalia Genner</h6>
                                                <ul className="fs-sm d-flex align-items-center">
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
                                                <p className="fs-sm text-color mt-3 mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Vivamus magna justo, lacinia eget consectetur sed,
                                                    convallis at tellus. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vivamus magna justo
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                                            <img
                                                src="assets/images/clients/client-2.jpg"
                                                alt="user"
                                                className="user-thumb"
                                            />
                                            <div>
                                                <span className="date fs-sm fw-light text-color">
                                                    Sep 25, 2022
                                                </span>
                                                <h6 className="mt-1 mb-2">Emma Watson</h6>
                                                <ul className="fs-sm d-flex align-items-center">
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
                                                <p className="fs-sm text-color mt-3 mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Vivamus magna justo, lacinia eget consectetur sed,
                                                    convallis at tellus. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vivamus magna justo
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product details end*/}
      {/*featured products start*/}
      <section className="ptb-120 bg-white border-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-title">
                <h2 className="fw-normal mb-50 text-font-family">
                  Our Recent Products
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ran.map((r, index) => (
              <div className="ur-product-card col-md-2 col-sm-12" key={index}>
                {/* <span className="position-absolute ur-badge coupon-badge">-50%</span> */}
                <div className="feature-image d-flex align-items-cneter justify-content-center light-bg position-relative">
                  <Link to={`/product/${r.design_no}`}>
                    <img
                      src={r.design_image}
                      alt={r.design_no}
                      className="img-fluid"
                    />
                  </Link>
                  {/* <div className="product-overlay position-absolute">
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
                  </div> */}
                </div>
                <div className="mt-4 text-center">
                  {/* <a
                        href="#!"
                        className="secondary-text-color text-uppercase"
                    >
                      Necklaces
                  </a> */}
                  <Link to={`/product/${r.design_no}`}>
                    <h5 className="my-2 fw-medium product-title">
                      {r.design_no}
                    </h5>
                  </Link>
                  <span className="primary-text-color fs-sm fw-medium">
                    Weight: {r.design_weight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*featured products end */}
    </>
  );
};

export default Product;
