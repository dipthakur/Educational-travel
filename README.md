# Educational Tour Booking System

## Overview
The **Educational Tour Booking System** is a web-based application designed to facilitate booking educational and corporate tours. Built using modern web technologies, it provides a user-friendly platform for schools, colleges, and corporate groups to plan and manage their trips efficiently.

## Features
- **User Authentication**: Secure login and registration for users.
- **Tour Listings**: Browse various educational and corporate tour packages.
- **Booking System**: Users can select and book tours online.
- **Admin Dashboard**: Manage tours, bookings, and users.
- **Payment Integration**: Secure online payment options.
- **Responsive Design**: Optimized for mobile and desktop devices.

## Technologies Used
- **Frontend**:
  - React.js (Vite for fast development)
  - Bootstrap (for styling)
  - HTML, CSS, JavaScript
- **Backend**:
  - Node.js with Express.js
  - MySQL (Database for storing user and booking details)
- **Additional Tools**:
  - ESLint (for code quality)
  - SWC/Babel (for fast refresh and compilation)

## Installation Guide
### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version)
- MySQL Database
- Git (optional)

### Steps to Run Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/educational-tour-booking.git
   cd educational-tour-booking
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up the database**:
   - Create a MySQL database.
   - Import the provided SQL file (`database.sql`) in MySQL.
   - Configure the `.env` file with database credentials.
4. **Start the backend server**:
   ```bash
   cd server
   node index.js
   ```
5. **Start the frontend**:
   ```bash
   cd client
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:5173`

## Usage
- Register/Login as a user.
- Browse available educational and corporate tours.
- Select a tour and complete the booking.
- Admins can manage tours and bookings from the dashboard.

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## License
https://github.com/dipthakur

## Contact
For inquiries, contact us at [imdeepak.info@gmail.com].

## WebsiteView
https://i.imgur.com/IPpnVeP.png
