import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2/promise'; 
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


db.getConnection()
  .then(connection => {
    console.log('Connected to MySQL database');
    connection.release(); 
  })
  .catch(err => console.error('Database connection failed:', err));


app.post('/book-tour', async (req, res) => {
  const { name, phone, email, address, location, dates, message } = req.body;
  
  if (!name || !phone || !email || !location || !dates || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const sql = "INSERT INTO bookings (name, phone, email, address, location, dates, message) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [name, phone, email, address, location, dates, message]);
    
    res.status(200).json({ message: "Tour booked successfully!", bookingId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
