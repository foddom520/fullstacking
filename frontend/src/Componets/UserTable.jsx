import React from 'react';
import UserRow from './UserRow';
import { tableHeaderStyle, noUsersCellStyle } from '../Styles/tablestyles';

const UserTable = ({ users, onEdit, onDelete, onUpdate, onCancelEdit, editingId }) => {
    if (users.length === 0) {
        return (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td colSpan="5" style={noUsersCellStyle}>
                            Nincsenek felhasználók az adatbázisban.
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={tableHeaderStyle}>#ID</th>
                    <th style={tableHeaderStyle}>Név</th>
                    <th style={tableHeaderStyle}>Email</th>
                    <th style={tableHeaderStyle}>Regisztráció</th>
                    <th style={tableHeaderStyle}>Műveletek</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserRow
                        key={user.id}
                        user={user}
                        isEditing={editingId === user.id}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onCancelEdit={onCancelEdit}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;