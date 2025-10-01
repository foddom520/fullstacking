import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import Loading from './Loading';
import Error from './Error';
import useUsers from '../Hooks/Hooks';
import { useNavigate } from 'react-router';


function AppContent() {
    const { users, loading, error, fetchUsers, createUser, updateUser, deleteUser, setError } = useUsers();
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleCreateUser = async (userData) => {
        try {
            await createUser(userData);
            navigate('/');
        } catch (err) {
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
        } catch (err) {
        }
    };

    const handleEditStart = (user) => {
        setEditingId(user.id);
    };

    const handleUpdateUser = async (id, userData) => {
        try {
            await updateUser(id, userData);
            setEditingId(null);
        } catch (err) {
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div className="App">            
            <button 
                onClick={() => navigate('/add')}
                style={{ padding: '10px 15px', marginBottom: '20px' }}
            >
                Új felhasználó hozzáadása
            </button>
            
            <hr />   
            <h2>Felhasználók Listája</h2>
            <UserTable
                users={users}
                onEdit={handleEditStart}
                onDelete={handleDeleteUser}
                onUpdate={handleUpdateUser}
                onCancelEdit={handleCancelEdit}
                editingId={editingId}
            />
        </div>
    );
}

export default AppContent;