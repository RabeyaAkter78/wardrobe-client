"use client";
import { IoArrowBackOutline } from "react-icons/io5";

interface DashboardSectionTitleProps {
  title: string;
  subtitle: string;
}
const DashboardSectionTitle: React.FC<DashboardSectionTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex justify-start items-center gap-2">
       <IoArrowBackOutline onClick={() => window.history.back()}  className="h-8 w-8 "/>
      <div className="">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1 className=" ">{subtitle}</h1>
      </div>
    </div>
  );
};

export default DashboardSectionTitle;
