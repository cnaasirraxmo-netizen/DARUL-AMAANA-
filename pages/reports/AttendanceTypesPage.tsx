import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockTypes = [
    { name: 'Present', code: 'P', category: 'Positive' },
    { name: 'Absent', code: 'A', category: 'Negative' },
    { name: 'Late', code: 'L', category: 'Neutral' },
    { name: 'On Leave', code: 'LV', category: 'Neutral' },
    { name: 'Sick', code: 'S', category: 'Negative' },
];

const AttendanceTypesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Attendance Types List" subtitle="A reference list of all defined attendance statuses." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockTypes.map(type => (
                                <tr key={type.name}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{type.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{type.code}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{type.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default AttendanceTypesPage;