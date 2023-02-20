import { React, createContext, useState } from "react";
import useLocalStorage from "use-local-storage";
import { generate } from "short-uuid";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [tableData, setTableData] = useLocalStorage("users", [
    {
      username: "",
      date: "",
      aadhar: "",
      mobile: "",
      age: "",
      id: generate(),
      saved: false,
    },
  ]);
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  return (
    <UserContext.Provider
      value={{
        tableData,
        setTableData,
        username,
        setUsername,
        date,
        setDate,
        aadhar,
        setAadhar,
        mobile,
        setMobile,
        age,
        setAge,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
