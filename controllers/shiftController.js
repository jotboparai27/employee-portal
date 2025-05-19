import Shift from '../models/Shift.js';
import Log from '../models/Log.js';

// Create a new shift
export const assignShift = async (req, res) => {
  const { employeeId, date, startTime, endTime } = req.body;

  if (!employeeId || !date || !startTime || !endTime) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const shift = await Shift.create({ employeeId, date, startTime, endTime });

    // Log the shift creation
    await Log.create({
      event: 'Shift Assigned',
      details: `Shift assigned to employee ID: ${employeeId} on ${date} from ${startTime} to ${endTime}`,
    });

    res.status(201).json({ message: 'Shift assigned successfully', shift });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Get all shifts (optional filter by employee)
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
// Update a shift
export const updateShift = async (req, res) => {
  const { id } = req.params;
  const { date, startTime, endTime } = req.body;

  try {
    const shift = await Shift.findById(id);
    if (!shift) {
      return res.status(404).json({ message: 'Shift not found' });
    }

    shift.date = date || shift.date;
    shift.startTime = startTime || shift.startTime;
    shift.endTime = endTime || shift.endTime;
    await shift.save();

    // Log the shift update
    await Log.create({
      event: 'Shift Updated',
      details: `Shift ID: ${id} updated to ${date} from ${startTime} to ${endTime}`,
    });

    res.json({ message: 'Shift updated successfully', shift });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a shift
export const deleteShift = async (req, res) => {
  const { id } = req.params;

  try {
    const shift = await Shift.findById(id);
    if (!shift) {
      return res.status(404).json({ message: 'Shift not found' });
    }

    await shift.deleteOne();

    // Log the shift deletion
    await Log.create({
      event: 'Shift Deleted',
      details: `Shift with ID: ${id} has been deleted`,
    });

    res.json({ message: 'Shift deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
