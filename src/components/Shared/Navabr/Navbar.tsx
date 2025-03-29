"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, Drawer, Dropdown, Modal } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { AllImages } from "@/assets/AllImages";
import NotificationModal from "@/components/Modals/NotificationModal";

interface MenuItem {
  key: string;
  label: JSX.Element;
}

interface NavItem {
  name: string;
  link?: string;
  icon?: JSX.Element;
}

const NavBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  console.log("isLogin", isLogin);
  const router = useRouter();

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLogin");
    if (storedLoginState) {
      setIsLogin(storedLoginState === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    router.push("/");
  };

  const [isModalOpenForNotification, setIsModalOpenForNotification] =
    useState<boolean>(false);

  const showModalForNotification = () => setIsModalOpenForNotification(true);
  const handleOkForNotification = () => setIsModalOpenForNotification(false);
  const handleCancelForNotification = () =>
    setIsModalOpenForNotification(false);

  const beforeLoginLabels: NavItem[] = [
    { name: "Discover", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Help", link: "/help" },
  ];

  const labels: NavItem[] = [
    { name: "Discover", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Help", link: "/help" },
  ];

  return (
    <nav className="w-full my-6 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={AllImages.logo}
            alt="logo"
            height={0}
            width={0}
            className="lg:h-11 h-16 w-auto rounded-full"
          />
          <p className="mb-0 text-2xl lg:text-3xl font-bold">
            War<span className="text-primary">Drobe</span>
          </p>
        </Link>

        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          {(isLogin ? labels : beforeLoginLabels).map((item, index) => (
            <Link
              href={item.link!}
              key={index}
              className="text-lg font-medium hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          {isLogin ? (
            <div className="flex items-center space-x-4">
              <Link href="/favourites">
                <CiHeart className="h-5 w-5 cursor-pointer" />
              </Link>
              <IoIosNotificationsOutline
                onClick={showModalForNotification}
                className="cursor-pointer h-5 w-5"
              />
              <Link href="/message">
                <AiOutlineMessage className="h-5 w-5" />
              </Link>
              <Link href="/user-profile-page">
                <Image
                  src={AllImages.logo}
                  alt="user"
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full"
                />
              </Link>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-primary text-white px-10 py-3 rounded-md shadow-lg"
              >
                Log In
              </button>
              <Link href="/sign-up">
                <button className="border border-primary text-primary px-10 py-3 rounded-md shadow-lg">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <Button
            icon={<RxHamburgerMenu className="text-black text-2xl" />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      </div>

      <Drawer
        title=""
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <div className="flex flex-col items-center space-y-4">
          {(isLogin ? labels : beforeLoginLabels).map((item, index) => (
            <Link
              href={item.link!}
              key={index}
              className="text-lg font-medium hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
          {isLogin ? (
            <div className="flex flex-col justify-center items-center  gap-2">
              <Link href="/favourites">
                <CiHeart className="h-5 w-5 cursor-pointer" />
              </Link>
              <IoIosNotificationsOutline
                onClick={showModalForNotification}
                className="cursor-pointer h-5 w-5"
              />
              <Link href="/message">
                <AiOutlineMessage className="h-5 w-5" />
              </Link>
              <Link href="/user-profile-page">
                <Image
                  src={AllImages.logo}
                  alt="user"
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full"
                />
              </Link>
              <button onClick={handleLogout} className=" font-bold">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-primary text-white px-10 py-3 rounded-md shadow-lg"
              >
                Log In
              </button>
              <Link href="/sign-up">
                <button className="border border-primary text-primary px-10 py-3 rounded-md shadow-lg">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </Drawer>

      <Modal
        open={isModalOpenForNotification}
        onOk={handleOkForNotification}
        onCancel={handleCancelForNotification}
        footer={null}
      >
        <NotificationModal
        // handleCancel={handleCancelForNotification}
        // handleOk={handleOkForNotification}
        />
      </Modal>
    </nav>
  );
};

export default NavBar;
