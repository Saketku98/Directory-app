import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import SingleRetrievedUser from "../SingleRetrievedUser/SingleRetrievedUser";

const RetrieveInfo = () => {
  const [inputVal, setInputVal] = useState("");
  const [displayCards, setDisplayCards] = useState([]);

  const findUser = () => {
    let newArr = tableData.filter((item) => {
      if (item.aadhar.includes(inputVal)) {
        return true;
      }
      return false;
    });
    setDisplayCards([...newArr]);
  };
  const { tableData } = useContext(UserContext);
  return (
    <div className="main-content">
      <h2>Retrieve Information</h2>
      <div className="retrieve-input">
        <div className="input-field">
          <input
            type="number"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            className=""
          />
          <button onClick={findUser}>Find</button>
        </div>
        <div className="cards">
          {displayCards.map((item) => {
            return <SingleRetrievedUser key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RetrieveInfo;
