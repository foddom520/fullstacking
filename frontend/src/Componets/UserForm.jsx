import React, { useState } from 'react';
import '../Styles/TableStyles.css';

const UserForm = ({ onSubmit, initialData = {}, isEditing = false, onCancel }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        email: initialData.email || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert("A név és az email megadása kötelező!");
            return;
        }
        onSubmit(formData);
        if (!isEditing) {
            setFormData({ name: '', email: '' });
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const cancelButtonStyle = {
        padding: '5px 10px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
            <h2>{isEditing ? 'Felhasználó szerkesztése' : 'Új felhasználó hozzáadása'}</h2>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Név"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ marginRight: '10px', padding: '5px', width: '200px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ marginRight: '10px', padding: '5px', width: '200px' }}
                />
            </div>
            <button 
                type="submit" 
                style={{ 
                    padding: '5px 10px', 
                    marginRight: '5px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                }}
            >
                {isEditing ? 'Mentés' : 'Hozzáadás'}
            </button>
            {(isEditing || onCancel) && (
                <button 
                    type="button" 
                    onClick={onCancel} 
                    style={cancelButtonStyle}
                >
                    {isEditing ? 'Mégse' : 'Mégse'}
                </button>
            )}
        </form>
    );
};

export default UserForm;