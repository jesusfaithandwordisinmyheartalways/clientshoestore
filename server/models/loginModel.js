




import mongoose from 'mongoose'


//validation in a schema to prevent invalid data being saved to the database.
const loginSchema = new mongoose.Schema({
        userPassword: {
            type:String,
            required: true,
            minlength: 8,
            validate: {
                validator: function(value) {
                    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
                },
                message: "Password must contain at least one special character."
            }
        },

        userEmail: {
            type:String,
            required: true,
            validate: {
                validator: function (value) {
                    return /@$/.test(value); 
                },
                message: "Please enter a valid email address."
            }
        }
})



const LoginUser = mongoose.model('login', loginSchema, 'login')

export default LoginUser
