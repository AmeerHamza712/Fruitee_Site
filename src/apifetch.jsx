import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export function ApiFetch() {
  let location = useLocation();
  console.log(location);
  let [cat, setCat] = useState([]);
  let [product, setProduct] = useState([]);
  //   let useLocation = useLocation();
  //   console.log(useLocation);
  // Fetch categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalRes) => {
        setCat(finalRes);
      });
  }, []);

  // Fetch all products initially
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((final) => {
        setProduct(final.products);
      });
  }, []);

  // ✅ Fetch products by category
  let getData = (category) => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.data)
      .then((final) => {
        setProduct(final.products); // ✅ use .products array
      });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-[25%_auto] gap-6">
          {/** Category */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <Category cat={cat} getData={getData} />
          </div>

          {/** Product */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h1 className="font-semibold text-2xl text-gray-800">
                    {item.title}
                  </h1>
                  <p className="font-bold text-xl text-red-600 mt-1">
                    ${item.price}
                  </p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    <Link to={`blog/${item.id}`}>Add to Cart</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Category({ cat, getData }) {
  return (
    <div>
      <h1 className="font-bold text-4xl">Category</h1>
      <ul className="mt-3">
        {cat.map((data, i) => (
          <li
            key={i}
            onClick={() => getData(data)} // ✅ fetches products for clicked category
            className="cursor-pointer bg-gray-400 p-4 text-left mb-1 font-[500] text-lg uppercase hover:bg-gray-500 transition"
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
<b></b>;
