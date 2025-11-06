import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const StudentParentRegistrationPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Student and Parent registered and linked successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Register Student & Parent" subtitle="Enter details for both student and parent in one go." />
                    <CardBody>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Student Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <Input label="Full Name" id="student-name" required />
                            <Input label="Date of Birth" id="student-dob" type="date" required />
                             <Select label="Class" id="class" required>
                                <option>Grade 1A</option>
                                <option>Grade 7B</option>
                            </Select>
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-800 mb-4 border-t pt-6">Parent Details</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Parent's Full Name" id="parent-name" required />
                            <Input label="Parent's Phone" id="parent-phone" type="tel" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save & Link Records
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default StudentParentRegistrationPage;