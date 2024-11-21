import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AdventureDetails from "../components/AdventureDetails/AdventureDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ForgotPassword from "../components/ForgetPassword/ForgotPassword";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: '404 page, Not found',
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () =>{
                    const adventure = await fetch('/adventure.json');
                    const adventureData = await adventure.json()

                    const services = await fetch('/services.json');
                    const servicesData = await services.json()

                    return{adventureData, servicesData}
                }
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: '/userProfile',
                element: <PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute>
                    <AdventureDetails></AdventureDetails>
                </PrivateRoute>,
                loader:async ({params}) => {
                    const res = await fetch('/adventure.json')
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData
                }
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    },
])


export default router;


