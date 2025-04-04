import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGOODB_URI as string

if(!MONGODB_URI){
    console.log("enter a vaid MONGODB URI")
}

declare global {
    var mongooseConn: Promise<typeof mongoose> | undefined;
}

export async function connectDB() {
    if(!global.mongooseConn){
        global.mongooseConn = mongoose.connect(MONGODB_URI , {
            dbName: "LinkPlus",
            bufferCommands : false
        })
    }else{
        console.log("using existing connection to the DB")
    }
    return global.mongooseConn;
}