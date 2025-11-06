import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const marks = [
    { subject: 'Mathematics', score: 85, grade: 'A' },
    { subject: 'Science', score: 90, grade: 'A+' },
    { subject: 'English', score: 88, grade: 'A' },
    { subject: 'History', score: 75, grade: 'B' },
];

const MarksheetV2Page: React.FC = () => {
    const [showMarksheet, setShowMarksheet] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowMarksheet(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Generate Marksheet (V2)" subtitle="Select a student to view their detailed marksheet." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Input label="Student ID or Name" id="student-search" placeholder="Search for a student..." required />
                            <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate</Button>
                    </CardFooter>
                </form>
            </Card>

            {showMarksheet && (
                <Card className="mt-8">
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" /> Print Marksheet
                            </Button>
                        </div>
                        <div className="p-8 border-2 border-dashed rounded-lg bg-white printable-area">
                            <div className="text-center mb-6">
                                <School className="h-12 w-12 mx-auto text-gray-700" />
                                <h2 className="text-3xl font-serif font-bold mt-2">ACADEMIC TRANSCRIPT</h2>
                                <p className="text-gray-500">Mogadishu Primary & Secondary School</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                <p><span className="font-semibold">Student Name:</span> Ahmed Ali</p>
                                <p><span className="font-semibold">Student ID:</span> S001</p>
                                <p><span className="font-semibold">Class:</span> Grade 9A</p>
                                <p><span className="font-semibold">Exam:</span> Mid-term 2024-2025</p>
                            </div>

                            <table className="min-w-full">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-6 py-2 text-left text-xs font-medium uppercase">Subject</th>
                                        <th className="px-6 py-2 text-center text-xs font-medium uppercase">Score</th>
                                        <th className="px-6 py-2 text-center text-xs font-medium uppercase">Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {marks.map((mark, i) => (
                                        <tr key={i} className="border-b">
                                            <td className="px-6 py-3 font-medium">{mark.subject}</td>
                                            <td className="px-6 py-3 text-center">{mark.score}</td>
                                            <td className="px-6 py-3 text-center font-bold">{mark.grade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            <div className="mt-6 text-right font-bold text-lg">
                                <p>Total Score: 338 / 400</p>
                                <p>Average: 84.5%</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default MarksheetV2Page;
