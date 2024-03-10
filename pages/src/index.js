import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Block from "./Block";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
const blocks = ReactDOM.createRoot(document.getElementById("blocks__ads"));
blocks.render(<Block />);
