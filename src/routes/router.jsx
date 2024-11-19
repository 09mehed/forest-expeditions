import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AdventureDetails from "../components/AdventureDetails/AdventureDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
// import Footer from "../components/Footer/Footer";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: '404 page, Not found',
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/adventure.json')
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
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
            }
        ]
    },
    // {
    //     path: '/',
    //     element: <Footer></Footer>
    // }
])


export default router;