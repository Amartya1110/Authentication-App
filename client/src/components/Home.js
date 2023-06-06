import { Link } from "react-router-dom"

import '../styles/Home.styles.css'
import avatar from "../assets/user.png"

const Home = () => {
    return (
        <div className="glass">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <h3 className="mt-4 mb-2 text-lg" >First Time Visitor?</h3>
            <h3 className="text-sm max-w-[11em] text-center">Sign In to dive deeper into our services</h3>
            <img src={avatar} alt="Avatar" className="my-4 h-48" />
            <form>
                <div className="flex flex-col items-center">
                    <input type="text" placeholder="UserName" className="px-4 py-2 rounded-md text-black"/>
                    <button type="submit" className="my-2 bg-teal-400 px-8 py-2 rounded-full">Sign In</button>
                </div>
                <div className="flex">
                    <h1 className="mr-2">Not a member?</h1>
                    <Link to="/register" className="text-green-200 hover:underline" >Register Now!</Link>
                </div>
            </form>

        </div>
    )
}

export default Home