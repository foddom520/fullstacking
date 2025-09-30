import { useState, useCallback } from 'react';
import axios from 'axios';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/users');
            setUsers(response.data);
            setError(null);
            return response.data;
        } catch (err) {
            const errorMessage = "Nem sikerült betölteni az adatokat. Ellenőrizze, hogy a backend szerver fut-e a 3001-es porton.";
            setError(errorMessage);
            console.error("Hiba az adatok lekérésekor:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const createUser = useCallback(async (userData) => {
        try {
            await axios.post('http://localhost:3001/api/users', userData);
            await fetchUsers();
        } catch (err) {
            const errorMessage = "Hiba történt a felhasználó hozzáadása közben.";
            setError(errorMessage);
            console.error('Hiba az adatok küldésekor:', err);
            throw err;
        }
    }, [fetchUsers]);

    const updateUser = useCallback(async (id, userData) => {
        try {
            await axios.patch(`http://localhost:3001/api/users/${id}`, userData);
            await fetchUsers();
        } catch (err) {
            const errorMessage = "Nem sikerült módosítani a felhasználót.";
            setError(errorMessage);
            console.error("Hiba a módosításkor:", err);
            throw err;
        }
    }, [fetchUsers]);

    const deleteUser = useCallback(async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/users/${id}`);
            await fetchUsers();
        } catch (err) {
            const errorMessage = "Nem sikerült törölni a felhasználót.";
            setError(errorMessage);
            console.error("Hiba a törléskor:", err);
            throw err;
        }
    }, [fetchUsers]);

    return {
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        updateUser,
        deleteUser,
        setError
    };
};

export default useUsers;