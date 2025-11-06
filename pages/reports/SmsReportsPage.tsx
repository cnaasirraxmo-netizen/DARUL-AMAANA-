import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const mockSms = [
    { date: '2024-10-25 10:00', recipient: '615551234', status: 'Delivered', cost: 0.05 },
    { date: '2024-10-25 10:01', recipient: '615555678', status: 'Delivered', cost: 0.05 },
    { date: '2024-10-25 10:02', recipient: '615559999', status: 'Failed', cost: 0.00 },
];

const SmsReportsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="SMS Reports" subtitle="Track SMS usage, delivery status, and costs." />
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockSms.map((sms, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{sms.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{sms.recipient}</td>
                                    <td className="px-6 py-4 text-sm">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${sms.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{sms.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm text-gray-500">${sms.cost.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                         <tfoot className="bg-gray-100">
                            <tr>
                                <td colSpan={3} className="px-6 py-3 text-right font-bold">Total Cost:</td>
                                <td className="px-6 py-3 text-right font-bold">$0.10</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default SmsReportsPage;