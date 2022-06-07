import "./datatable.scss";
import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { darkModeContext } from "../../context/darkModeContext";

const Datatable = ({ url, rows, columns }) => {
  const [data, setData] = useState(rows);
  const { darkMode } = useContext(darkModeContext);

  const handleDelete = (id) => {
    setData(data.filter((r) => id !== r.id));
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="actionBtns">
          <Link to="/users/test">
            <div className="viewBtn">View</div>
          </Link>
          <div
            className="deleteBtn"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      );
    },
  };

  return (
    <div className={darkMode ? "dark datatable" : "datatable"}>
      <div className="datatable-container">
        <div className="title">Users List</div>
        <Link to={`${url}/new`}>
          <div className="edit">Add</div>
        </Link>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
