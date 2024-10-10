const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');  // Import các routes của user

const app = express();

// Middleware để parse JSON từ yêu cầu
app.use(bodyParser.json());

// Sử dụng các routes liên quan đến người dùng
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});