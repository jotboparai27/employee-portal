import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['leave', 'shift change', 'other'], required: true },
  message: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  dateRequested: { type: Date, default: Date.now },
  dateResolved: { type: Date },
  adminNote: { type: String },
}, { timestamps: true });

export default mongoose.model('Request', requestSchema);
