import mongoose from 'mongoose';
const clockLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clockIn: { type: Date, required: true },
  clockOut: { type: Date },
  duration: { type: Number },
}, { timestamps: true });

export default mongoose.model('ClockLog', clockLogSchema);
