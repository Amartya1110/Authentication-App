import {createPortal} from "react-dom"

import Toast from "./Toast"

const ToastContainer = ({toastList, removeToast}) => {
    const toastRoot = document.getElementById("toast-root")

    return createPortal(
        <>
            {
                toastList.map(toast => {
                    return <Toast key={toast?.id} {...toast} removeToast={removeToast} />
                })
            }
        </>,
        toastRoot
    )
}

export default ToastContainer

