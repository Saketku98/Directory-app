import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./MainBody.css";
import { generate } from "short-uuid";
import RetrieveInfo from "../RetrieveInfo/RetrieveInfo";
import MainContent from "../MainContent/MainContent";

const MainBody = () => {
  const [isRetrieveInfo, setIsRetrieveInfo] = useState(false);
  const { setTableData, setUsername, setDate, setAadhar, setMobile, setAge } =
    useContext(UserContext);

  const addRow = () => {
    if (isRetrieveInfo) {
      setIsRetrieveInfo(false);
    } else {
      setUsername("");
      setDate("");
      setAadhar("");
      setMobile("");
      setAge("");
      setTableData((prevValue) => {
        return [
          ...prevValue,
          {
            username: "",
            date: "",
            aadhar: "",
            mobile: "",
            age: "",
            id: generate(),
            saved: false,
          },
        ];
      });
    }
  };

  const deleteRow = (row) => {
    setTableData((prevValue) => {
      const index = prevValue.findIndex((item) => item.id === row.id);
      prevValue.splice(index, 1);
      return [...prevValue];
    });
  };

  return (
    <div className="main-body">
      <div className="btns">
        <button onClick={addRow}>Add New Person</button>
        <button
          onClick={() => {
            setIsRetrieveInfo(true);
          }}
        >
          Retrieve Information
        </button>
      </div>
      {isRetrieveInfo ? (
        <RetrieveInfo />
      ) : (
        <MainContent deleteRow={deleteRow} />
      )}
    </div>
  );
};

export default MainBody;
