import mongoose from "mongoose";




export async function connect() {
    //here connect to mongo DB
    const {
        DB_USER,
        DB_PASS,
        DB_NAME,
        DB_HOST,
    } = process.env

    const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

    mongoose.connection.on('connecting', () => {
        console.log('[M] conneging');
    });

    mongoose.connection.on('connected', () => {
        console.log('[M] connected');
    });
    mongoose.connection.on('disconnecting', () => {
        console.log('[M] disconnecting');
    });
    mongoose.connection.on('[M] disconnected', () => {
        console.log('[M] disconnected');
    });
    mongoose.connection.on('error', er => {
        console.log('[M] Error', er);
    });
    await mongoose.connect(connectionString);
}