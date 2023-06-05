import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"

// import "./index.css" => This will throw error, if u try. So don't do this while using tailwindcss


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)