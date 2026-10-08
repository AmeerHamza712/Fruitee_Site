import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductDetail() {
  const { id } = useParams(); // ✅ extract ":id" from URL
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
    //   .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-[800px] mx-auto bg-white shadow-lg rounded-xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-72 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-2xl font-semibold text-red-600 mt-4">
        ${product.price}
      </p>
    </div>
  );
}
