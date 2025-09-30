import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import UserForm from './UserForm';
import UserTable from './UserTable';
import Loading from './Loading';
import Error from './Error';
import useUsers from '../Hooks/Hooks';

function App() {
    const { users, loading, error, fetchUsers, createUser, updateUser, deleteUser, setError } = useUsers();
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleCreateUser = async (userData) => {
        try {
            await createUser(userData);
        } catch (err) {
            // Error is already handled in the hook
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
        } catch (err) {
            // Error is already handled in the hook
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
            // Error is already handled in the hook
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div className="App">
            <h1>Felhasználókezelő (Full-Stack CRUD)</h1>
            
            <UserForm 
                onSubmit={handleCreateUser}
            />
            
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

export default App;