import React, { useState, useEffect, FormEvent } from 'react';
import { Card, CardHeader, CardBody, Button, Input, Select, Alert, CardFooter } from '../../components/common/FormElements';
import { Edit, Slash, Loader } from '../../components/icons/Icons';
import { User } from '../../types';

const API_BASE_URL = 'http://localhost:5000/api';

const UserListPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({ username: '', email: '', role: '', status: '', password: '' });
    const [modalError, setModalError] = useState('');
    const [modalIsLoading, setModalIsLoading] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState('');

    const fetchUsers = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch users.');
            const data = await response.json();
            setUsers(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const openEditModal = (user: User) => {
        setEditingUser(user);
        setFormData({ username: user.username, email: user.email, role: user.role, status: user.status, password: '' });
        setIsModalOpen(true);
        setModalError('');
        setUpdateSuccess('');
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateUser = async (e: FormEvent) => {
        e.preventDefault();
        if (!editingUser) return;

        setModalIsLoading(true);
        setModalError('');
        setUpdateSuccess('');

        const updateData: any = { ...formData };
        if (!updateData.password) {
            delete updateData.password; // Don't send empty password
        }

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/users/${editingUser._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to update user.');
            
            setUpdateSuccess('User updated successfully!');
            fetchUsers();
            setTimeout(() => closeEditModal(), 1500);

        } catch (err: any) {
            setModalError(err.message);
        } finally {
            setModalIsLoading(false);
        }
    };

    const renderTable = () => {
        if (isLoading) return <div className="p-8 text-center"><Loader className="h-8 w-8 animate-spin mx-auto text-sky-600" /></div>;
        if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

        return (
             <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map(user => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 capitalize">{user.role}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-sm space-x-2">
                                    <button onClick={() => openEditModal(user)} className="text-gray-500 hover:text-yellow-600"><Edit className="h-5 w-5"/></button>
                                    <button className="text-gray-500 hover:text-red-600"><Slash className="h-5 w-5"/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <>
            <Card>
                <CardHeader title="User List" />
                <CardBody>
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                        <Input label="" id="search-users" placeholder="Search by name or role..." className="w-full md:w-1/3" />
                        <Select label="" id="filter-status">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </Select>
                    </div>
                    {renderTable()}
                </CardBody>
            </Card>

            {isModalOpen && editingUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <Card className="w-full max-w-lg">
                        <form onSubmit={handleUpdateUser}>
                            <CardHeader title={`Edit User: ${editingUser.username}`} />
                            <CardBody className="space-y-4">
                                {modalError && <Alert type="error" message={modalError} onClose={() => setModalError('')} />}
                                {updateSuccess && <Alert type="success" message={updateSuccess} />}
                                <Input label="Username" id="username" name="username" value={formData.username} onChange={handleFormChange} required />
                                <Input label="Email" id="email" name="email" type="email" value={formData.email} onChange={handleFormChange} required />
                                <Select label="Role" id="role" name="role" value={formData.role} onChange={handleFormChange}>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Admin</option>
                                    <option value="accountant">Accountant</option>
                                    <option value="staff">Staff</option>
                                </Select>
                                <Select label="Status" id="status" name="status" value={formData.status} onChange={handleFormChange}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </Select>
                                <Input label="New Password (optional)" id="password" name="password" type="password" value={formData.password} onChange={handleFormChange} placeholder="Leave blank to keep current password" />
                            </CardBody>
                            <CardFooter className="flex justify-end gap-2">
                                <Button type="button" variant="secondary" onClick={closeEditModal}>Cancel</Button>
                                <Button type="submit" disabled={modalIsLoading}>
                                     {modalIsLoading && <Loader className="animate-spin h-5 w-5 mr-3" />}
                                     {modalIsLoading ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            )}
        </>
    );
};

export default UserListPage;