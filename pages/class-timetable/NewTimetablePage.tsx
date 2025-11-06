import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewTimetablePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New timetable created for Grade 7A for the 2024-2025 academic year.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Timetable" subtitle="Set up a new timetable for a class and academic year." />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Academic Year" id="academic-year" required>
                                <option>2024-2025</option>
                                <option>2025-2026</option>
                            </Select>
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="Select Class" id="class" required>
                                <option>Grade 7A</option>
                                <option>Grade 7B</option>
                                <option>Grade 8A</option>
                            </Select>
                             <Input label="Timetable Name" id="timetable-name" placeholder="e.g., Grade 7A Standard Timetable" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Create Timetable
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewTimetablePage;
