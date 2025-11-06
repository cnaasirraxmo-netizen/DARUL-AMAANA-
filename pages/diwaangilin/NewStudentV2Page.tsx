import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewStudentV2Page: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Student and Parent details saved. Student ID: S1255');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="New Student Registration (V2)" subtitle="A streamlined form for quick student enrollment." />
                    <CardBody>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Input label="Full Name" id="full-name" required />
                                <Input label="Student Phone" id="student-phone" type="tel" />
                                <Select label="Class" id="class" required>
                                    <option>Grade 1A</option>
                                    <option>Grade 7B</option>
                                </Select>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Input label="Parent Name" id="parent-name" required />
                                <Input label="Parent Phone" id="parent-phone" type="tel" required />
                                <Select label="Branch" id="branch" required>
                                    <option>Main Branch</option>
                                    <option>West Branch</option>
                                </Select>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewStudentV2Page;