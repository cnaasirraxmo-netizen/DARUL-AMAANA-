
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const marks = [
    { subject: 'Mathematics', score: 85, grade: 'A' },
    { subject: 'Science', score: 90, grade: 'A+' },
    { subject: 'English', score: 88, grade: 'A' },
    { subject: 'History', score: 75, grade: 'B' },
    { subject: 'Geography', score: 82, grade: 'A-' },
];

const StudentMarksheetPage: React.FC = () => {
    const [showMarksheet, setShowMarksheet] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowMarksheet(true);
    };

    return (
        <div>
            <div className="no-print">
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Generate Student Marksheet" subtitle="Select a student to view their detailed results." />
                        <CardBody>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                                <Input label="Student ID or Name" id="student-search" placeholder="Search for a student..." required />
                                <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Generate Marksheet</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>

            {showMarksheet && (
                <div className="printable-area">
                    <Card className="mt-8">
                        <CardBody>
                            <div className="flex justify-end mb-4 no-print">
                                <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                    <Printer className="h-4 w-4 mr-2" /> Print Marksheet
                                </Button>
                            </div>
                            <div className="p-8 border rounded-lg bg-white">
                                <div className="text-center mb-8">
                                    <School className="h-16 w-16 mx-auto text-sky-600" />
                                    <h2 className="text-2xl font-bold mt-2">Mogadishu Primary & Secondary School</h2>
                                    <p className="text-gray-500">Student Marksheet</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg mb-8">
                                    <p><span className="font-semibold">Student Name:</span> Ahmed Ali</p>
                                    <p><span className="font-semibold">Student ID:</span> S001</p>
                                    <p><span className="font-semibold">Class:</span> Grade 9A</p>
                                    <p><span className="font-semibold">Exam:</span> Mid-term 2024-2025</p>
                                </div>

                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Subject</th>
                                            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase">Score</th>
                                            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {marks.map((mark, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 font-medium text-gray-800">{mark.subject}</td>
                                                <td className="px-6 py-4 text-center text-gray-600">{mark.score}</td>
                                                <td className="px-6 py-4 text-center font-bold text-gray-800">{mark.grade}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                
                                <div className="mt-8 text-right bg-gray-100 p-4 rounded-lg">
                                    <p className="text-lg"><span className="font-semibold">Total Score:</span> 420 / 500</p>
                                    <p className="text-xl font-bold"><span className="font-semibold">Average:</span> 84.0%</p>
                                    <p className="text-lg font-bold text-green-600">Status: Passed</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default StudentMarksheetPage;