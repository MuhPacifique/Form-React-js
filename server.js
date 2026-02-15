import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Database connection configuration
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '', // Add your MySQL password here
};

// Create connection
let db = mysql.createConnection(dbConfig);

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return reject(err);
      }
      console.log('Connected to MySQL server');
      
      db.query("CREATE DATABASE IF NOT EXISTS user_db", (err) => {
        if (err) {
          console.error('Error creating database:', err);
          return reject(err);
        }
        
        db.query("USE user_db", (err) => {
          if (err) {
            console.error('Error selecting database:', err);
            return reject(err);
          }
          
          const createTableSql = `
            CREATE TABLE IF NOT EXISTS users (
              id INT AUTO_INCREMENT PRIMARY KEY,
              firstName VARCHAR(100) NOT NULL,
              lastName VARCHAR(100) NOT NULL,
              email VARCHAR(100) NOT NULL UNIQUE,
              phone VARCHAR(20) NOT NULL,
              password VARCHAR(255) NOT NULL
            )
          `;
          db.query(createTableSql, (err) => {
            if (err) {
              console.error('Error creating table:', err);
              return reject(err);
            }
            console.log('Database and table ready');
            resolve();
          });
        });
      });
    });
  });
};

// Register endpoint
app.post('/register', (req, res) => {
  console.log('Registration request received:', req.body);
  const { firstName, lastName, email, phone, password } = req.body;
  
  if (!firstName || !lastName || !email || !phone || !password) {
    console.error('Missing required fields');
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = "INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [firstName, lastName, email, phone, password], (err, result) => {
    if (err) {
      console.error('Error during registration:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Email already registered' });
      }
      return res.status(500).json({ message: 'Error during registration' });
    }
    console.log('Registration successful for:', email);
    res.status(200).json({ message: 'Registration successful' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).json({ message: 'Error during login' });
    }
    
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// Get all users
app.get('/users', (req, res) => {
  const sql = "SELECT id, firstName, lastName, email, phone FROM users";
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
    }
    res.status(200).json(results);
  });
});

// Update user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone } = req.body;
  const sql = "UPDATE users SET firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?";
  
  db.query(sql, [firstName, lastName, email, phone, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).json({ message: 'Error updating user' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ message: 'Error deleting user' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Root route for health check
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start initialization
initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://127.0.0.1:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database. Server not started.');
  });
