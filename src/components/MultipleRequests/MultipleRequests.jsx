import { useEffect, useState } from "react";

import axios from "axios";

const MultipleRequests = () => {
  const [data, setData] = useState({ firstData: [], secondData: [] });

  useEffect(() => {
    const getData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get("https://66633df262966e20ef0c0694.mockapi.io/randomnames"),
          axios.get("https://66633e2d62966e20ef0c0781.mockapi.io/randomwords"),
        ]);
        //console.log(response1.data);
        //console.log(response2.data);
        setData({ firstData: response1.data, secondData: response2.data });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2>First Data</h2>
      {data.firstData.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <h2>Second Data</h2>
      {data.secondData.map((item) => (
        <p key={item.id}>{item.words}</p>
      ))}
    </>
  );
};

export default MultipleRequests;
