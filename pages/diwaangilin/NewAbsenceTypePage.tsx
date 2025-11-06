import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewAbsenceTypePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New absence type "Family Emergency" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Absence Type" subtitle="Define different categories for tracking attendance." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Absence Type Name" id="absence-name" placeholder="e.g., Family Emergency" required />
                            <Select label="Category" id="category" required>
                                <option>Student</option>
                                <option>Staff</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Type
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewAbsenceTypePage;