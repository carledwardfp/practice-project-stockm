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
  const [company, setCompany] = useState({});

  const getAllData = async (url) => {
    let response = await axios.get(url);
    let data = response.data;
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${REACT_APP_API_BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=${API_KEY}`;
    let data = await getAllData(url);
    if (data) {
      setStockData(data);
      setKey("");
    }
  };

  const getData = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;

    let response = await axios.get(url);
    let data = response.data;
    return data;
  };

  const handleSelect = async (e) => {
    let symbol = e.target.value;
    setSelectValue(symbol);
    let company = await getData(symbol);
    setCompany(company);
  };

  return (
    <div className="stockmarket">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter company name"
          style={{ width: "500px", height: "50px", fontSize: "2em" }}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          style={{ height: "50px", width: "50px", fontSize: "2em" }}
          type="submit"
        >
          <i className="fas fa-search-dollar" />
        </button>
      </form>
      {stockData?.bestMatches ? (
        <Select
          value={selectValue}
          onChange={handleSelect}
          data={stockData?.bestMatches}
          label="Select company"
        />
      ) : (
        <Select label="No company selected" />
      )}
      <StockChart data={company} />
    </div>
  );
};

export default StockMarket;
