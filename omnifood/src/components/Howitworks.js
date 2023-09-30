import React from "react";

const Howitworks = () => {
  return (
    <div className="bg-white-100">
      <div className="flex flex-row">
        <div className="basis-1/2 mx-10 my-10">
          <div className="text-white-700 font-bold text-6xl pt-10 pl-5">
            A healthy meal delivered to your door, every single day
          </div>
          <div className="text-gray-900 text-2xl pt-7 pl-5">
            The smart 365-days-per-year{" "}
            <span className="text-orange-500 font-semibold">
              food subscription
            </span>{" "}
            that will make you eat healthy again. Tailored to your personal
            tastes and nutritional needs.
          </div>
        </div>
        <div className="basis-1/2">
          <div className=" h-48 w-56 mt-8 ml-48">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80" />
          </div>
          <div className=" h-20 w-64 ">
            <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" />
          </div>
          <div className="h-56 w-56 ml-64">
            <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
