import { Link } from "react-router-dom"

import '../styles/Home.styles.css'
import avatar from "../assets/user.png"
import { useToast } from "./features/ToastContext"

const Password = () => {
    
    const {addToast} = useToast()
    
    const ValidatePassword = (password) => {
        const lowerCaseLetter = /[a-z]/g;
        const upperCaseLetter = /[A-Z]/g;
        const numerical = /[0-9]/g;
        const specialchar = /[!@#\$%\^\&*\)\(+=._-]/g;


        if(!password) {
            addToast("Password is required !!!", "error")
        }
        else if(password.includes(" ")) {
            addToast("Invalid Password !!!", "error")
        }
        else {
            if(! lowerCaseLetter.test(password)) {
                addToast("Password should contain atleast one lowercase letter !!!", "error")
            }
            else if(! upperCaseLetter.test(password)) {
                addToast("Password should contain atleast one uppercase letter !!!", "error")
            }
            else if(! numerical.test(password)) {
                addToast("Password should contain atleast a number !!!", "error")
            }
            else if(! specialchar.test(password)) {
                addToast("Password should contain atleast one special character !!!", "error")
            }
        }
    }

    const handleUserFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(Object.fromEntries(formData.entries()))
        const {password} = Object.fromEntries(formData.entries())
        ValidatePassword(password)
    }


    return (
        <div className="glass home">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            {/* <h3 className="mt-4 mb-2 text-lg" >First Time Visitor?</h3> */}
            <h3 className="text-sm max-w-[11em] text-center">Sign In to dive deeper into our services</h3>
            <img src={avatar} alt="Avatar" className="my-4 h-48" />
            <form onSubmit={(e) => handleUserFormSubmit(e)}>
                <div className="flex flex-col items-center">
                    <input autoFocus name="password" type="text" placeholder="Password" className="px-4 py-2 rounded-md text-black"/>
                    <button type="submit" className="my-2 bg-teal-400 px-8 py-2 rounded-full text-white">Sign In</button>
                </div>
                <div className="flex">
                    <h1 className="mr-2">Forgot Password?</h1>
                    <Link to="/reset" className="text-green-200 hover:underline" >Reset Now!</Link>
                </div>
            </form>

        </div>
    )
}

export default Password