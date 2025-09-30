import React, { useState } from 'react';
import { cancelButtonStyle } from '../Styles/tablestyles';

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

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
            <h2>{isEditing ? 'Felhasználó szerkesztése' : 'Új felhasználó hozzáadása'}</h2>
            <input
                type="text"
                name="name"
                placeholder="Név"
                value={formData.name}
                onChange={handleChange}
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <button type="submit" style={{ padding: '5px 10px', marginRight: '5px' }}>
                {isEditing ? 'Mentés' : 'Hozzáadás'}
            </button>
            {isEditing && (
                <button type="button" onClick={onCancel} style={cancelButtonStyle}>
                    Mégse
                </button>
            )}
        </form>
    );
};

export default UserForm;