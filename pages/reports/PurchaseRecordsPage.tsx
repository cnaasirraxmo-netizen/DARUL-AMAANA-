import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Select } from '../../components/common/FormElements';

const mockPurchases = [
    { date: '2024-10-18', item: 'Office Stationery', category: 'Supplies', amount: 150.00 },
    { date: '2024-10-20', item: 'Electricity Bill', category: 'Utilities', amount: 850.00 },
    { date: '2024-10-22', item: 'New Textbooks', category: 'Academics', amount: 2500.00 },
];

const PurchaseRecordsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Purchase Records" subtitle="A log of all school expenses and purchases." />
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                        <Select label="" id="category"><option>All Categories</option></Select>
                    </div>
                    <Button>Filter</Button>
                </div>
                
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item/Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockPurchases.map((p, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{p.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.item}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{p.category}</td>
                                    <td className="px-6 py-4 text-right text-sm font-semibold">${p.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default PurchaseRecordsPage;