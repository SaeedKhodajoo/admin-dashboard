import avatar from "../image/avatarImage.png";
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={avatar} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: "u1",
    username: "Snow",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: "u2",
    username: "Jamie Lannister",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: "u3",
    username: "Lannister",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: "u4",
    username: "Stark",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: "u5",
    username: "Targaryen",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: "u6",
    username: "Melisandre",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: "u7",
    username: "Clifford",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: "u8",
    username: "Frances",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: "u9",
    username: "Roxie",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: "u10",
    username: "Roxie",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];