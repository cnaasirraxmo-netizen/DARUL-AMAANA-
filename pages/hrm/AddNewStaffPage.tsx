import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const AddNewStaffPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New staff member registered successfully! Employee ID: E0151');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Add New Staff" subtitle="Complete the form to register a new employee." />
                    <CardBody>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <Input label="First Name" id="first-name" required />
                            <Input label="Last Name" id="last-name" required />
                            <Select label="Gender" id="gender" required>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                            <Input label="Date of Birth" id="dob" type="date" required />
                            <Input label="Phone Number" id="phone" type="tel" required />
                            <Input label="Email Address" id="email" type="email" />
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-800 mb-4 border-t pt-6">Job Information</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <Select label="Role / Position" id="role" required>
                                <option>Teacher</option>
                                <option>Accountant</option>
                                <option>Admin</option>
                                <option>Librarian</option>
                            </Select>
                            <Select label="Department" id="department" required>
                                <option>Academics</option>
                                <option>Finance</option>
                                <option>Administration</option>
                            </Select>
                             <Input label="Joining Date" id="joining-date" type="date" required />
                        </div>

                        <h3 className="text-lg font-medium text-gray-800 mb-4 border-t pt-6">Salary Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <Input label="Basic Salary" id="basic-salary" type="number" placeholder="0.00" required />
                           <Input label="Transport Allowance" id="transport-allowance" type="number" placeholder="0.00" />
                           <Input label="Other Allowances" id="other-allowance" type="number" placeholder="0.00" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Staff Member
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default AddNewStaffPage;