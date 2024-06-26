const express = require('express');
const { register, login, logout, getMe, forgotPassword, changePassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/changepassword', protect, changePassword);

module.exports = router;