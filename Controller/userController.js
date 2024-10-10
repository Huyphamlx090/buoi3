const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// Tạo người dùng mới
const createUser = async (req, res) => {
  const { username, password, fullname, address, sex, email } = req.body;

  try {
    // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Gọi hàm trong userModel để lưu người dùng mới vào database
    userModel.createUser(username, hashedPassword, fullname, address, sex, email, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating user' });
      }
      res.status(200).json({ message: 'User created successfully!' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Lấy thông tin người dùng theo username
const getUserByUsername = (req, res) => {
  const { username } = req.params;

  userModel.getUserByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving user' });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  });
};

// Cập nhật thông tin người dùng
const updateUser = (req, res) => {
  const { username } = req.params;
  const { fullname, address, email } = req.body;

  userModel.updateUser(username, fullname, address, email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating user' });
    }
    res.status(200).json({ message: 'User updated successfully!' });
  });
};
module.exports = {
    createUser,
    getUserByUsername,
    updateUser
  };