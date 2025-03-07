import React from 'react';
import logo from "../images/logo/LE_SSERAFIM_logo.png";

const MemberDetailsHeader = () => {

  return (
      <header id="home" className="text-center text-white bg-dark py-5">
        <div className="container py-5">
          <h1 className="display-4">Member Details</h1>
          <img src={logo} alt="LE SSERAFIM" className="img-fluid" style={{ width: "350px" }} />
        </div>
      </header>
  );
};

export default MemberDetailsHeader;
