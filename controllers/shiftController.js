import Shift from '../models/Shift.js';

// Admin assigns a new shift
export const assignShift = async (req, res) => {
  const { employeeId, date, startTime, endTime } = req.body;

  if (!employeeId || !date || !startTime || !endTime) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const shift = await Shift.create({
      employeeId,
      date,
      startTime,
      endTime,
    });

    res.status(201).json({ message: 'Shift assigned successfully', shift });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin views all shifts (optional filter by employee)
export const getShifts = async (req, res) => {
  try {
    const query = {};

    if (req.query.employeeId) {
      query.employeeId = req.query.employeeId;
    }

    const shifts = await Shift.find(query).populate('employeeId', 'name email');
    res.json(shifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
