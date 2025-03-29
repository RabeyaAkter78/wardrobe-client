import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/Navabr/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
