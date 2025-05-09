import User from '../models/user.js';
import Shift from '../models/Shift.js';
import Request from '../models/Request.js';

export const getDashboardSummary = async (req, res) => {
  try {
    const totalEmployees = await User.countDocuments({ role: 'employee' });
    const totalShifts = await Shift.countDocuments();
    const totalRequests = await Request.countDocuments();
    const pendingRequests = await Request.countDocuments({ status: 'pending' });

    const today = new Date().toDateString();
    const shiftsToday = await Shift.countDocuments({ date: today });

    res.json({
      totalEmployees,
      totalShifts,
      shiftsToday,
      totalRequests,
      pendingRequests
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
