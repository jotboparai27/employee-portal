import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['shift_swap', 'Benefit_Request'], required: true },
  details: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Request', requestSchema);
