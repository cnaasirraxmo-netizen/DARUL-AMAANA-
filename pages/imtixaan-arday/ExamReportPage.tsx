import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockReportData = [
    { id: 'S001', name: 'Ahmed Ali', math: 85, sci: 90, eng: 88, total: 263, avg: 87.7, rank: 2 },
    { id: 'S002', name: 'Fatima Omar', math: 92, sci: 95, eng: 91, total: 278, avg: 92.7, rank: 1 },
    { id: 'S003', name: 'Yusuf Hassan', math: 78, sci: 80, eng: 82, total: 240, avg: 80.0, rank: 3 },
];

const ExamReportPage: React.FC = () => {
    const [showReport, setShowReport] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowReport(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Exam Report (Kashf)" subtitle="Generate a comprehensive report for a class exam." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 9A</option></Select>
                            <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                            <Input label="Academic Year" id="year" defaultValue="2024-2025" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showReport && (
                <Card className="mt-8">
                    <CardHeader title="Kashf Imtixaanka - Grade 9A Mid-term Exam" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print Report
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Math</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Science</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">English</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Total</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Average</th>
                                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Rank</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockReportData.map(s => (
                                        <tr key={s.id}>
                                            <td className="px-4 py-4 text-sm text-gray-500">{s.id}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                            <td className="px-4 py-4 text-sm text-center text-gray-500">{s.math}</td>
                                            <td className="px-4 py-4 text-sm text-center text-gray-500">{s.sci}</td>
                                            <td className="px-4 py-4 text-sm text-center text-gray-500">{s.eng}</td>
                                            <td className="px-4 py-4 text-sm text-center font-bold text-gray-800">{s.total}</td>
                                            <td className="px-4 py-4 text-sm text-center font-bold text-gray-800">{s.avg.toFixed(1)}%</td>
                                            <td className="px-4 py-4 text-sm text-center font-extrabold text-sky-600">{s.rank}</td>
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

export default ExamReportPage;
