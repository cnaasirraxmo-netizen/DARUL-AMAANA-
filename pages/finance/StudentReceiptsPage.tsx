import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockPayments = [
    { id: 'P001', date: '2024-09-05', amount: 250, method: 'Cash' },
    { id: 'P002', date: '2024-10-04', amount: 250, method: 'Bank Transfer' },
];

const StudentReceiptsPage: React.FC = () => {
    const [showHistory, setShowHistory] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowHistory(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Student Receipts" subtitle="Find and print payment receipts for a student." />
                    <CardBody>
                        <div className="max-w-md">
                            <Input label="Search Student by ID or Name" id="student-search" placeholder="Enter student's ID..." required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">View Payment History</Button>
                    </CardFooter>
                </form>
            </Card>

            {showHistory && (
                <Card className="mt-8">
                    <CardHeader title="Payment History for: Ahmed Ali" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockPayments.map(p => (
                                        <tr key={p.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{p.id}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{p.date}</td>
                                            <td className="px-6 py-4 text-right text-sm font-medium">${p.amount.toFixed(2)}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{p.method}</td>
                                            <td className="px-6 py-4 text-right">
                                                <Button variant="secondary" className="flex items-center">
                                                    <Printer className="h-4 w-4 mr-2" /> Print
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default StudentReceiptsPage;
