import React, { useEffect, useState } from "react";

const PolicyPage = () => {
  const [termsAndCond, setTermsAndCond] = useState("");
  const [refundAndReturn, setRefundAndReturn] = useState("");

  useEffect(() => {
    fetch(`https://game-of-nature-backend.vercel.app/get-policies`)
      .then((res) => res.json())
      .then((data) => {
        setTermsAndCond(data.info.Terms_and_Condition);
        setRefundAndReturn(data.info.Return_and_Refund);
      });
  }, []);

  return (
    <div>
      {window.location.pathname.endsWith("terms&Conditions") ? (
        <div className="py-20 px-48 h-80">
          <h1 className="text-left font-bold text-lg mb-3">
            Terms & Conditions
          </h1>
          <p className=" text-justify">{termsAndCond}</p>
        </div>
      ) : (
        <div className="py-20 px-48 h-80">
          <h1 className="text-left font-bold text-lg mb-3">
            Return or Refund policy
          </h1>
          <p className=" text-justify">{refundAndReturn}</p>
        </div>
      )}
    </div>
  );
};

export default PolicyPage;
