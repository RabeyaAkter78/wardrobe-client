/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { FaBook, FaUser, FaMoneyCheckAlt, FaEdit } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { MdDashboard, MdPolicy } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";

interface SidebarProps {
  closeDrawer: () => void;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  link?: string;
  isDropdown?: boolean;
  subItems?: { label: string; link: string; icon?: JSX.Element }[];
}

const Sidebar: React.FC<SidebarProps> = ({ closeDrawer }) => {
  const [active, setActive] = useState<string>("Dashboard");
  const [openDropdown, setOpenDropdown] = useState<string>("");
  const router = useRouter();

  const handleActiveRoute = (item: string) => {
    setActive(item);
    setOpenDropdown("");
  };

  const handleSubItemClick = (subItem: string, link: string) => {
    setActive(subItem);
    closeDrawer();
    router.push(link);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? "" : label);
  };

  const menuItems: MenuItem[] = [
    {
      icon: <MdDashboard className="h-5 w-5 text-primary" />,
      label: "Dashboard",
      link: "/",
    },
    {
      icon: <FaBook className="h-5 w-5 text-primary" />,
      label: "Order & Booking",
      isDropdown: true,
      subItems: [
        { label: "Scheduled", link: "/scheduled" },
        { label: "Completed", link: "/completed" },
      ],
    },
    {
      icon: <FaMoneyCheckAlt className="h-5 w-5 text-primary" />,
      label: "Payments",
      link: "/payments",
    },
    {
      icon: <FaUser className="h-5 w-5 text-primary" />,
      label: "User Management",
      isDropdown: true,
      subItems: [
        {
          icon: <FaEdit className="h-5 w-5 text-primary" />,
          label: "User Profile",
          link: "/user-profile",
        },
        {
          icon: <MdPolicy className="h-5 w-5 text-primary" />,
          label: "Artist Profile",
          link: "/artist-profile",
        },
        {
          icon: <GrAnalytics className="h-5 w-5 text-primary" />,
          label: "Business Profile",
          link: "/business-profile",
        },
      ],
    },
  ];

  return (
    <div className="bg-white h-full md:ml-16">
      <div className="flex flex-col md:h-full">
        <div className="flex flex-col gap-2 md:my-5 mb-10">
          {menuItems.map((item) => (
            <div key={item.label}>
              <div
                className={`w-72 flex justify-between items-center px-5 py-2 cursor-pointer  ${
                  active === item.label
                    ? "bg-black text-primary font-semibold"
                    : "bg-white text-black font-semibold"
                }`}
                onClick={() =>
                  item.isDropdown
                    ? toggleDropdown(item.label)
                    : handleActiveRoute(item.label)
                }
              >
                {item.link ? (
                  <Link href={item.link}>
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <p>{item.label}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p>{item.label}</p>
                    {item.isDropdown && (
                      <BiChevronDown
                        className={`transform transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                )}
              </div>
              {item.isDropdown && openDropdown === item.label && (
                <div className="flex flex-col">
                  {item.subItems?.map((subItem) => (
                    <div
                      key={subItem.label}
                      className={`py-2 px-5 cursor-pointer  ${
                        active === subItem.label
                          ? "text-white bg-primary font-bold"
                          : "text-black bg-[#efe5c4]"
                      }`}
                      onClick={() =>
                        handleSubItemClick(subItem.label, subItem.link)
                      }
                    >
                      <p className="flex items-center gap-2 ml-10">
                        {subItem.icon}
                        {subItem.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div
            className="bg-primary w-72 md:mt-20 py-3 flex justify-center items-center cursor-pointer hover:bg-primary text-white"
            onClick={() => console.log("Logged out")}
          >
            <FiLogOut className="text-xl" />
            <p className="ml-2">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
