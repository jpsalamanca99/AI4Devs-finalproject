import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import playerRouter from './modules/player/router.js';
import organizerRouter from './modules/organizer/router.js';
import tournamentRouter from './modules/tournament/router.js';
import groupRouter from './modules/group/router.js';
import bracketRouter from './modules/bracket/router.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

// Routes
app.use('/api/players', playerRouter);
app.use('/api/organizers', organizerRouter);
app.use('/api/tournaments', tournamentRouter);
app.use('/api/groups', groupRouter);
app.use('/api/brackets', bracketRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API service!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;