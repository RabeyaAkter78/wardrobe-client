'use client'

import { useParams, } from "next/navigation";
import Image from "next/image";
import React from "react";

const productData = [
  {
    id: 1,
    name: "Floral Summer Dress",
    description: "A beautiful floral summer dress, perfect for casual outings.",
    price: "$15",
    size: "5-6 Years",
    color: "Pink",
    condition: "Gently Used",
    material: "Cotton",
    availability: "In Stock",
    image: "/images/floral-dress.jpg",
  },
  {
    id: 2,
    name: "Elegant Party Dress",
    description: "A stylish party dress with lace details and a satin finish.",
    price: "$25",
    size: "7-8 Years",
    color: "White",
    condition: "Like New",
    material: "Satin & Lace",
    availability: "In Stock",
    image: "/images/party-dress.jpg",
  },
];

const ProductDetails = () => {
const params =useParams();
  const {id }= params
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Size:</strong> {product.size}</p>
      <p><strong>Color:</strong> {product.color}</p>
      <p><strong>Condition:</strong> {product.condition}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <p><strong>Availability:</strong> {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
