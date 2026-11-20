# NetPulse TCP
A fresh TCP educational simulation app with MongoDB-backed registration/login, dashboard counts, message segment simulation, handshake success/timeout scenarios, FLAT state notes, and history.

## Setup (Windows)
1. Install Node.js and MongoDB Community Server; confirm MongoDB service is running.
2. Open `server`, run `npm install`.
3. Copy `.env.example` to `.env`, then edit if needed. Default local URI is `mongodb://127.0.0.1:27017/netpulsetcp`.
4. Run `npm run dev` in server terminal.
5. In another terminal open `client`, run `npm install`, then `npm run dev`.
6. Open `http://localhost:5173`, register and login.

MongoDB connection status is shown in the app. Passwords are hashed and login tokens are checked by the API. This is an educational local prototype; use HTTPS, stronger secret management, rate limits, and security review before public deployment.
