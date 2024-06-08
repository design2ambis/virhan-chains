import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileCategory = () => {
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

    const openMobDropdown = ((a) => {

        var submenu = document.getElementById(`subcatList_${a}`);
        var icon = document.getElementById(`icon_${a}`);
        // console.log(submenu);

        if (submenu) {  // Ensure the element exists
            if (submenu.style.display === "" || submenu.style.display === "none") {
                submenu.style.display = "block";
                icon.classList.add("icon-rotate")
            } else {
                submenu.style.display = "none";
                icon.classList.remove("icon-rotate")
            }
        } else {
            console.log("Submenu element not found");
        }
    })

    return (
        <>
            {categories.map((category, index) => (
                <li className="has-submenu" key={index}
                    onClick={() => openMobDropdown(category.id)}
                >
                    <a href="#!">{category.name}</a>
                    <i role="button" className="fas fa-angle-down" id={`icon_${category.id}`} />
                    <ul className="submenu-wrapper" id={`subcatList_${category.id}`} key={category.id}>
                        {category.subcat.map((sub) => (
                            <li key={sub.id}>
                                <Link className="text-dark" to={`shop/${category.cname}/${sub.sname}/1/0/0/0/0`}>{sub.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
};

export default MobileCategory;
