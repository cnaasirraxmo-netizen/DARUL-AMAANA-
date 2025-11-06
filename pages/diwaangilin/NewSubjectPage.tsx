import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewSubjectPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New subject "Physics" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Subject" subtitle="Add a new subject to the school curriculum." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Subject Name" id="subject-name" placeholder="e.g., Physics" required />
                            <Input label="Subject Code" id="subject-code" placeholder="e.g., PHY101" />
                            <Select label="Academic Level" id="level" required>
                                <option>Primary School</option>
                                <option>Middle School</option>
                                <option>High School</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                           <PlusCircle className="h-5 w-5 mr-2" />
                           Save Subject
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewSubjectPage;