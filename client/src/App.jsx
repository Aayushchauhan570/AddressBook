import { useState, useEffect } from 'react';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';

const API_URL = 'http://localhost:3001/api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (editingContact) {
        await fetch(`${API_URL}/${editingContact.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      fetchContacts();
      setIsFormOpen(false);
      setEditingContact(null);
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const openEdit = (contact) => {
    setEditingContact(contact);
    setIsFormOpen(true);
  };

  const openAdd = () => {
    setEditingContact(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingContact(null);
  };

  return (
    <div className="container">
      <header className="flex justify-between items-center mb-6">
        <h1>Address Book</h1>
        {!isFormOpen && (
          <button onClick={openAdd} className="btn btn-primary">
            + New Contact
          </button>
        )}
      </header>

      {isFormOpen ? (
        <ContactForm
          onSubmit={handleCreateOrUpdate}
          initialData={editingContact}
          onCancel={closeForm}
        />
      ) : (
        <div className="contact-list">
          {contacts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              No contacts found. Add one to get started!
            </p>
          ) : (
            contacts.map(contact => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
