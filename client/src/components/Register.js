import { Link } from "react-router-dom"

import '../styles/Home.styles.css'
import avatar from "../assets/user.png"
import { useToast } from "./features/ToastContext"
import { useState } from "react"
import convertToBase64 from "../utils/convertBase64"

const Register = () => {

    const [profileImg, setProfileImg] = useState()
    
    const {addToast} = useToast()

    const ValidateUserName = (username) => {
        if(!username) {
            addToast("Username is required !!!", "error")
        }
        if(username.includes(" ")) {
            addToast("Invalid Username !!!", "error")
        }
    }
    
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

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

        if(!email) {
            addToast("Email is required !!", "error")
        }
        else if(email.includes(" ") || !(emailRegex.test(email))) {
            addToast("Invalid Email !!", "error")
        }
    }

    const handleUserFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(Object.fromEntries(formData.entries()))
        const formEntries = Object.assign({}, Object.fromEntries(formData.entries()), {profileImg:profileImg || ""})
        console.log(formEntries)
        const { username, password, email } = formEntries
        ValidateUserName(username)
        ValidatePassword(password)
        validateEmail(email.trim())
    }

    // onUpload() is a function to handle the file uploaded as the profile image
    const onUpload = async (e) => {
        console.log(e.target.files[0])
        // setProfileImg(e.target.files[0]) -> This will not work
        const base64EncodedImg = await convertToBase64(e.target.files[0]);
        setProfileImg(base64EncodedImg)
    }


    return (
        <div className="glass home p-6 min-w-fit">
            <h1 className="text-5xl font-bold">Register</h1>
            {/* <h3 className="mt-4 mb-2 text-lg" >First Time Visitor?</h3> */}
            <h3 className="text-sm max-w-[12em] text-center">Happy to have you here !!</h3>
            {/* Here we are going to allow user to upload his/her image */}

            <div className="overflow-hidden w-48">
                <label htmlFor="profile">
                    <img src={profileImg || avatar} alt="Avatar" className="my-4 h-48 rounded-full" />
                </label>
                <input onChange={(e) => onUpload(e)} type="file" id="profile" className="hidden"/>
            </div>

            <form onSubmit={(e) => handleUserFormSubmit(e)}>
                <div className="flex flex-col items-center">
                    <input autoFocus name="email" type="text" placeholder="example@abc.com" className="px-4 py-2 rounded-md text-black mt-2"/>
                    <input autoFocus name="username" type="text" placeholder="Username" className="px-4 py-2 rounded-md text-black mt-2"/>
                    <input autoFocus name="password" type="text" placeholder="P@ssw0rd" className="px-4 py-2 rounded-md text-black mt-2"/>
                    <button type="submit" className="my-2 bg-teal-400 px-8 py-2 rounded-full text-white">Sign In</button>
                </div>
                <div className="flex">
                    <h1 className="mr-2">Already Registered?</h1>
                    <Link to="/" className="text-green-200 hover:underline" >Login!</Link>
                </div>
            </form>

        </div>
    )
}

export default Register