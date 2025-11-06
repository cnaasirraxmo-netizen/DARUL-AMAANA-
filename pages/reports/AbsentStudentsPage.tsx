import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockAbsentees = [
    { id: 'S001', name: 'Ahmed Ali', class: 'Grade 9A', date: '2024-10-25', reason: 'Sick' },
    { id: 'S015', name: 'Asha Nur', class: 'Grade 9A', date: '2024-10-25', reason: 'Unexcused' },
    { id: 'S023', name: 'Abdi Yusuf', class: 'Grade 9B', date: '2024-10-25', reason: 'Family Emergency' },
];

const AbsentStudentsPage: React.FC = () => {
    const [showReport, setShowReport] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowReport(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Absent Students Report" subtitle="Generate a list of students absent on a specific date or period." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Input label="Date" id="date" type="date" required />
                            <Select label="Branch" id="branch"><option>All Branches</option></Select>
                            <Select label="Class" id="class"><option>All Classes</option></Select>
                            <Select label="Reason" id="reason"><option>Any Reason</option><option>Unexcused</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showReport && (
                <Card className="mt-8">
                    <CardHeader title="Absentee Report for 2024-10-25" />
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockAbsentees.map(s => (
                                        <tr key={s.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.reason}</td>
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

export default AbsentStudentsPage;