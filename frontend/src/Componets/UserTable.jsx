import React from 'react';
import UserRow from './UserRow';
import '../Styles/TableStyles.css';

const UserTable = ({ users, onEdit, onDelete, onUpdate, onCancelEdit, editingId }) => {
    if (users.length === 0) {
        return (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td colSpan="5" className='noUsersCellStyle'>
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
                    <th className='tableHeaderStyle'>#ID</th>
                    <th className='tableHeaderStyle'>Név</th>
                    <th className='tableHeaderStyle'>Email</th>
                    <th className='tableHeaderStyle'>Regisztráció</th>
                    <th className='tableHeaderStyle'>Műveletek</th>
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