// // 1 import react and reactDom libaries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// // 2 get rference to div with id root
const el = document.getElementById("root");

// // 3 tell react to take control of that elemet
const root = ReactDOM.createRoot(el);

//4 show component on screen

root.render(<App />);
