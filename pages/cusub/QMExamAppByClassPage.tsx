
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';

const mockClassResults = [
    { id: 'S001', name: 'Ahmed Ali', score: '85/100', status: 'Passed' },
    { id: 'S002', name: 'Fatima Omar', score: '92/100', status: 'Passed' },
    { id: 'S003', name: 'Yusuf Hassan', score: '78/100', status: 'Passed' },
];

const QMExamAppByClassPage: React.FC = () => {
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Q/M Exam App by Class" subtitle="View and manage exam data for a specific class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Branch" id="branch">
                                <option>Main Branch</option>
                            </Select>
                            <Select label="Select Class" id="class">
                                <option>Grade 9A</option>
                                <option>Grade 9B</option>
                            </Select>
                            <Select label="Exam Type" id="exam-type">
                                <option>Mid-term Q/M</option>
                                <option>Final Q/M</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">View Results</Button>
                    </CardFooter>
                </form>
            </Card>

            {showResults && (
                <Card className="mt-8">
                    <CardHeader title="Results for Grade 9A - Mid-term Q/M" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockClassResults.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.score}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {student.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default QMExamAppByClassPage;
