import { useState, useEffect } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5050/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
        }

        const profile = await response.json();
        setProfileData(profile.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    fetchProfile();
    return;
  }, []);

  return (
    <div>
      {profileData ? (
        <div>
          <h2>Profile Information</h2>
          <p>
            <strong>Name:</strong> {profileData.firstName}
          </p>
          <p>
            <strong>Name:</strong> {profileData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {profileData.email}
          </p>
          <p>
            <strong>Trips:</strong>{" "}
            {profileData.trips
              ? profileData.trips.join(", ")
              : "No trips found"}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
