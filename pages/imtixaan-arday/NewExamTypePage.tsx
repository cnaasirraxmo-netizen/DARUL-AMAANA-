import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewExamTypePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New exam type "Quiz 1" has been successfully created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Exam Type" subtitle="Define a new type of examination, e.g., Mid-term, Final, Quiz." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Exam Name" id="exam-name" placeholder="e.g., Quiz 1" required />
                            <Select label="Academic Year" id="academic-year" required>
                                <option>2024-2025</option>
                                <option>2025-2026</option>
                            </Select>
                            <Input label="Default Total Marks" id="total-marks" type="number" placeholder="e.g., 100" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Exam Type
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewExamTypePage;
