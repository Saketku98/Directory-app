import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import TableRow from "../TableRow/TableRow";

const MainContent = ({ deleteRow }) => {
  const { tableData } = useContext(UserContext);

  return (
    <div className="main-content">
      <h2>Add New Person</h2>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Aadhar Number</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              return <TableRow key={row.id} onDelete={deleteRow} row={row} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
