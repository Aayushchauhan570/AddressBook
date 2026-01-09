import { useState, useEffect } from 'react';

const ContactForm = ({ onSubmit, initialData, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ name: '', email: '', phone: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="card mb-6">
            <h2 className="mb-4">{initialData ? 'Edit Contact' : 'New Contact'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>Full Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label>Email Address</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label>Phone Number</label>
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        required
                    />
                </div>
                <div className="flex gap-2 justify-between">
                    {onCancel && (
                        <button type="button" onClick={onCancel} className="btn btn-secondary" style={{ width: '48%' }}>
                            Cancel
                        </button>
                    )}
                    <button type="submit" className="btn btn-primary" style={{ width: onCancel ? '48%' : '100%' }}>
                        {initialData ? 'Update Contact' : 'Add Contact'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
