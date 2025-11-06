import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockMessages = [
    { date: '2024-10-25', recipient: 'All Staff', message: 'Staff meeting tomorrow at 2 PM.' },
    { date: '2024-10-23', recipient: 'Academic Department', message: 'Please submit your exam questions...' },
    { date: '2024-10-21', recipient: 'Mr. Ahmed Yusuf', message: 'Your leave request has been approved.' },
];

const StaffMessagesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Staff Messages Log" subtitle="An audit log of all communications sent to staff." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockMessages.map((msg, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{msg.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{msg.recipient}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-md">{msg.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default StaffMessagesPage;