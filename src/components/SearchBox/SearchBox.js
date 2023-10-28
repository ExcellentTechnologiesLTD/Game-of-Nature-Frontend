import React, { useEffect, useState } from "react";

const SearchBox = ({ placeholder, ClassNames }) => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const searchValue = e.target.value;
    setSearchItem(e.target.value);
    const filteredArray = data.filter((val) => {
      return val.product_name.toLowerCase().includes(searchItem.toLowerCase());
    });

    if (searchValue === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredArray);
    }
  };

  return (
    <div className="w-full px-2">
      {/* search bar */}
      <div>
        <input
          className="w-full border-2 px-3 py-2 border-green-200"
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </div>
      {/* Search result */}
      {filteredData?.length != 0 && (
        <div
          // className={` absolute lg:w-2/5 w-11/12  ${
          className={` absolute lg:w-2/5 w-full ${
            filteredData?.length > 5 ? "h-60" : `h-30`
          }
           overflow-auto bg-green-200 rounded-b-xl`}
        >
          {filteredData.map((i) => (
            <a
              key={i.product_id}
              href={`/item-details/${i.product_id}`}
              className="hover:bg-base-100 flex items-center gap-2 mb-1 p-2"
            >
              <figure>
                <img className="w-16" src={i.photo_url} alt="" />
              </figure>
              <div className="grid grid-cols-1 text-left w-full">
                <h1 className="flex justify-between text-xl">
                  <span>{i.product_name}</span>{" "}
                  <span className=" font-sans  text-base">BDT. {i.price}</span>
                </h1>
                <small className="text-2xs">{i.category}</small>
              </div>
            </a>
          ))}

          {/* {filteredData.map((i) => console.log(i.product_name))} */}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
