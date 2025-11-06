import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewYearPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Academic Year "2025-2026" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Academic Year" subtitle="Define the start and end dates for a new school year." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Academic Year" id="academic-year" placeholder="e.g., 2025-2026" required />
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Start Date" id="start-date" type="date" required />
                                <Input label="End Date" id="end-date" type="date" required />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Year
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewYearPage;