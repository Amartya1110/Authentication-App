import { Link } from "react-router-dom"

import '../styles/Home.styles.css'
import { useToast } from "./features/ToastContext"

const PasswordReset = () => {
    
    const {addToast} = useToast()
    
    const ValidatePassword = (password) => {
        const lowerCaseLetter = /[a-z]/g;
        const upperCaseLetter = /[A-Z]/g;
        const numerical = /[0-9]/g;
        const specialchar = /[!@#\$%\^\&*\)\(+=._-]/g;


        if(!password) {
            addToast("Password is required !!!", "error")
            return false
        }
        if(password.includes(" ")) {
            addToast("Invalid Password !!!", "error")
            return false
        }
        if(! lowerCaseLetter.test(password)) {
            addToast("Password should contain atleast one lowercase letter !!!", "error")
            return false
        }
        else if(! upperCaseLetter.test(password)) {
            addToast("Password should contain atleast one uppercase letter !!!", "error")
            return false
        }
        else if(! numerical.test(password)) {
            addToast("Password should contain atleast a number !!!", "error")
            return false
        }
        else if(! specialchar.test(password)) {
            addToast("Password should contain atleast one special character !!!", "error")
            return false
        }

        return true
    }

    const ValidateResetPassword = (password, confirmPassword) => {
        const isPasswordValidated = ValidatePassword(password)
        if(isPasswordValidated) {
            if(!confirmPassword) {
                addToast("Confirm Password is required !!!", "error")
                return false
            }
            if(password !== confirmPassword) {
                addToast("Passwords must match !!!", "error")
                return false
            }
            return true
        }
        else {
            return false
        }
    }

    const handleUserFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(Object.fromEntries(formData.entries()))
        const {password, confirmPassword} = Object.fromEntries(formData.entries())
        const arePasswordsValidated = ValidateResetPassword(password, confirmPassword)
        if(arePasswordsValidated) {
            addToast("Password has been reset successfully !!!", "success")
        }
    }


    return (
        <div className="glass home">
            <h1 className="text-5xl font-bold">Reset</h1>
            <h3 className="text-gray-300 text-2xl my-6 font-bold">Enter new password</h3>
            <form onSubmit={(e) => handleUserFormSubmit(e)} className="flex flex-col items-center w-full">
                <div className="w-full flex flex-col items-center">
                    <input autoFocus name="password" type="text" placeholder="Password" className="px-4 py-2 rounded-md text-black w-full"/>
                    <input name="confirmPassword" type="text" placeholder="Confirm Password" className="px-4 py-2 rounded-md text-black w-full my-6"/>
                    <button type="submit" className="my-2 bg-teal-400 px-8 py-2 rounded-full text-white w-1/2">Sign In</button>
                </div>
                {/* <div className="flex">
                    <h1 className="mr-2">Didn't receive OTP?</h1>
                    <button className="text-green-200 hover:underline" >Resend</button>
                </div> */}
            </form>

        </div>
    )
}


export default PasswordReset