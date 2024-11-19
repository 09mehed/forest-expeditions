import { useContext } from "react";
import { Helmet } from "react-helmet";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(authContext)
    const navigate = useNavigate()

    const handleUpdateProfile = () => {
        navigate('/updateProfile')
    }
    return (
        <div className="w-11/12 mx-auto pt-5">
            <Helmet>
                <title>Forest Expeditions | User Profile</title>
            </Helmet>
            {user ? (
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">
            Welcome, {user.name || user.displayName}!
          </h1>
          <div className="flex flex-col items-center">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {user.name || user.displayName}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {user.email || "Not Provided"}
            </p>
            <button
              onClick={handleUpdateProfile}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700">
          Please log in to view your profile.
        </p>
      )}
    </div>
  );
};

export default UserProfile;