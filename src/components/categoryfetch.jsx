import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(
          "https://utsarvajewels.com/api/crud?all_category_list"
        );
        const categoryData = await categoryResponse.json();
        if (categoryData.option.status === 200) {
          setCategories(categoryData.data);
          //   setSubCategories(categoryData.data.subcat);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* {categories.map((category,index) => (
        <li key={category.id} className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
            {category.name}
          </a>
          <ul className="dropdown-menu" role="menu">
                
            {category.subcat.map((sub) => (
                <li key={sub.sid}>
                    <Link to={`shop/${category.cname}/${sub.sname}/1`}>{sub.name}</Link>
                </li>
            ))}
         
          </ul>
        </li>
      ))} */}

      <div className="ur-megamenu">
        <div className="megamenu-row">
          {categories.map((category, index) => (
            <div className="megamenu-column border-r" key={index}>
              <h6 className="column-title text-danger" style={{color: '#f36a07'}}>{category.name}</h6>
              <ul className="pages-list" >
                {category.subcat.map((sub) => (
                  <li key={sub.sid}>
                    <Link to={`shop/${category.cname}/${sub.sname}/1/0/0/0`}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
