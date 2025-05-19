import Request from '../models/Request.js';
import Log from '../models/Log.js';


// Submit a new request (shift swap or benefits)
export const submitRequest = async (req, res) => {
  const { type, details } = req.body;

  if (!type || !details) {
    return res.status(400).json({ message: 'Type and details are required' });
  }

  try {
    const request = await Request.create({
      userId: req.user ? req.user.id : null, // Fix: Properly save the user ID
      type,
      details,
      status: 'pending',
      submittedAt: new Date(),
    });

    // Log the request submission
    await Log.create({
      event: 'Request Submitted',
      details: `Request submitted by user ID: ${req.user ? req.user.id : 'Unknown'} - Type: ${type}, Details: ${details}`,
    });

    res.status(201).json({ message: 'Request submitted successfully', request });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update request status
export const updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const request = await Request.findById(id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = status;
    await request.save();

    // Log the status update
    await Log.create({
      event: 'Request Status Updated',
      details: `Request ID: ${id} updated to ${status}`,
    });

    res.json({ message: `Request ${status} successfully`, request });
  } catch (error) {
    console.error('Error updating request status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get logged-in employee's requests
export const getMyRequests = async (req, res) => {
  try {
    const filter = { userId: req.user.id };

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const requests = await Request.find(filter)
      .sort({ submittedAt: -1 })
      .select('type details status submittedAt');

    // Log the request retrieval
    // await Log.create({
    //   event: 'View Requests',
    //   details: `User ID: ${req.user.id} viewed their requests`,
    // });

    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
