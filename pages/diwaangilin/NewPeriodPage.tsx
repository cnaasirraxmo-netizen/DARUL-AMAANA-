import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewPeriodPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New period "Period 1 (8:00 - 8:45)" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Period" subtitle="Define a new time slot for class schedules (Xiisad Cusub)." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Period Name" id="period-name" placeholder="e.g., Period 1" required />
                             <div className="grid grid-cols-2 gap-4">
                                <Input label="Start Time" id="start-time" type="time" required />
                                <Input label="End Time" id="end-time" type="time" required />
                            </div>
                            <Select label="Shift" id="shift" required>
                                <option>Morning</option>
                                <option>Afternoon</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Period
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewPeriodPage;