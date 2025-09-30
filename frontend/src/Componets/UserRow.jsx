import React, { useState, useEffect } from 'react';
import '../Styles/TableStyles.css';

const UserRow = ({ user, isEditing, onEdit, onDelete, onUpdate, onCancelEdit }) => {
    const [editData, setEditData] = useState({
        name: user.name,
        email: user.email
    });

    useEffect(() => {
        if (isEditing) {
            setEditData({
                name: user.name,
                email: user.email
            });
        }
    }, [isEditing, user]);

    const handleEditChange = (e) => {
        setEditData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleUpdate = () => {
        if (!editData.name || !editData.email) {
            alert("A név és az email mező kitöltése kötelező!");
            return;
        }
        onUpdate(user.id, editData);
    };

    const handleDelete = () => {
        if (window.confirm(`Biztosan törölni szeretnéd a(z) ${user.id} ID-jű felhasználót?`)) {
            onDelete(user.id);
        }
    };

    return (
        <tr>
            <td className='tableCellStyle'>{user.id}</td> 
            {isEditing ? (
                <>
                    <td className='tableCellStyle'>
                        <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleEditChange}
                        />
                    </td>
                    <td className='tableCellStyle'>
                        <input
                            type="email"
                            name="email"
                            value={editData.email}
                            onChange={handleEditChange}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td className='tableCellStyle'>{user.name}</td>
                    <td className='tableCellStyle'>{user.email}</td>
                </>
            )}
            
            <td className='tableCellStyle'>{new Date(user.created_at).toLocaleDateString()}</td>

            <td className='tableCellStyle'>
                {isEditing ? (
                    <>
                        <button onClick={handleUpdate} className='editButtonStyle'>
                            Mentés
                        </button>
                        <button onClick={onCancelEdit} className='deleteButtonStyle'>
                            Mégse
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => onEdit(user)} className='editButtonStyle'>
                            Szerkesztés
                        </button>
                        <button onClick={handleDelete} className='deleteButtonStyle'>
                            Törlés
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserRow;