import React, { useState, useEffect } from 'react';
import { tableCellStyle, saveButtonStyle, cancelButtonStyle, editButtonStyle, deleteButtonStyle } from '../Styles/tablestyles';

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
            <td style={tableCellStyle}>{user.id}</td> 
            {isEditing ? (
                <>
                    <td style={tableCellStyle}>
                        <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleEditChange}
                        />
                    </td>
                    <td style={tableCellStyle}>
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
                    <td style={tableCellStyle}>{user.name}</td>
                    <td style={tableCellStyle}>{user.email}</td>
                </>
            )}
            
            <td style={tableCellStyle}>{new Date(user.created_at).toLocaleDateString()}</td>

            <td style={tableCellStyle}>
                {isEditing ? (
                    <>
                        <button onClick={handleUpdate} style={saveButtonStyle}>
                            Mentés
                        </button>
                        <button onClick={onCancelEdit} style={cancelButtonStyle}>
                            Mégse
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => onEdit(user)} style={editButtonStyle}>
                            Szerkesztés
                        </button>
                        <button onClick={handleDelete} style={deleteButtonStyle}>
                            Törlés
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserRow;