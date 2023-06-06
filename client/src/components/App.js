import { Outlet } from "react-router-dom"



const App = () => {
    return(
        <div className="min-h-screen bg-slate-900 flex justify-center items-center">
            <Outlet />
        </div>
    )
}



export default App