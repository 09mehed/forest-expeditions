import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import userIcon from '../../assets/user.png'
const Navbar = () => {
    const { user, handleSignOut } = useContext(authContext)
    return (
        <div className="navbar w-11/12 mx-auto items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='updateProfile' className='ml-4'>Update Profile</NavLink>
                        <NavLink to='userProfile' className='ml-4'>User Profile</NavLink>
                    </ul>
                </div>
                <Link to='/' className="text-xl font-semibold">Forest Expeditions</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='updateProfile' className='ml-4'>Update Profile</NavLink>
                    <NavLink to='userProfile' className='ml-4'>User Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user && user?.email ? <div>
                        <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                    </div> :
                        <img src={userIcon} alt="" />
                }
                {
                    user && user?.email ? (<button onClick={handleSignOut} className="btn btn-primary">Log-Out</button>) : (<NavLink to='login'>
                        <button className="btn btn-primary">Login</button>
                    </NavLink>)
                }

            </div>
        </div>
    );
};

export default Navbar;