
import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const mockTransfers = [
    { id: 'T54321', date: '2024-10-05', from: '1010 - Petty Cash', to: '5020 - Utilities', amount: 150.00, user: 'Admin' },
    { id: 'T54322', date: '2024-10-06', from: '1020 - Bank A', to: '5010 - Salaries', amount: 25000.00, user: 'Admin' },
    { id: 'T54323', date: '2024-10-07', from: '1010 - Petty Cash', to: '1020 - Bank A', amount: 500.00, user: 'Finance' },
];

const TransferredAccountsReportPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Transferred Accounts Report" subtitle="Audit trail for all internal fund transfers." />
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                    </div>
                    <Button>Generate Report</Button>
                </div>
                
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Txn ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From Account</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">To Account</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockTransfers.map(t => (
                                <tr key={t.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{t.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{t.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{t.from}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{t.to}</td>
                                    <td className="px-6 py-4 text-right text-sm font-medium text-gray-800">${t.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{t.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default TransferredAccountsReportPage;
