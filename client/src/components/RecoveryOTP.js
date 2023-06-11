import { Link } from "react-router-dom"

import '../styles/Home.styles.css'
import { useToast } from "./features/ToastContext"

const RecoveryOTP = () => {
    
    // const {addToast} = useToast()
    
    // const ValidatePassword = (password) => {
    //     const lowerCaseLetter = /[a-z]/g;
    //     const upperCaseLetter = /[A-Z]/g;
    //     const numerical = /[0-9]/g;
    //     const specialchar = /[!@#\$%\^\&*\)\(+=._-]/g;


    //     if(!password) {
    //         addToast("Password is required !!!", "error")
    //     }
    //     else if(password.includes(" ")) {
    //         addToast("Invalid Password !!!", "error")
    //     }
    //     else {
    //         if(! lowerCaseLetter.test(password)) {
    //             addToast("Password should contain atleast one lowercase letter !!!", "error")
    //         }
    //         else if(! upperCaseLetter.test(password)) {
    //             addToast("Password should contain atleast one uppercase letter !!!", "error")
    //         }
    //         else if(! numerical.test(password)) {
    //             addToast("Password should contain atleast a number !!!", "error")
    //         }
    //         else if(! specialchar.test(password)) {
    //             addToast("Password should contain atleast one special character !!!", "error")
    //         }
    //     }
    // }

    // const handleUserFormSubmit = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     // console.log(Object.fromEntries(formData.entries()))
    //     const {password} = Object.fromEntries(formData.entries())
    //     ValidatePassword(password)
    // }


    return (
        <div className="glass home">
            <h1 className="text-5xl font-bold">Recovery</h1>
            <h3 className="text-gray-300 text-2xl my-6 font-bold">Enter OTP to recover password</h3>
            <form onSubmit={(e) => handleUserFormSubmit(e)} className="flex flex-col items-center w-full">
                <div className="w-full flex flex-col items-center">
                    <input autoFocus name="password" type="text" placeholder="OTP" className="px-4 py-2 rounded-md text-black w-full"/>
                    <h3 className="text-sm mt-2 mb-6">Enter 6 digit OTP sent to your email address.</h3>
                    <button type="submit" className="my-2 bg-teal-400 px-8 py-2 rounded-full text-white w-1/2">Sign In</button>
                </div>
                <div className="flex">
                    <h1 className="mr-2">Didn't receive OTP?</h1>
                    <button className="text-green-200 hover:underline" >Resend</button>
                </div>
            </form>

        </div>
    )
}

export default RecoveryOTP