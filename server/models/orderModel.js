






import mongoose from 'mongoose'



const userOrderSchema = new mongoose.Schema({
    orderName: {
        type: String,
        required: true,
        minlength: 2,
        
    },
    orderLastName: {
        type: String,
        required: true,
        minlength: 2,

    },
    orderEmail: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
             message: "Please enter a valid email address that's already in our database."
        }
    },

    orderStreet: {
        type: String,
        required: true,
        minlength: 3,
        
    },

    orderCity: {
        type:String,
        required: true,
        minlength: 3,
    },
    
    
    orderState: {
            type: String,
            required: true,
            match: /^[A-Z]{2}$/, 
            message: "Please enter a valid State abbreviation."
        },

        orderZipCode: {
            type:String,
            required: true,
            match:  /^\d{5}$/,
            message:"Please enter a valid ZIP code.",
        },

        orderCountry: {
            type: String,
            required: true,
            match: /^[A-Za-z ]+$/, 
            message:  "Please enter a valid country abbreviation.",
        },

        orderPhone: {
            type: String,
            required: true,
            match:/^(\d{3}-\d{3}-\d{4}|\d{10})$/,
            message: "Please enter a valid phone number in either 'xxxxxxxxxx' or 'xxx-xxx-xxxx' format.",

        }

})



const OrderUser = mongoose.model('order', userOrderSchema, 'order')
export default OrderUser