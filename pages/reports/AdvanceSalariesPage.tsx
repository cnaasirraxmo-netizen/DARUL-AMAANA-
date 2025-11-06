import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const mockAdvances = [
    { id: 'ADV001', date: '2024-10-15', staff: 'Mr. Ahmed Yusuf (E01)', amount: 200.00, status: 'Deducted' },
    { id: 'ADV002', date: '2024-10-20', staff: 'Ms. Fatima Ali (E02)', amount: 150.00, status: 'Pending Deduction' },
];

const AdvanceSalariesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Advance Salaries Report" subtitle="An audit log of all salary advances." />
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                    </div>
                    <Button>Filter Report</Button>
                </div>
                
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Txn ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff Member</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockAdvances.map(item => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.staff}</td>
                                    <td className="px-6 py-4 text-right text-sm font-semibold">${item.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Deducted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default AdvanceSalariesPage;