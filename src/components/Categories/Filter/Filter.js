import React from "react";

const Filter = () => {
  return (
    <div id="filter" className=" bg-slate-200 rounded-xl ">
      <div className=" w-52">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className=" flex justify-start collapse-title">
            Availability{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>{" "}
          </div>{" "}
          <div className="collapse-content">
            <div className="form-control gap-2">
              <label className="flex justify-start items-center gap-4">
                <input type="checkbox" className="checkbox" />
                <span className="label-text"> In-Stock </span>{" "}
              </label>{" "}
              <label className="flex justify-start items-center gap-4">
                <input type="checkbox" className="checkbox" />
                <span className="label-text"> Out-of-Stock </span>{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className=" flex justify-start collapse-title">
            Price{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>{" "}
          </div>{" "}
          <div className="collapse-content">
            <div className="form-control gap-2">
              <label className="flex justify-start items-center gap-4">
                <input type="checkbox" className="checkbox" />
                <span className="label-text"> In-Stock </span>{" "}
              </label>{" "}
              <label className="flex justify-start items-center gap-4">
                <input type="checkbox" className="checkbox" />
                <span className="label-text"> Out-of-Stock </span>{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Filter;
