import mongoose from 'mongoose';

const payStubSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  periodStart: { type: Date, required: true },
  periodEnd: { type: Date, required: true },
  hoursWorked: { type: Number, required: true },
  hourlyRate: { type: Number, required: true },
  totalPay: { type: Number, required: true },
  generatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('PayStub', payStubSchema);
