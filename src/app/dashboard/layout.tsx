"use client";

import { useEffect, useState } from "react";
// import Sidebar from "@/components/Sidebar";
import { ConfigProvider, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/DashboardComponents/Sidebar/Sidebar";
import { AllImages } from "@/assets/AllImages";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drawer, setDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setDrawer(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            footerPaddingInline: 0,
            footerPaddingBlock: 0,
            padding: 0,
            paddingLG: 0,
          },
        },
      }}
    >
      <div className="w-full flex">
        {isMobile ? (
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={() => setDrawer(false)}
            open={drawer}
            width="80%"
            closeIcon={<FaX className="text-black" />}
          >
            <Sidebar closeDrawer={() => setDrawer(false)} />
          </Drawer>
        ) : (
          <div className="pt-5 px-4 bg-white w-[300px] h-screen">
            <div className="h-14 text-primary flex flex-col items-center justify-center">
              {/* <Image
                src={AllImages.logo}
                alt="brandlogo"
                className="h-12 w-12"
              /> */}
              <h1 className="text-2xl font-bold">Waredrobe</h1>
            </div>
            <Sidebar
              closeDrawer={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        )}

        <div className={`flex-1 bg-[#f3f4f6] ${isMobile ? "p-4" : "px-2 py-3"}`}>
          <div className="bg-[#f3f4f6] h-16">
            <div className="h-20 flex justify-between items-center px-2 gap-2">
              {isMobile ? (
                <div className="flex justify-between items-center w-full">
                  <GiHamburgerMenu
                    onClick={() => setDrawer(!drawer)}
                    className="h-5 w-5 cursor-pointer text-white"
                  />
                  <Image
                    src={AllImages.logo}
                    alt="brandlogo"
                    className="h-6 w-6"
                  />
                  <Link href="/notification">
                    <div className="relative">
                      <IoIosNotificationsOutline className="h-10 w-10 bg-white rounded-full text-black p-2" />
                      <span className="bg-green-500 h-5 w-5 rounded-full flex justify-center items-center absolute top-0 right-0 text-white text-xs">
                        1
                      </span>
                    </div>
                  </Link>
                  <Link href="dashboard/admin-profile">
                    <Image
                      src={AllImages.user}
                      alt="AllImages.user"
                      className="h-8 w-8 rounded-full"
                    />
                  </Link>
                </div>
              ) : (
                <div className="w-full flex justify-between items-center">
                  <Link href="dashboard/admin-profile">
                    <div className="flex justify-center items-center gap-2">
                      <Image
                        src={AllImages.user}
                        alt="AllImages.user"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm text-primary">Welcome</p>
                        <h1 className="text-lg font-bold">Mr Robert</h1>
                      </div>
                    </div>
                  </Link>
                  <Link href="/notification">
                    <div className="relative">
                      <IoIosNotificationsOutline className="h-10 w-10 bg-white rounded-full text-black p-2" />
                      <span className="bg-red-500 h-5 w-5 rounded-full flex justify-center items-center absolute top-0 right-0 text-white text-xs">
                        1
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default DashboardLayout;
