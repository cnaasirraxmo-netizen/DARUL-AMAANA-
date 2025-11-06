import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockShifts = [
    { name: 'Morning Shift', start: '07:30 AM', end: '01:30 PM' },
    { name: 'Afternoon Shift', start: '01:30 PM', end: '06:00 PM' },
    { name: 'Admin Office Hours', start: '08:00 AM', end: '04:00 PM' },
];

const EmployeeShiftListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Employee Shift List" subtitle="A reference list of all defined work shifts." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shift Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockShifts.map(shift => (
                                <tr key={shift.name}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{shift.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{shift.start}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{shift.end}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default EmployeeShiftListPage;