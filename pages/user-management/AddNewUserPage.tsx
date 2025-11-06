import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const AddNewUserPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New user "Ali Omar" created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Add New User" subtitle="Create a new account and assign a role." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Full Name" id="full-name" required />
                            <Input label="Username" id="username" required />
                            <Input label="Email Address" id="email" type="email" />
                            <Input label="Password" id="password" type="password" required />
                            <Select label="Role" id="role" required>
                                <option>Teacher</option>
                                <option>Accountant</option>
                                <option>Admin</option>
                                <option>Data Entry</option>
                            </Select>
                            <Select label="Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Create User
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default AddNewUserPage;
