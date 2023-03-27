import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (): JSX.Element => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div>test</div>
      {isAuthenticated && (
        <div>
          test
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
      uytuyt
    </div>
  );
};

export default Profile;
