import express from 'express';

import { roomCreator } from '../services/roomCreator.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Request body is missing' });
  }

  if (!Object.prototype.hasOwnProperty.call(data, 'userName')) {
    return res.status(400).json({ error: 'Missing required field: userName' });
  }

  const { userName } = data;

  if (userName == null || userName.toString().trim() === '') {
    return res.status(400).json({ error: 'userName cannot be null or empty' });
  }

  try {
    const room = await roomCreator(userName);
    res.json({ message: 'Room created', roomCode: room.roomCode, room });
  } catch (err) {
    console.error('Error creating room:', err);
    res.status(500).json({ error: 'Failed to create room' });
  }
});

export default router;