import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const TableRow = ({ row, onDelete }) => {
  const {
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
  } = useContext(UserContext);

  const onSave = (row) => {
    if (
      username === "" ||
      date === "" ||
      aadhar === "" ||
      mobile === "" ||
      age === ""
    ) {
      alert("Fill all the inputs!");
    } else if (aadhar.length !== 12) {
      alert("Aadhar Number should be 12 digits long.");
    } else if (mobile.length !== 10) {
      alert("Mobile Number should be 10 digits long.");
    } else {
      setTableData((prevValue) => {
        const index = prevValue.findIndex((item) => item.id === row.id);
        prevValue.splice(index, 1, {
          username: username,
          date: date,
          aadhar: aadhar,
          mobile: mobile,
          age: age,
          id: row.id,
          saved: true,
        });
        return [...prevValue];
      });
    }
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={row.saved ? row.username : username}
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
      </td>
      <td>
        <input
          type="date"
          value={row.saved ? row.date : date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={row.saved ? row.aadhar : aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          maxLength="12"
          // required
        />
      </td>
      <td>
        <input
          type="number"
          value={row.saved ? row.mobile : mobile}
          onChange={(e) => setMobile(e.target.value)}
          // required
        />
      </td>

      <td>
        <input
          type="number"
          max={100}
          min={1}
          value={row.saved ? row.age : age}
          onChange={(e) => setAge(e.target.value)}
          // required
        />
      </td>
      <td className="btns">
        <button onClick={() => onSave(row)}>Save</button>
        <button onClick={() => onDelete(row)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
