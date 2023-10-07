import React, { useEffect, useState } from "react";

const Policies = () => {
  const [insideDhakaCost, setInsideDhakaCost] = useState();
  const [outsideDhakaCost, setOutsideDhakaCost] = useState();
  const [termsAndCond, setTermsAndCond] = useState("");
  const [returnOrRefund, setReturnOrRefund] = useState("");

  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/get-policies")
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200 && data.success) {
          setInsideDhakaCost(data.info.Inside_Dhaka_Delivery_Cost);
          setOutsideDhakaCost(data.info.Outside_Dhaka_Delivery_Cost);
          setTermsAndCond(data.info.Terms_and_Condition);
          setReturnOrRefund(data.info.Return_and_Refund);
        }
      });
  }, []);

  const handleSaveBtn = () => {
    fetch("https://game-of-nature-backend.vercel.app/update-policy", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Inside_Dhaka_Delivery_Cost: insideDhakaCost,
        Outside_Dhaka_Delivery_Cost: outsideDhakaCost,
        Terms_and_Condition: termsAndCond,
        Return_and_Refund: returnOrRefund,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
      });
    // alert();
  };

  const handleInsideDhkCost = (event) => {
    setInsideDhakaCost(event.target.value);
  };
  const handleOutSideDhkCost = (event) => {
    setOutsideDhakaCost(event.target.value);
  };
  const handleTermsAndCond = (event) => {
    setTermsAndCond(event.target.value);
  };
  const handleRefundOrReturnBlur = (event) => {
    setReturnOrRefund(event.target.value);
  };

  return (
    <div>
      <h1 className="font-mono text-4xl py-10 bg-green-700 text-white">
        Company Policies
      </h1>
      <div>
        {/* Delivery costs */}
        <div className=" bg-slate-100 mb-10 py-5">
          <h1 className=" font-bold text-xl mb-10">Set Delivery costs</h1>
          <div className=" lg:flex md:flex">
            <div class="form-control w-full max-w-xs mx-auto">
              <label class="label">
                <span class="label-text font-bold">Inside Dhaka</span>
              </label>
              <input
                onBlur={handleInsideDhkCost}
                type="text"
                defaultValue={insideDhakaCost}
                placeholder="Amount in BDT."
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs mx-auto">
              <label class="label">
                <span class="label-text font-bold">Outside Dhaka</span>
              </label>
              <input
                onBlur={handleOutSideDhkCost}
                type="text"
                defaultValue={outsideDhakaCost}
                placeholder="Amount in BDT."
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="lg:grid md:grid grid-cols-2 divide-x-2 bg-slate-100">
          {/* Terms and conditions */}
          <div className="bg-slate-100 my-10 py-5">
            <h1 className=" font-bold text-xl mb-10">
              Set the Terms and Conditions
            </h1>
            <div class="form-control w-3/4 mx-auto">
              <label class="label">
                <span class="label-text font-bold">Terms and Conditions</span>
              </label>
              <textarea
                onBlur={handleTermsAndCond}
                defaultValue={termsAndCond}
                class="textarea textarea-bordered h-24"
                placeholder="Write in details"
              ></textarea>
            </div>
          </div>
          {/* Refund or return Policy */}
          <div className="bg-slate-100 my-10 py-5">
            <h1 className=" font-bold text-xl mb-10">
              Set the Refund or Return policy
            </h1>
            <div class="form-control w-3/4 mx-auto">
              <label class="label">
                <span class="label-text font-bold">
                  Refund or Return policy
                </span>
              </label>
              <textarea
                onBlur={handleRefundOrReturnBlur}
                defaultValue={returnOrRefund}
                class="textarea textarea-bordered h-24"
                placeholder="Write in details"
              ></textarea>
            </div>
          </div>
        </div>
        {/*  save button*/}
        <div className="my-5">
          <button onClick={handleSaveBtn} class="btn btn-info px-5 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Policies;
