import React, { useEffect, useState } from "react";
import TableData from "./Components/TableData";
// import './App.css';
const API =
  "http://go-dev.greedygame.com/v3/dummy/report?startDate=2023-01-01&endDate=2023-03-01";

function App() {


  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const my_data = await res.json();
      const data = my_data.data;
      if (data.length > 0) {
        setData(data);
      }
      console.log(data);
    } catch (e) {
       console.error(e);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>App</th>
          <th>Clicks</th>
          <th>Request</th>
          <th>Revenue</th>
          <th>Responses</th>
        </tr>
      </thead>
      <tbody>
        <TableData data={data} />
      </tbody>
    </table>
  );
}
// fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2023-01-01&endDate=2023-03-01")

export default App;
