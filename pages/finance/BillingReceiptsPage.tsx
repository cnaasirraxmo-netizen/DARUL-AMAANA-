import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockBillingData = [
    { id: 'B202410-001', date: '2024-10-01', student: 'Ahmed Ali', class: 'Grade 9A', amount: 250, status: 'Paid' },
    { id: 'B202410-002', date: '2024-10-01', student: 'Fatima Omar', class: 'Grade 9A', amount: 250, status: 'Unpaid' },
    { id: 'B202410-003', date: '2024-10-01', student: 'Yusuf Hassan', class: 'Grade 9A', amount: 275, status: 'Paid' },
];

const BillingReceiptsPage: React.FC = () => {
    const [showReport, setShowReport] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowReport(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Billing Receipts" subtitle="Generate a report of all billing records." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Branch" id="branch"><option>All Branches</option></Select>
                            <Select label="Class" id="class"><option>All Classes</option></Select>
                            <Input label="Start Date" id="start-date" type="date" required />
                            <Input label="End Date" id="end-date" type="date" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showReport && (
                <Card className="mt-8">
                    <CardHeader title="Billing Report from 2024-10-01 to 2024-10-31" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print Report
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockBillingData.map(bill => (
                                        <tr key={bill.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{bill.id}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{bill.date}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{bill.student}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{bill.class}</td>
                                            <td className="px-6 py-4 text-right text-sm font-medium">${bill.amount.toFixed(2)}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {bill.status}
                                                </span>
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

export default BillingReceiptsPage;
