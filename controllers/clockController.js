import ClockLog from '../models/ClockLog.js';


export const clockIn = async (req, res) => {
  try {
    // Get the start and end of the current day
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    // Check if the user has already clocked in today
    const existing = await ClockLog.findOne({
      user: req.user.id,
      clockIn: { $gte: startOfDay, $lte: endOfDay },
    });

    if (existing) {
      return res.status(400).json({ message: 'Already clocked in today' });
    }

    // Create a new clock-in log
    const log = await ClockLog.create({
      user: req.user.id,
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
    // Define today's date range
    const now = new Date();
    const startOfDay = new Date(now.setHours(0, 0, 0, 0));
    const endOfDay = new Date(now.setHours(23, 59, 59, 999));

    // Find today's clock-in record for the user
    const log = await ClockLog.findOne({
      user: req.user.id,
      clockIn: { $gte: startOfDay, $lte: endOfDay },
    });

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
