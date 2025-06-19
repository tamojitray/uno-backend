import Room from '../models/Room.js';

export async function roomCreator(userName) {

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let roomCode = '';
  for (let i = 0; i < 6; i++) {
    roomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const room = new Room({
    roomCode,
    host: userName,
    players: [userName],
    createdAt: new Date(),
  });

  await room.save();

  return room;
}
