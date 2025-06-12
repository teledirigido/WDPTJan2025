import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

export function ProfilePage() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Profile Page: {user.name} - {user.email}</h1>
      <Link to="/changepassword">Change Password</Link>
      <p>Additional questions:</p>
      <div>
        <ul>
          <li>What if I want to display user data not stored on the payload? What would I need to do?</li>
          <li>How could I create an update profile page?</li>
        </ul>
      </div>
    </>
  )
}