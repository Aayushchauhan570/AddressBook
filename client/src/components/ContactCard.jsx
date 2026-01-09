const ContactCard = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="card mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{contact.name}</h3>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <div style={{ marginBottom: '0.25rem' }}>📧 {contact.email}</div>
                    <div>📱 {contact.phone}</div>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(contact)}
                    className="btn btn-secondary"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(contact.id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
