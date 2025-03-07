


import mongoose from 'mongoose'


const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function (value) {
                return /[!@#$%^&*(),.?":{}|<>]/.test(value);
            },
            message: 'Password must contain at least one special character & eight characters'
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /\S+@\S+\.\S+/.test(value);
            },
             message: "Please enter a valid email address."
        }
    }

})


const RegisterUser = mongoose.model('register', registerSchema, 'register')


export default RegisterUser