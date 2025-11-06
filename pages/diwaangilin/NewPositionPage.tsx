import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewPositionPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New position "Librarian" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Position" subtitle="Define a new job role for staff members." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Position Title" id="position-title" placeholder="e.g., Librarian" required />
                            <Textarea label="Job Description" id="job-description" placeholder="Optional: Briefly describe the role's responsibilities." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Position
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewPositionPage;