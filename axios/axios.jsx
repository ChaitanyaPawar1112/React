//fetch data using axios method
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]); // State to store API data

  // Function to fetch data from API
  const getData = async () => {
    try {
      const response = await axios.get("data.json");
      console.log(response);
      setData(response.data); // Save API data in state
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={getData}>Fetch Data</button>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
