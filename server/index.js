const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let students = []; // Store students in memory

// Endpoint to add a new student
app.post('/api/students', (req, res) => {
    const { name } = req.body;
    students.push({ name });
    res.json({ success: true, message: 'Student added successfully' });
});

// Endpoint to get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Endpoint to delete a student
app.delete('/api/students/:name', (req, res) => {
    const name = req.params.name; // Retrieve the name from URL parameters
    console.log('Deleting student with name:', name);
    students = students.filter(student => student.name !== name);
    res.json({ message: 'Student deleted successfully' });
});



app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));


