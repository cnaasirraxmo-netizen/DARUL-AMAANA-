import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const mockStudentsWithMarks = [
    { id: 'S001', name: 'Ahmed Ali', mark: 85 },
    { id: 'S002', name: 'Fatima Omar', mark: 92 },
    { id: 'S003', name: 'Yusuf Hassan', mark: 78 },
    { id: 'S004', name: 'Aisha Ibrahim', mark: 65 },
];

const CorrectClassResultsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };

    const handleSave = () => {
        setSuccessMessage('Waa lagu guulaystay! Class results have been corrected and saved.');
        setShowResults(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleSearch}>
                    <CardHeader title="Correct Class Results" subtitle="Load and edit results for an entire class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 9A</option></Select>
                            <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                            <Select label="Subject" id="subject"><option>Science</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Results for Correction</Button>
                    </CardFooter>
                </form>
            </Card>

            {showResults && (
                <Card className="mt-8">
                    <CardHeader title="Correcting Results for Grade 9A - Science" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Corrected Mark</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockStudentsWithMarks.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <Input type="number" defaultValue={student.mark} label="" id={`mark-${student.id}`} className="max-w-xs" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save Corrections</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default CorrectClassResultsPage;
