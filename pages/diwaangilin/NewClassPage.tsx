import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewClassPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Class "Grade 7A" created successfully!');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Class" subtitle="Define a new class for students to be enrolled in."/>
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Class Name" id="class-name" placeholder="e.g., Grade 7A" required />
                            <Select label="Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="Level" id="level" required>
                                <option>Grade 7</option>
                                <option>Grade 8</option>
                            </Select>
                            <Select label="Shift" id="shift" required>
                                <option>Morning</option>
                                <option>Afternoon</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Create Class
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewClassPage;