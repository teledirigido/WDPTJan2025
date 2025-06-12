// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";


function ChangePasswordPage(props) {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
  const handleNewPassword = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPassword = (e) => setConfirmNewPassword(e.target.value);


  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const storedToken = localStorage.getItem("authToken");

    if (!newPassword.length || !confirmNewPassword.length) {
      return setErrorMessage('Password is empty');
    }

    if (newPassword !== confirmNewPassword) {
      return setErrorMessage('Passwords do not match');
    }

    axios
      .put(
        `${API_URL}/api/changepassword`,
        { currentPassword, newPassword, confirmNewPassword },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setNewPassword('');
        setConfirmNewPassword('');
        setNewPassword('');
        setErrorMessage(response.data.message);
      })
      .catch((error) => {;
        setErrorMessage(error.response.data.message);
      });
  };


  return (
    <div className="SignupPage">
      <h1>Change Pasword</h1>

      <form onSubmit={handleChangePasswordSubmit}>
        <label>Current Password:</label>
        <input
          type="password"
          name="current-password"
          value={currentPassword}
          onChange={handleCurrentPassword}
        />

        <label>New Password:</label>
        <input
          type="password"
          name="new-password"
          value={newPassword}
          onChange={handleNewPassword}
        />

        <label>Confirm New Password:</label>
        <input
          type="password"
          name="confirm-new-password"
          value={confirmNewPassword}
          onChange={handleConfirmNewPassword}
        />

        <button type="submit">Update Password</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

    </div>
  )
}

export default ChangePasswordPage;
