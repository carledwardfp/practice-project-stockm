import React from "react";
import BTC from "./pages/BTC";
import StockMarket from "./pages/StockMarket";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={BTC} />
          <Route path="/stockmarket" component={StockMarket} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
