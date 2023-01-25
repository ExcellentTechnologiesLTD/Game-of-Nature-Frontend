import React, { useEffect, useState } from "react";

const ManageVouchers = () => {
  const [voucherName, setVoucherName] = useState("");
  const [voucherAmount, setVoucherAmount] = useState(0);

  const [vouchers, setVouchers] = useState([]);
  const [statusChanged, setStatusChanged] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleVoucherNameBlur = (e) => {
    setVoucherName(e.target.value);
  };
  const handleVoucherAmountBlur = (e) => {
    setVoucherAmount(e.target.value);
  };

  const handleActivateVoucherBtn = (e) => {
    e.preventDefault();
    const voucherData = {
      voucherName: voucherName,
      voucherAmount: voucherAmount,
    };
    // console.log(voucherData);
    fetch("http://game-of-nature-backend.vercel.app/add-voucher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        voucherName: voucherName,
        voucherAmount: voucherAmount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200 && data.success) {
          alert(data.msg);
          window.location.reload(true);
        }
      });
  };

  const handleChangeStatusBtn = (voucherID, status) => {
    // console.log(voucherID, " ", status);
    fetch(`http://game-of-nature-backend.vercel.app/changestatus-voucher`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        voucherID: voucherID,
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200 && data.success) {
          setStatusChanged(!statusChanged);
        }
      });
  };

  const handleDeleteVoucher = (voucherID) => {
    console.log("voucherID:", voucherID);
    const deleteVoucherconfirm = window.confirm(
      "Are you sure you want to delete this voucher?"
    );
    if (deleteVoucherconfirm) {
      fetch(
        `http://game-of-nature-backend.vercel.app/delete-voucher/${voucherID}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 200 && data.success) {
            setDeleted(!deleted);
          } else {
            alert(data.msg);
          }
        });
    }
  };

  useEffect(() => {
    fetch("http://game-of-nature-backend.vercel.app/getall-vouchers")
      .then((res) => res.json())
      .then((data) => setVouchers(data));
  }, [statusChanged, deleted]);

  return (
    <div>
      <h1 className=" font-mono text-4xl py-10 bg-green-700 text-white ">
        Voucher Management
      </h1>
      <div className="flex justify-center my-10 text-lg">
        {/* Modal Button */}
        <label
          htmlFor="my-modal"
          className="bg-green-600 text-white px-10 py-3 rounded-lg gap-2 flex w-60 justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add Voucher
        </label>
        {/* Modal info */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-slate-200">
            <h3 className="font-bold text-lg mb-5">Add a voucher</h3>
            <form
              onSubmit={(e) => {
                handleActivateVoucherBtn(e);
              }}
              className=" px-10 grid grid-cols-1 gap-3 items-center justify-center"
            >
              <input
                type="text"
                placeholder="Voucher Name"
                onBlur={handleVoucherNameBlur}
                className="input"
              />
              <input
                type="text"
                onBlur={handleVoucherAmountBlur}
                placeholder="Voucher Amount"
                className="input w-full"
              />
              <input
                className=" normal-case text-base btn w-40 mx-auto mt-4"
                type="submit"
                value="Activate"
              />
            </form>
          </div>
        </div>
      </div>
      {/* Active vouchers */}
      <div className="lg:w-3/5 mx-auto">
        <h1 className="text-left text-xl font-semibold mb-3 ml-5">
          Active Vouchers
        </h1>
        <div className="overflow-x-auto rounded-2xl">
          <table className="table w-full border-2 mb-10 text-center">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Voucher Name</th>
                <th>Discount Amount</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {vouchers.map((voucher, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{voucher.voucher_name}</td>
                  <td>{voucher.discount_amount}</td>
                  <td>{voucher.isActive ? "Active" : "Inactive"}</td>
                  <td className="grid grid-cols-1 w-40">
                    {voucher.isActive ? (
                      <button
                        onClick={() => {
                          handleChangeStatusBtn(
                            voucher.voucher_id,
                            !voucher.isActive
                          );
                        }}
                        className="px-5 py-1 bg-red-600 hover:bg-red-700 rounded-xl text-white"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleChangeStatusBtn(
                            voucher.voucher_id,
                            !voucher.isActive
                          );
                        }}
                        className="px-5 py-1 bg-green-600 rounded-xl text-white"
                      >
                        Activate
                      </button>
                    )}

                    <button
                      onClick={() => {
                        handleDeleteVoucher(voucher.voucher_id);
                      }}
                      className="hover:text-red-500 hover:underline mt-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {vouchers.length > 0 ? (
            <></>
          ) : (
            <div className="mb-10">
              <h1>No voucher available.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageVouchers;
