import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomCode: { type: String, required: true, unique: true },
  host: { type: String, required: true },
  players: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', RoomSchema);
export default Room;
