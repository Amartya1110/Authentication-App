import { Outlet } from "react-router-dom"
import { ToastProvider } from "./features/ToastContext"



const App = () => {
    return(
        <ToastProvider>
            <div className="min-h-screen bg-slate-900 flex justify-center items-center">
                <Outlet />
            </div>
        </ToastProvider>
    )
}



export default App