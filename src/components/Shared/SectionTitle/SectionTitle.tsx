import React from 'react';


interface SectionTitleProps {
    title: string;
    subtitle: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({title,subtitle}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center mb-5 md:mb-10">
            <h2 className="text-3xl font-bold  mb-4">{title}</h2>
            <p className="text-lg text-gray-600 ">{subtitle}</p>
            <div className="w-1/4 border-b-2 border-primary mt-2"></div>
        </div>
    );
};

export default SectionTitle;