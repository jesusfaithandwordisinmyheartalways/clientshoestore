


import mongoose from 'mongoose'



const connectMongoDB = async () => {
     try {
            await mongoose.connect(process.env.MONGODB_URL), {
                useNewUrlParser: true, 
                useUnifiedTopology:true
            },
                console.log('mongo database has connected successfully')
     }catch(error) {
                console.error('mongo database has not connected successfully', error)
                process.exit(1)

     }
}


export default connectMongoDB
