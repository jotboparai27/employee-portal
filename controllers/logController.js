import Log from '../models/Log.js';

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: -1 }).limit(10);
    res.json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).json({ message: 'Server error while fetching logs' });
  }
};
