import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockIncidents = [
    { id: 'D001', date: '2024-10-20', student: 'Yusuf Hassan (S003)', type: 'Disrespect', action: 'Parents Called' },
    { id: 'D002', date: '2024-10-22', student: 'Ahmed Ali (S001)', type: 'Lateness', action: 'Warning' },
];

const DisciplineReportsPage: React.FC = () => {
    const [showReport, setShowReport] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowReport(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Discipline Reports" subtitle="Generate a report of student behavior incidents." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                             <Input label="Student Name/ID" id="student-search" />
                             <Select label="Behavior Type" id="behavior-type"><option>All Types</option></Select>
                             <Input label="Start Date" id="start-date" type="date" />
                             <Input label="End Date" id="end-date" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showReport && (
                <Card className="mt-8">
                    <CardHeader title="Discipline Report" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Incident Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action Taken</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockIncidents.map(item => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.student}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{item.type}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{item.action}</td>
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

export default DisciplineReportsPage;