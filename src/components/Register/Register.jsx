import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {handleRegister, manageProfile, handleGoogleLogin} = useContext(authContext)
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const email = e.target.email.value
        const photoURL = e.target.photoURL.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        console.log(name, photoURL, conPassword);
        if(password !== conPassword){
            setError("Password didn't match")
            return;
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            setError("please strong password")
            return;
        }
        handleRegister(email, password)
        .then(res => {
            manageProfile(name, photoURL)
        })
    }
    return (
        <div className="w-11/12 mx-auto py-5">
            <div className="h-[700px] flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Photo URL
                            </label>
                            <input
                                name="photoURL"
                                type="url"
                                placeholder="Enter your photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                               Confirm Password
                            </label>
                            <input
                                name="conPassword"
                                type="password"
                                placeholder="Enter your confirm password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="text-center pt-3">Please Register or <button onClick={handleGoogleLogin} className="text-green-600 font-semibold">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;