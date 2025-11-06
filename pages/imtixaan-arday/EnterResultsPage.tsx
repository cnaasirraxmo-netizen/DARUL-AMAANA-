import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const mockStudents = [
    { id: 'S001', name: 'Ahmed Ali' },
    { id: 'S002', name: 'Fatima Omar' },
    { id: 'S003', name: 'Yusuf Hassan' },
    { id: 'S004', name: 'Aisha Ibrahim' },
    { id: 'S005', name: 'Mohamed Abdi' },
];

const EnterResultsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowForm(true);
    };

    const handleSave = () => {
        setSuccessMessage('Results saved successfully for Grade 9A - Mathematics!');
        setShowForm(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleSearch}>
                    <CardHeader title="Enter Exam Results" subtitle="Select a class and subject to begin entering marks." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 9A</option></Select>
                            <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                            <Select label="Subject" id="subject"><option>Mathematics</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Student List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showForm && (
                <Card className="mt-8">
                    <CardHeader title="Entering Marks for Grade 9A - Mathematics" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mark (out of 100)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockStudents.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <Input type="number" label="" id={`mark-${student.id}`} className="max-w-xs" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save Results</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default EnterResultsPage;
