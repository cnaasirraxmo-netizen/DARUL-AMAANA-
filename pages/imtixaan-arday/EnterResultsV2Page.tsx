import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const mockStudents = [
    { id: 'S001', name: 'Ahmed Ali' },
    { id: 'S002', name: 'Fatima Omar' },
    { id: 'S003', name: 'Yusuf Hassan' },
];

const EnterResultsV2Page: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowForm(true);
    };

    const handleSave = () => {
        setSuccessMessage('Results saved successfully!');
        setShowForm(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleSearch}>
                    <CardHeader title="Enter Results (V2)" subtitle="Quick entry form for exam marks." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 8B</option></Select>
                            <Select label="Exam" id="exam"><option>Final Exam</option></Select>
                            <Select label="Subject" id="subject"><option>English</option></Select>
                             <div className="self-end">
                                <Button type="submit" className="w-full">Load</Button>
                            </div>
                        </div>
                    </CardBody>
                </form>
            </Card>

            {showForm && (
                <Card className="mt-8">
                    <CardHeader title="Entering Marks for Grade 8B - English" />
                    <CardBody>
                        <div className="space-y-4">
                            {mockStudents.map((student, index) => (
                                <div key={student.id} className="grid grid-cols-3 gap-4 items-center p-2 border-b">
                                    <span className="font-medium text-gray-700">{student.name}</span>
                                    <span className="text-sm text-gray-500">ID: {student.id}</span>
                                    <Input type="number" label="" id={`mark-${student.id}`} placeholder="Enter mark..." />
                                </div>
                            ))}
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save All</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default EnterResultsV2Page;
