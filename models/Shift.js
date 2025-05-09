import mongoose from 'mongoose';

const shiftSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: String, enum: ['assigned', 'completed', 'missed'], default: 'assigned' }
});

export default mongoose.model('Shift', shiftSchema);
