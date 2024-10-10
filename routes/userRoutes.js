const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route để tạo người dùng mới
router.post('/users', userController.createUser);

// Route để lấy thông tin người dùng theo username
router.get('/users/:username', userController.getUserByUsername);

// Route để cập nhật thông tin người dùng
router.put('/users/:username', userController.updateUser);

module.exports = router;