import React from "react";
import RaectDOM from "react-dom/client"

const App = () => {
    return (
        <>
            <h1>FrontEnd of our App</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)