import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['employee', 'admin'], default: 'employee' },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});

export default mongoose.model('User', userSchema);
