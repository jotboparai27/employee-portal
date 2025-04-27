import ClockLog from '../models/ClockLog.js';

export const clockIn = async (req, res) => {
  try {
    const existing = await ClockLog.findOne({ userId: req.user.id, date: new Date().toDateString() });
    if (existing) {
      return res.status(400).json({ message: 'Already clocked in today' });
    }

    const log = await ClockLog.create({
      userId: req.user.id,
      date: new Date().toDateString(),
      clockIn: new Date(),
    });

    res.status(201).json({ message: 'Clocked in successfully', log });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const clockOut = async (req, res) => {
  try {
    const log = await ClockLog.findOne({ userId: req.user.id, date: new Date().toDateString() });
    if (!log) {
      return res.status(400).json({ message: 'No clock-in found for today' });
    }

    if (log.clockOut) {
      return res.status(400).json({ message: 'Already clocked out today' });
    }

    log.clockOut = new Date();
    await log.save();

    res.json({ message: 'Clocked out successfully', log });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
