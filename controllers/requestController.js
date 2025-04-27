import Request from '../models/Request.js';

// Submit a new request (shift swap or benefits)
export const submitRequest = async (req, res) => {
  const { type, details } = req.body;

  if (!type || !details) {
    return res.status(400).json({ message: 'Type and details are required' });
  }

  try {
    const request = await Request.create({
      userId: req.user.id,
      type,
      details,
    });

    res.status(201).json({ message: 'Request submitted successfully', request });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get logged-in employee's requests
export const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({ userId: req.user.id }).sort({ submittedAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
