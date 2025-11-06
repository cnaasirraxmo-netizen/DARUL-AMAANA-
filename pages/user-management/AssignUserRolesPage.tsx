import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const AssignUserRolesPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [currentRole, setCurrentRole] = useState('');
    
    const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUser(e.target.value);
        // Mock role lookup
        if (e.target.value === 'ahmed_yusuf') {
            setCurrentRole('Teacher');
        } else if (e.target.value === 'omar_hassan') {
            setCurrentRole('Accountant');
        } else {
            setCurrentRole('');
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`User role updated successfully.`);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-xl mx-auto">
                    <CardHeader title="Assign User Roles" subtitle="Change a user's role and associated permissions." />
                    <CardBody>
                        <div className="space-y-4">
                           <Select label="Select User" id="user-select" value={user} onChange={handleUserChange} required>
                                <option value="">Select a user...</option>
                                <option value="ahmed_yusuf">Ahmed Yusuf</option>
                                <option value="omar_hassan">Omar Hassan</option>
                           </Select>
                           {user && <p>Current Role: <span className="font-semibold">{currentRole}</span></p>}
                           <Select label="New Role" id="new-role" required>
                               <option>Teacher</option>
                               <option>Accountant</option>
                               <option>Admin</option>
                               <option>Librarian</option>
                           </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" disabled={!user}>Assign Role</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default AssignUserRolesPage;
