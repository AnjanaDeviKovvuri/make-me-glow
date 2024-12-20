import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://make-me-glow-backend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <h1>DatafromServer</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>{item.product}</h3>
            <p>{item.brand}</p>
            <p>{item.type}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
