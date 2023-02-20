import React from "react";
const SingleRetrievedUser = ({ item }) => {
  const { username, date, aadhar, mobile, age } = item;
  return (
    <div className="single-user-card">
      <div className="single-card-left-section">
        <span>Name:</span>
        <span>DOB:</span>
        <span>Aadhar:</span>
        <span>Mobile No:</span>
        <span>Age:</span>
      </div>
      <div className="single-card-right-section">
        <span>{username}</span>
        <span>{date}</span>
        <span>{aadhar}</span>
        <span>{mobile}</span>
        <span>{age}</span>
      </div>
    </div>
  );
};

export default SingleRetrievedUser;
