import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth"; 
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user, setUser } = useContext(authContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user.auth) {
        toast.error("User not found or invalid user instance", {
          position: "top-center",
        });
        return;
      }

      await updateProfile(user.auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      await user.auth.currentUser.reload();

      const updatedUser = {
        ...user.auth.currentUser,
        displayName: user.auth.currentUser.displayName,
        photoURL: user.auth.currentUser.photoURL,
      };
      setUser(updatedUser)

      toast.success("Profile updated successfully!", {
        position: "top-center",
      });

      navigate("/userProfile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto pt-5">
      <Helmet>
        <title>Forest Expeditions | Update Profile</title>
      </Helmet>
      <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Update your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Photo URL</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Update your photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
