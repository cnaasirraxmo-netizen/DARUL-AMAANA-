import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const mockCorrections = [
    { date: '2024-10-25', student: 'Ahmed Ali (S001)', subject: 'Math', old: 82, new: 85, user: 'Admin' },
    { date: '2024-10-25', student: 'Fatima Omar (S002)', subject: 'Science', old: 88, new: 90, user: 'Admin' },
];

const ExamCorrectionListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Exam Correction List" subtitle="An audit log of all changes made to student marks." />
            <CardBody>
                <div className="flex items-center gap-2 mb-4 p-4 bg-gray-50 rounded-lg">
                    <Input type="date" id="start-date" label="" />
                    <span className="text-gray-500">to</span>
                    <Input type="date" id="end-date" label="" />
                    <Button>Filter</Button>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Old Mark</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">New Mark</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Changed By</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockCorrections.map((c, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{c.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{c.student}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{c.subject}</td>
                                    <td className="px-6 py-4 text-center text-sm text-red-600">{c.old}</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">{c.new}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{c.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default ExamCorrectionListPage;