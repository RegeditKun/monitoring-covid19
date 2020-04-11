import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardData from "./CardData";

const Global = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get("https://corona.lmao.ninja/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="global">
      <h1>Global</h1>
      <CardData data={data} />
    </section>
  );
};

export default Global;
