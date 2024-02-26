import React from "react";

const DropList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold"> Drop your items</h2>
      <div className="h-12 w-full rounded-xl border border-gray-300"></div>
    </div>
  );
};

export default DropList;
