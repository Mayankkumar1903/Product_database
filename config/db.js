const mongoose = require('mongoose')


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb database ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch(error){
        console.log(`MONGO connect error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;


