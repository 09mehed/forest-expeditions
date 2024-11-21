import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const emailFromLogin = location.state?.email || "";
    const [email, setEmail] = useState(emailFromLogin); 

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email) {
            toast.error("Please enter a valid email address.", {
                position: "top-center",
            });
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent! Check your email.", {
                    position: "top-center",
                });
                window.open("https://mail.google.com", "_blank");
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            })
            .catch((err) => {
                toast.error("Failed to send reset email. Please try again.", {
                    position: "top-center",
                });
                console.error(err.message);
            });
    };

    return (
        <div className="w-11/12 mx-auto py-5">
            <Helmet>
            <title>Forest Expeditions | forgotPassword</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Reset Password
                    </h2>
                    <form onSubmit={handleResetPassword}>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
