const mongoose = require('mongoose')
const LoginSchema = new mongoose.Schema({
    userFirstName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Login',LoginSchema);