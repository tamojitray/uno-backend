import express from 'express';
import createRoomRouter from './routes/createRoom.js';
import connectDB from './db.js';

const app = express();
const port = 3000

app.use(express.json());

await connectDB(); 
app.use('/create_room', createRoomRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});