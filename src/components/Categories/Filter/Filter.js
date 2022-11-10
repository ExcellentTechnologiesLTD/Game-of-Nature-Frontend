import React from "react";

const Filter = () => {
  return (
    <div id="filter" className="">
      <div className=" w-56">
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div class=" flex justify-start collapse-title">
            Availability
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="collapse-content">
            <div class="form-control gap-2">
              <label class="flex justify-start items-center gap-4">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">In-Stock</span>
              </label>
              <label class="flex justify-start items-center gap-4">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">Out-of-Stock</span>
              </label>
            </div>
          </div>
        </div>
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div class=" flex justify-start collapse-title">
            Price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="collapse-content">
            <div class="form-control gap-2">
              <label class="flex justify-start items-center gap-4">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">In-Stock</span>
              </label>
              <label class="flex justify-start items-center gap-4">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">Out-of-Stock</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
