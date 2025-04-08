"use client";
import { Table, ConfigProvider, Avatar, Space, Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { MdArrowOutward } from "react-icons/md";
import { LiaUserSlashSolid } from "react-icons/lia";
import { FaTrash, FaX } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

interface Seller {
  name: string;
  location: string;
  contact: string;
}

interface Product {
  key: string;
  productName: string;
  brand: string;
  price: number;
  condition: string;
  isAvailable: boolean;
  size: string;
  color: string;
  category: string;
  material: string;
  description: string;
  productImage: string;
  seller: Seller;
  uploadDate: string;
  tags: string[];
}

interface ColumnRecord {
  key: string;
  productName: string;
  brand: string;
  price: number;
  condition: string;
  isAvailable: boolean;
  seller: Seller;
  uploadDate: string;
  productImage: string;
  dataIndex?: string;
}

const WishlistHistory = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const data = [
    {
      key: "1",
      productName: "Summer Top",
      brand: "Non Branded",
      price: 1000,
      condition: "Used - Good",
      isAvailable: true,
      size: "M",
      color: "Light Blue",
      category: "Women's Clothing",
      material: "Cotton Blend",
      description:
        "A lightweight and breathable summer top perfect for casual wear. No stains or tears, gently worn.",
      productImage:
        "https://images.unsplash.com/photo-1677631231234-1234567890",
      seller: {
        name: "Jane Doe",
        location: "Berlin, Germany",
        contact: "jane@example.com",
      },
      uploadDate: "2025-04-06",
      tags: ["summer", "top", "casual", "lightweight", "second-hand"],
    },
    {
      key: "2",
      productName: "Leather Handbag",
      brand: "Zara",
      price: 2500,
      condition: "Used - Like New",
      isAvailable: true,
      size: "Standard",
      color: "Brown",
      category: "Accessories",
      material: "Genuine Leather",
      description:
        "Stylish brown leather handbag with minimal signs of wear. Perfect for both casual and formal outings.",
      productImage:
        "https://images.unsplash.com/photo-1581579185169-3ec91e579f5a",
      seller: {
        name: "Anna Smith",
        location: "Hamburg, Germany",
        contact: "anna@example.com",
      },
      uploadDate: "2025-04-04",
      tags: ["bag", "leather", "zara", "accessory", "fashion"],
    },
    {
      key: "3",
      productName: "Men's Denim Jacket",
      brand: "Levi's",
      price: 3200,
      condition: "Used - Very Good",
      isAvailable: true,
      size: "L",
      color: "Dark Blue",
      category: "Men's Clothing",
      material: "Denim",
      description:
        "Classic Levi's denim jacket with a rugged look. Worn only a few times, in great condition.",
      productImage:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      seller: {
        name: "Tom Müller",
        location: "Munich, Germany",
        contact: "tom@example.com",
      },
      uploadDate: "2025-03-28",
      tags: ["jacket", "denim", "levi's", "outerwear", "casual"],
    },
    {
      key: "4",
      productName: "Running Shoes",
      brand: "Nike",
      price: 1800,
      condition: "Used - Fair",
      isAvailable: false,
      size: "42",
      color: "Black/White",
      category: "Footwear",
      material: "Mesh/Synthetic",
      description:
        "Comfortable Nike running shoes with good grip. Some wear on the soles, still in usable condition.",
      productImage:
        "https://images.unsplash.com/photo-1600185365000-0a4b1f5a1234",
      seller: {
        name: "Lukas Bauer",
        location: "Cologne, Germany",
        contact: "lukas@example.com",
      },
      uploadDate: "2025-03-15",
      tags: ["nike", "shoes", "running", "sport", "footwear"],
    },
    {
      key: "5",
      productName: "Smart Casual Blazer",
      brand: "H&M",
      price: 1500,
      condition: "Used - Excellent",
      isAvailable: true,
      size: "M",
      color: "Grey",
      category: "Men's Clothing",
      material: "Polyester Blend",
      description:
        "Sharp grey blazer, ideal for smart casual events or office wear. Barely worn, looks new.",
      productImage:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
      seller: {
        name: "Maximilian Roth",
        location: "Frankfurt, Germany",
        contact: "max@example.com",
      },
      uploadDate: "2025-04-01",
      tags: ["blazer", "smart", "office", "fashion", "hm"],
    },
    {
      key: "6",
      productName: "Floral Maxi Dress",
      brand: "Forever 21",
      price: 2200,
      condition: "Used - Like New",
      isAvailable: true,
      size: "S",
      color: "Pink/Floral",
      category: "Women's Clothing",
      material: "Chiffon",
      description:
        "Flowy floral maxi dress perfect for spring/summer events. Worn only once.",
      productImage:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      seller: {
        name: "Elena Fischer",
        location: "Düsseldorf, Germany",
        contact: "elena@example.com",
      },
      uploadDate: "2025-04-07",
      tags: ["dress", "floral", "spring", "fashion", "forever21"],
    },
  ];
  const onSearch = (value: any) => {
    setSearchTerm(value);
  };

  const openModal = (record: any) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const handleDelete = (record: any) => {
    console.log("Delete product:", record);
  };

  const columns: Array<{
    title: string;
    dataIndex?: keyof ColumnRecord;
    key: string;
    render?: (
      text: any,
      record: ColumnRecord,
      index?: number
    ) => React.ReactNode;
  }> = [
    {
      title: "Sl No",
      key: "slno",
      render: (text, record, index = 0) => index + 1,
    },
    {
      title: "Product",
      key: "product",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Avatar size={40} shape="square" src={record?.productImage} />
          <div>
            <p className="font-semibold">{record.productName}</p>
            <p className="text-xs text-gray-500">{record.brand}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `€${price}`,
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
    },
    {
      title: "Availability",
      dataIndex: "isAvailable",
      key: "isAvailable",
      render: (available) => (
        <span
          className={`px-2 py-1 rounded-full text-white text-xs ${
            available ? "bg-green-500" : "bg-red-400"
          }`}
        >
          {available ? "Available" : "Sold Out"}
        </span>
      ),
    },
    {
      title: "Seller",
      key: "seller",
      render: (_, record) => (
        <div>
          <p className="font-medium">{record.seller.name}</p>
          <p className="text-xs text-gray-500">{record.seller.contact}</p>
        </div>
      ),
    },
    {
      title: "Location",
      key: "location",
      render: (_, record) => record.seller.location || "N/A",
    },
    {
      title: "Upload Date",
      dataIndex: "uploadDate",
      key: "uploadDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultHoverBorderColor: "rgb(47,84,235)",
                defaultHoverColor: "rgb(47,84,235)",
                defaultBorderColor: "rgb(47,84,235)",
              },
            },
          }}
        >
          <Space size="middle">
            <button onClick={() => openModal(record)}>
              <MdArrowOutward className="h-5 w-5 bg-green-500 text-white font-bold rounded-md" />
            </button>
            <button onClick={() => handleDelete(record)}>
              <FaTrash className="h-5 w-5 text-red-500  " />
            </button>
          </Space>
        </ConfigProvider>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 mt-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg md:text-xl font-medium mb-4">
          Wishlist History
        </h1>
        <div>
          <Search
            placeholder="Search"
            enterButton
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>

      <div className="bg-white overflow-x-auto">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "rgb(254,241,230)",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={data || []}
            pagination={false}
            rowKey="key"
          />
        </ConfigProvider>
      </div>

      <Modal
      title="Product Details"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col gap-4">
        

        </div>
      </Modal>
    </div>
  );
};

export default WishlistHistory;
