import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const SetDefaultAcademicYearPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Default academic year has been set to 2024-2025.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-lg mx-auto">
                    <CardHeader title="Set Default Academic Year" subtitle="Choose the academic year for all default operations." />
                    <CardBody>
                        <Select label="Select Academic Year" id="academic-year" defaultValue="2024-2025">
                            <option>2023-2024</option>
                            <option>2024-2025</option>
                            <option>2025-2026</option>
                        </Select>
                        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700">
                            <p className="font-bold">Important</p>
                            <p>Changing this will affect all new registrations, billing, and reports.</p>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Set as Default</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SetDefaultAcademicYearPage;
