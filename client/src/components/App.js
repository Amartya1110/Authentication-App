import {createBrowserRouter, RouterProvider} from "react-router-dom"

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <div>Home Page</div>
    },
    {
        path: "/register",
        element: <div>Register Page</div>
    }
])

const App = () => {
    return(
        <RouterProvider router={appRouter}>
            <h1 className="bg-orange-600" >React Frontend</h1>
        </RouterProvider>
    )
}





export default App