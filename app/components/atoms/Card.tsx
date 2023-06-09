import React from "react";

interface CardProps {
  imageComp: any;
  contentComp: any;
}

const Card = ({ imageComp, contentComp }: CardProps) => {
  return (
    <>
      <div className="transition duration-300 hover:scale-105">
        <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
          <div className="flex-shrink-0">{imageComp}</div>

          <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
            <div className="flex-1">{contentComp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
