import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import "./index.css" => This will throw error, if u try. So don't do this while using tailwindcss

// Importing components
import Register from "./components/Register"
import Login from "./components/Login"
import UserProfile from "./components/UserProfile"
import Password from "./components/Password"
import PasswordReset from "./components/PasswordReset"
import PageNotFound from "./components/PageNotFound"
import Home from "./components/Home"
import RecoveryOTP from "./components/RecoveryOTP"

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/password",
                element: <Password />,
            },
            {
                path: "/profile",
                element: <UserProfile />,
            },
            {
                path: "/recovery",
                element: <RecoveryOTP />,
            },
            {
                path: "/reset",
                element: <PasswordReset />,
            },
        ]
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={appRouter} />
)