import React, { useState, useEffect, Fragment } from "react";
import Chart from "../components/Chart";
import Summary from "../components/Summary";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const BTC = () => {
  const [data, getData] = useState({});

  const getAllData = async () => {
    const url = `${REACT_APP_API_BASE_URL}/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=PHP&apikey=${API_KEY}`;

    let response = await axios.get(url);
    let data = response.data;
    getData(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Fragment>
      <Summary data={data} />
      <Chart data={data} />
    </Fragment>
  );
};

export default BTC;
