import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from '../../components/common/FormElements';

const mockPayments = [
    { date: '2024-09-05', desc: 'Tuition Fee - September', amount: 250 },
    { date: '2024-10-04', desc: 'Tuition Fee - October', amount: 250 },
];

const StudentPaymentRecordsPage: React.FC = () => {
    const [showHistory, setShowHistory] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowHistory(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Student Payment Records" subtitle="View the detailed payment history for a single student." />
                    <CardBody>
                        <div className="max-w-md">
                            <Input label="Search Student by ID or Name" id="student-search" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">View History</Button>
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount Paid</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockPayments.map((p, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{p.date}</td>
                                            <td className="px-6 py-4 text-sm font-medium">{p.desc}</td>
                                            <td className="px-6 py-4 text-right text-sm font-medium">${p.amount.toFixed(2)}</td>
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

export default StudentPaymentRecordsPage;