import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  event: { type: String, required: true },
  details: { type: String, required: true },
});

export default mongoose.model('Log', logSchema);
