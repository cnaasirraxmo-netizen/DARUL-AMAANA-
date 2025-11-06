import React from 'react';
import { Card, CardHeader, CardBody, Select, Input, Button } from '../../components/common/FormElements';

const mockCancelledData = [
    { date: '2024-10-26', type: 'Billing', id: 'B202410-002', user: 'Admin', reason: 'Billed in error.' },
    { date: '2024-10-25', type: 'Student', id: 'S098', user: 'Admin', reason: 'Duplicate entry.' },
    { date: '2024-10-24', type: 'Payment', id: 'P005', user: 'Finance', reason: 'Incorrect amount entered.' },
];

const CancelledRecordsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Cancelled Records Audit Log" subtitle="A record of all deleted or voided transactions." />
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Select label="" id="record-type">
                            <option>All Record Types</option>
                            <option>Billing</option>
                            <option>Payment</option>
                            <option>Student</option>
                        </Select>
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                    </div>
                    <Button>Filter Log</Button>
                </div>
                
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Record Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Record ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cancelled By</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockCancelledData.map(item => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.user}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default CancelledRecordsPage;