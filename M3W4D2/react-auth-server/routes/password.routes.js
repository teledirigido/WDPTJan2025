const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require("../models/User.model");

router.put('/changepassword', async (req, res) => {

  const { _id } = req.payload; 
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  
  try {
    const user = await User.findById(_id).select('password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordCorrect = bcrypt.compareSync(currentPassword, user.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: 'Wrong Password' });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({ 
        message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' 
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    
    await User.findByIdAndUpdate(_id, { password: hashedPassword });
    return res.status(200).json({ message: 'Password updated successfully' });

  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

})

module.exports = router;