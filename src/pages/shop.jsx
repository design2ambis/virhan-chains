import React from "react";
import { Link, useParams } from "react-router-dom";
import Gridproducts from "../components/gridproducts";

const Shop = () => {

  document.title = "Virhan Jewels - Shop";
  const { cat, subcat, page, wgt, type, collection, manu } = useParams();
  return (
    <>
      {/*breadcrumb section start*/}
      <div
        className="breadcrumb-section pt-40 pb-40"
        data-background="assets/images/shapes/breadcrumb-bg.jpg"
      >
        <div className="container">
          <p className="breadcrumb-text fw-light mb-0">
            <Link to="/">Home / </Link>
            <span className="primary-text-color">
              Shop /{" "}
              {cat
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
              /{" "}
              {subcat
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
            </span>
          </p>
        </div>
      </div>
      {/*breadcrumb section end*/}
      <Gridproducts
        cat={cat}
        subcat={subcat}
        page={page}
        weight={wgt}
        type={type}
        collection={collection}
        manu={manu}
      />
    </>
  );
};

export default Shop;
