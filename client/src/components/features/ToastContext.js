

import { createContext, useContext, useState } from "react"
import ToastContainer from "./ToastContainer"


const ToastContext = createContext()

const ToastProvider = ({children}) => {
    const [toastList, setToastList] = useState([])

    const addToast = (message, type) => {
        setToastList(prevToastList => {
            return ([ ...prevToastList, {
                id:Date.now(),
                message,
                type
            } ])
        })
    }

    const removeToast = (id) => {
        setToastList(prevToastList => {
            return prevToastList.filter(toast => toast.id !== id)
        })
    }

    return (
        <ToastContext.Provider value={{addToast}} >
            {children}
            <ToastContainer toastList={toastList} removeToast={removeToast} />
        </ToastContext.Provider>
    )
}

const useToast = () => {
    const context = useContext(ToastContext)

    if(context === undefined) {
        console.log("You're trying to access the context from outside it's provider")
    }

    return context
}

export { ToastProvider, useToast }