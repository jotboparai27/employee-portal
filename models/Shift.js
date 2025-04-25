import mongoose from 'mongoose';

const shiftSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  role: { type: String }, // Optional: you can add role-specific shifts
  status: { type: String, enum: ['scheduled', 'completed', 'missed'], default: 'scheduled' },
}, { timestamps: true });

export default mongoose.model('Shift', shiftSchema);
