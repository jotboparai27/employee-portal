# Employee Portal Backend

This is the backend of the employee portal web app used for time tracking, shift management, and internal HR requests.

## Features
- Employee login/logout
- Clock-in / Clock-out tracking
- Shift scheduling (admin side)
- Request system (shift swap, benefits)
- Pay stub access

## Setup
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
```
PORT=5050
MONGO_URI=mongodb+srv://jotboparai27:pgc@cluster0.ftmjs1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=PGC
```
4. Run `npm start`

## TODO
- Create user registration (admin only)
- Setup role-based middleware
- Build frontend
