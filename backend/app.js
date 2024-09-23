import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import playerRouter from './modules/player/router.js';
import organizerRouter from './modules/organizer/router.js';
import tournamentRouter from './modules/tournament/router.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/players', playerRouter);
app.use('/api/organizers', organizerRouter);
app.use('/api/tournaments', tournamentRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API service!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;