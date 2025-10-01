import React from "react";
import UserForm from './UserForm';
import useUsers from '../Hooks/Hooks';
import { useNavigate } from "react-router";

function AddUserPage() {
    const { createUser } = useUsers();
    const navigate = useNavigate();

    const handleCreateUser = async (userData) => {
        try {
            await createUser(userData);
            navigate('/');
        } catch (err) {
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="App">
            <h1>Új felhasználó hozzáadása</h1>
            <button 
                onClick={handleCancel}
                style={{ padding: '5px 10px', marginBottom: '20px' }}
            >
                Vissza a listához
            </button>
            <UserForm 
                onSubmit={handleCreateUser}
                onCancel={handleCancel}
            />
        </div>
    );
}

export default AddUserPage;