import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email:{ type: String, unique: true },
    passward: String,
    role:{ type:String, enum:['employee', 'admin'], default:'employee'},
});

export default mongoose.model('User', userSchema);