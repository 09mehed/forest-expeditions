import { useContext, useRef, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { toast } from 'react-toastify';

const Login = () => {
    const { handleLogin, handleGoogleLogin, setUser} = useContext(authContext)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email, password)
        .then(res => {
            const user = res.user
            setUser(user)
            const redirectTo = location?.state?.from || '/'; 
            navigate(redirectTo);
            toast.success("Successfully logged in!", {
                position: "top-center",
            });
        })
        .catch(err => {
            setError(err.message);
            toast.error("Login failed! Please try again.", {
                position: "top-center",
            });
        })
    }
    const googleLoginHandler = () => {
        handleGoogleLogin()
        .then(() => {
            navigate(location?.state ? location.state : "/") 
        })
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value
        if(!email){
            console.log("Please valid a email address");
        }else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email send, please check your email", {
                    position: "top-center",
                })
            })
        }
    }
    return (
        <div className="w-11/12 mx-auto py-5">
            <Helmet>
                <title>Forest Expeditions | login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {
                            error.login && <label className="label">{error.login}</label>
                        }
                        <div className="mb-4">
                            <button
                                onClick={handleResetPassword}
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Forget Password?
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>
                    {error && <p className="text-red-500 font-semibold">{error.split("/")[1].slice(0, 18)}</p>}

                    <p>Do not have any account? Please <Link className="text-red-600 font-semibold" to='/register'>Register</Link> or <button onClick={googleLoginHandler} className="text-green-600 font-semibold">Google</button></p>

                </div>
            </div>
        </div>
    );
};

export default Login;