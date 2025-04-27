import Shift from '../models/Shift.js';

// Employee can see their own shifts
export const getMyShifts = async (req, res) => {
  try {
    const shifts = await Shift.find({ employeeId: req.user.id }).sort({ date: 1 });
    res.json(shifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
