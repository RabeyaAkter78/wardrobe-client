"use client";
import { Upload, ConfigProvider, Input, Form, message } from "antd";
import { useEffect, useState } from "react";
import { FaCamera, FaLockOpen } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
// import {
//   useChnagePasswordMutation,
//   useGetAdminProfileQuery,
//   useUpdateAdminProfileMutation,
//   useUpdateProfileImageMutation,
// } from "../../redux/features/adminProfileApi/adminProfileApi";
// import { BASE_URL } from "../../utils/baseUrl";
import { FaCheck } from "react-icons/fa6";
import { error } from "console";
import Image from "next/image";

interface userData {
  fullName: string;
  email: string;
  image?: string;
}

const AdminProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [uploadProfilePic, setUploadProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [form] = Form.useForm();
  const [adminId, setAdminId] = useState<string | null>(null);
  const [userData, setUserData] = useState<userData | null>(null);
  const [currentPassword, setCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const { data: adminProfile, refetch } = useGetAdminProfileQuery(
//     localStorage.getItem("_id")
//   );
  // const { data: adminProfile, refetch } = useGetAdminProfileQuery(adminId);
//   const [updateAdminProfile] = useUpdateAdminProfileMutation();
//   const [chnagePassword] = useChnagePasswordMutation();
//   const [updateProfileImage] = useUpdateProfileImageMutation();
//   console.log("userData", adminProfile?.data);

  useEffect(() => {
    const _id = localStorage.getItem("_id");
    if (_id) {
      setAdminId(_id as string);
    } else {
      message.error("Please login first");
    }
  }, []);

//   useEffect(() => {
//     const data = adminProfile?.data;
//     if (data) {
//       form.setFieldsValue({
//         name: data?.fullName,
//         email: data?.email,
//       });
//       setUserData(data);
//     }
//   }, [form, adminProfile]);

  const togglePasswordVisibility = (type: any) => {
    if (type === "current") setCurrentPassword(!currentPassword);
    else if (type === "new") setShowNewPassword(!showNewPassword);
    else setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const onChangePassword = async (values: any) => {
    const data = {
      email: userData?.email,
      oldPassword: values?.currentPassword,
      newPassword: values?.newPassword,
    };
    console.log(data);
    const confirmPassword = values?.confirmPassword;
    try {
      if (data.newPassword !== confirmPassword) {
        message.error("Passwords do not match!");
      } else {
        // const response = await chnagePassword(data).unwrap();
        // console.log(response);
        message.success("Password changed successfully!");
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to change password!");
    }
  };

  // update profile
  const handleUpdateProfile = async (values: any) => {
    // try {
    //   const data = {
    //     fullName: values?.name,
    //   };
    //   const response = await updateAdminProfile({
    //     _id: adminId,
    //     data,
    //   }).unwrap();
    //   console.log(response);
    //   toggleEditMode();
    //   refetch();
    //   message.success("Profile updated successfully!");
    // } catch (error) {
    //   console.log(error);
    //   message.error("Failed to update profile!");
    // }
  };

  // console.log('uploadProfilePic', uploadProfilePic);

  // update profile image
  const handleUpdateProfileImage = async (file: any) => {
    console.log(file);
    // try {
    //   const formData = new FormData();
    //   formData.append("image", file);
    //   console.log("formData", formData);
    //   const response = await updateProfileImage({
    //     _id: adminId,
    //     data: formData,
    //   }).unwrap();
    //   console.log("response from update profile image", response);

    //   console.log("response", response);
    //   message.success("Profile image updated successfully!");
    // } catch (error) {
    //   if (error instanceof Error) {
    //     console.log(error.message);
    //     message.error("Failed to update profile image!");
    //   } else {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <div className="mx-2">
      {/* Profile Header */}
      <div className="flex flex-col justify-center items-center py-5">
        <div className="flex flex-col items-center text-center mb-10 py-6 bg-white w-full">
          <div className="relative">
            <Image
              alt="profile"
              height={100}
                width={100}
              src=""
              className="border border-neutral-600 shadow-xl h-28 w-28 rounded-full"
            />

            {isEditing && (
              <Upload
                showUploadList={false}
                onChange={(info) => {
                  const file = info.file;
                  console.log("file", file);
                  if (file) {
                    // setProfilePic(file);
                    // setUploadProfilePic(file);
                    // setProfilePic(URL.createObjectURL(file));
                    // handleUpdateProfileImage(file);
                  }
                }}
                beforeUpload={(file) => {
                //   setProfilePic(URL.createObjectURL(file));
                  // handleUpdateProfileImage(file);
                  return false;
                }}
                className="absolute bottom-2 right-2 bg-primary px-2 py-1 rounded-full cursor-pointer"
              >
                {/* <FaCamera className="text-white" /> */}
                {uploadProfilePic ? (
                  <FaCheck className="text-white" />
                ) : (
                  <FaCamera className="text-white" />
                )}
              </Upload>
            )}
          </div>
          {/* <h1 className="text-4xl font-bold my-6">{userData.fullName}</h1> */}
          <h1 className="text-4xl font-bold my-6">Mr Admin</h1>
        </div>
      </div>

      {/* Tabs for Edit Profile and Change Password */}
      <div className="my-6 flex justify-center items-center gap-5 text-xl font-semibold">
        <p
          onClick={() => setActiveTab("Edit Profile")}
          className={`cursor-pointer ${
            activeTab === "Edit Profile"
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-gray-500"
          }`}
        >
          Edit Profile
        </p>
        <p
          onClick={() => setActiveTab("Change Password")}
          className={`cursor-pointer ${
            activeTab === "Change Password"
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-gray-500"
          }`}
        >
          Change Password
        </p>
      </div>

      {/* Content based on active tab */}
      {activeTab === "Edit Profile" && (
        <div className="p-5 bg-white shadow-md rounded-md">
          <div className="flex items-center justify-center">
            <p className="text-center font-bold text-xl my-6 text-gray-700">
              Edit your Profile
            </p>
            <button
              onClick={toggleEditMode}
              className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 ml-3"
            >
              {isEditing ? (
                <MdOutlineCancel className="h-6" />
              ) : (
                <FaUserEdit className="h-6" />
              )}
            </button>
          </div>
          {!isEditing ? (
            <div className="w-[40%] mx-auto">
              <p className="text-md mb-2">
                <strong>Name:</strong> Mr Admin
              </p>
              <p className="text-md mb-2 flex gap-2">
                <strong>Email:</strong> {userData?.email}
              </p>
            </div>
          ) : (
            <ConfigProvider>
              <Form
                form={form}
                // initialValues={userData}
                onFinish={handleUpdateProfile}
                layout="vertical"
                style={{ maxWidth: 800 }}
                className="mx-auto"
              >
                <Form.Item name="name" label={<p className="text-md">Name</p>}>
                  <Input required placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="contact"
                  label={<p className="text-md">Email</p>}
                >
                  <Input placeholder={userData?.email} />
                </Form.Item>

                <Form.Item className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-10 py-2 rounded-md shadow-lg"
                  >
                    Save Changes
                  </button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          )}
        </div>
      )}

      {activeTab === "Change Password" && (
        <div className="p-5 bg-white shadow-md rounded-md">
          <p className="text-center font-bold text-xl my-6 text-gray-700">
            Change your Password
          </p>
          <ConfigProvider>
            <Form
              onFinish={onChangePassword}
              layout="vertical"
              style={{ maxWidth: 800 }}
              className="mx-auto"
            >
              <Form.Item
                name="currentPassword"
                label={<p className="text-md">Current Password</p>}
              >
                <div className="relative">
                  <Input
                    type={currentPassword ? "text" : "password"}
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("current")}
                    className="absolute right-2 top-2"
                  >
                    {currentPassword ? <FaLockOpen /> : <IoIosLock />}
                  </button>
                </div>
              </Form.Item>

              <Form.Item
                name="newPassword"
                label={<p className="text-md">New Password</p>}
              >
                <div className="relative">
                  <Input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute right-2 top-2"
                  >
                    {showNewPassword ? <FaLockOpen /> : <IoIosLock />}
                  </button>
                </div>
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label={<p className="text-md">Confirm Password</p>}
              >
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-2 top-2"
                  >
                    {showConfirmPassword ? <FaLockOpen /> : <IoIosLock />}
                  </button>
                </div>
              </Form.Item>

              <Form.Item className="text-center">
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white px-10 py-2 rounded-md shadow-lg hover:bg-pink-600"
                >
                  Save Changes
                </button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
