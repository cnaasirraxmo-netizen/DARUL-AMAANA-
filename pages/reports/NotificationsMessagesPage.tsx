import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const mockMessages = [
    { date: '2024-10-25 10:00', type: 'SMS', recipient: 'Parent of S001', message: 'Fee reminder...' },
    { date: '2024-10-24 16:30', type: 'In-App', recipient: 'All Parents', message: 'Parent-teacher meeting...' },
    { date: '2024-10-22 09:15', type: 'SMS', recipient: 'Parent of S015', message: 'Absence notification...' },
];

const NotificationsMessagesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Notifications & Messages Log" subtitle="An audit log of all communications sent to parents." />
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockMessages.map((msg, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{msg.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{msg.type}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{msg.recipient}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-sm">{msg.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default NotificationsMessagesPage;