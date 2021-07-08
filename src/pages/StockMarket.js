import React, { useState } from "react";
import axios from "axios";

import Select from "../components/elements/Select";
import StockChart from "../components/StockChart";

const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const StockMarket = () => {
  const [key, setKey] = useState("");
  const [stockData, setStockData] = useState({});
  const [selectValue, setSelectValue] = useState("");

  const getAllData = async (url) => {
    let response = await axios.get(url);
    let data = response.data;
    setStockData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${REACT_APP_API_BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=${API_KEY}`;

    await getAllData(url);
    setKey("");
  };

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="stockmarket">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter company name"
          style={{ width: "500px", height: "50px", fontSize: "2em" }}
          value={key}
          onChange={handleChange}
        />
        <button
          style={{ height: "50px", width: "50px", fontSize: "2em" }}
          type="submit"
        >
          <i class="fas fa-search-dollar" />
        </button>
      </form>
      {stockData.bestMatches ? (
        <Select
          value={selectValue}
          onChange={handleSelect}
          data={stockData}
          label="Select company"
        />
      ) : (
        <Select label="Select company" />
      )}
      <StockChart symbol={selectValue} apiKey={API_KEY} />
    </div>
  );
};

export default StockMarket;
