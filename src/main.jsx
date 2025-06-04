// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ThemeProvider } from './context/ThemeContext.jsx';
import "./index.css"; // tailwind styles

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


