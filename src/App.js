import React, { Component } from "react";
//import ReactDOM from "react-dom";
import MaterialTable from "material-table";
function App() {
  return (
    <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {title: "Birth City",field: "birthCity",lookup: { 34: "Bangalore", 63: "Pune" }
            }
          ]}
          data={[
            { name: "Soundharya", surname: "Khanapur", birthYear: 1998, birthCity: 34 },
            { name: "Vishal", surname: "Khanapur", birthYear: 1987, birthCity: 63 }
          ]}
          title="My Table"
        />
      </div>
  );
}

export default App;
