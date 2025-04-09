"use client";
import { Form, Input, InputNumber, Select, Upload } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const AddProdict = () => {
  const [form] = Form.useForm();
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleProfilePicUpload = (e: any) => {
    setProfilePic(e.file.originFileObj);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <Form
        name="add-product"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <div className="border-dashed border-2 p-2 flex flex-col justify-center items-center w-full ">
          <Upload
            showUploadList={false}
            maxCount={1}
            beforeUpload={(file) => {
              const previewUrl = URL.createObjectURL(file);
              setProfilePic(previewUrl);
              form.setFieldsValue({ img: [file] });
              //   setProfilePic(file.name);
              return false;
            }}
            className="text-primary px-2 py-1 rounded-full cursor-pointer"
          >
            <CiImageOn className="text-primary h-10 w-10" />
          </Upload>
          <p className="mt-2 text-sm text-gray-700">
            {profilePic ? profilePic : "No file uploaded"}
          </p>
          {profilePic && (
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="h-20 w-40  mt-2"
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="flex justify-between gap-2">
          <Form.Item
            name="productName"
            label={<p className=" text-md">Product Name</p>}
            className="w-full"
          >
            <Input
              required
              style={{ padding: "6px" }}
              className=" text-md"
              placeholder="Product Name"
            />
          </Form.Item>
          <Form.Item
            name="sellerName"
            label={<p className=" text-md">Seller Name</p>}
            className="w-full"
          >
            <Input
              required
              style={{ padding: "6px" }}
              className=" text-md"
              placeholder="Seller Name"
            />
          </Form.Item>
        </div>
        <div className="flex justify-between gap-2">
          <Form.Item
            name="productCategory"
            label={<p className=" text-md">Product Category</p>}
            className="w-full"
          >
            <Input
              required
              style={{ padding: "6px" }}
              className=" text-md"
              placeholder="Product Category"
            />
          </Form.Item>
          <Form.Item
            name="selelrEmail"
            label={<p className=" text-md">Seller Email</p>}
            className="w-full"
          >
            <Input
              required
              style={{ padding: "6px" }}
              className=" text-md"
              placeholder="Seller Email"
            />
          </Form.Item>
        </div>
        <div className="flex justify-between gap-2">
          <Form.Item
            name="productCondition"
            label={<p className=" text-md">Product Condition</p>}
            className="w-full"
          >
            <Select placeholder="Product Condition">
              <Select.Option value="new">New</Select.Option>
              <Select.Option value="used">Used</Select.Option>
              <Select.Option value="refurbished">Refurbished</Select.Option>
              <Select.Option value="likeNew">Like New</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="productPrice"
            label={<p className=" text-md">Product Price</p>}
            className="w-full"
          >
            <InputNumber
              required
              style={{ width: "100%" }}
              className=" text-md"
              placeholder="Product Price"
            />
          </Form.Item>
        </div>
        <Form.Item
          name="productDescription"
          label={<p className=" text-md">Product Description</p>}
          className="w-full"
        >
          <Input.TextArea
            required
            rows={4}
            style={{ padding: "6px", width: "100%" }}
            className=" text-md"
            placeholder="Product Description"
          />
        </Form.Item>
        <Form.Item name="submit">
          <button
            type="submit"
            className=" w-full bg-primary text-white    px-10 py-2 rounded-md shadow-lg "
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProdict;
