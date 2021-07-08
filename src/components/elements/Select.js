import React from "react";

const Select = ({ value, onChange, data, label }) => {
  return (
    <select
      style={{ height: "50px", width: "550px", fontSize: "1.5em" }}
      value={value}
      onChange={onChange}
    >
      <option value="0" disabled>
        {label}
      </option>
      {data?.map((option) => (
        <option key={option["1. symbol"]} value={option["1. symbol"]}>
          [{option["1. symbol"]}] {option["2. name"]}
        </option>
      )) || null}
    </select>
  );
};

export default Select;
