import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const CopyClassTimetablePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Timetable successfully copied from Grade 7A to Grade 7B.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader title="Copy Class Timetable" subtitle="Duplicate an existing timetable for another class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4 p-4 border rounded-md">
                                <h3 className="font-semibold text-lg">Source (Copy From)</h3>
                                <Select label="Select Branch" id="from-branch" required>
                                    <option>Main Branch</option>
                                </Select>
                                <Select label="Select Class" id="from-class" required>
                                    <option>Grade 7A</option>
                                    <option>Grade 8A</option>
                                </Select>
                            </div>
                             <div className="space-y-4 p-4 border rounded-md">
                                <h3 className="font-semibold text-lg">Destination (Copy To)</h3>
                                <Select label="Select Branch" id="to-branch" required>
                                    <option>Main Branch</option>
                                </Select>
                                <Select label="Select Class" id="to-class" required>
                                    <option>Grade 7B</option>
                                    <option>Grade 8B</option>
                                </Select>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Copy Timetable</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default CopyClassTimetablePage;
