import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewShiftPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New shift "Evening Session" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Shift" subtitle="Define operational shifts for the school day." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Shift Name" id="shift-name" placeholder="e.g., Evening Session" required />
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Start Time" id="start-time" type="time" required />
                                <Input label="End Time" id="end-time" type="time" required />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Shift
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewShiftPage;