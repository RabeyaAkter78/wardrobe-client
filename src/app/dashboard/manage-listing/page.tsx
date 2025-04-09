"use client";
import AddProdict from "@/components/DashboardComponents/Sidebar/DashboardPageComponents/AddProdict";
import ListedProducts from "@/components/DashboardComponents/Sidebar/DashboardPageComponents/ListedProducts";
import DashboardSectionTitle from "@/components/Shared/SectionTitle/DashboardSectionTitle";
import { Modal } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ManageListingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (data: any) => {
    console.log(data);
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-2 ">
        <DashboardSectionTitle
          title="Manage Listing"
          subtitle="Manage your listing and update your listing."
        />

        <button
          onClick={handleOpenModal}
          className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaPlus />
          Add New
        </button>
      </div>

      <div className="my-5 ">
        <ListedProducts />
      </div>

      <Modal open={isModalOpen} onCancel={handleCloseModal} title="Add New Product" footer={null} width={800}>
        <AddProdict />
      </Modal>
    </div>
  );
};

export default ManageListingPage;
