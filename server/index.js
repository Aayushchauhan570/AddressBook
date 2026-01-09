const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Typically React runs on 3000 or 5173 (Vite), so 3001 for server

app.use(cors());
app.use(express.json());

// In-memory data store
let contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
];

// Routes
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

app.post('/api/contacts', (req, res) => {
    const newContact = { 
        id: Date.now(), 
        ...req.body 
    };
    contacts.push(newContact);
    res.status(201).json(newContact);
});

app.put('/api/contacts/:id', (req, res) => {
    const { id } = req.params;
    const index = contacts.findIndex(c => c.id == id);
    if (index !== -1) {
        contacts[index] = { ...contacts[index], ...req.body };
        res.json(contacts[index]);
    } else {
        res.status(404).json({ message: 'Contact not found' });
    }
});

app.delete('/api/contacts/:id', (req, res) => {
    const { id } = req.params;
    contacts = contacts.filter(c => c.id != id);
    res.json({ message: 'Deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
