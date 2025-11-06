import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockSalaryData = [
    { id: 'E01', name: 'Mr. Ahmed Yusuf', base: 1200, adjustments: 50, net: 1250, status: 'Pending' },
    { id: 'E02', name: 'Ms. Fatima Ali', base: 1100, adjustments: -25, net: 1075, status: 'Pending' },
    { id: 'E03', name: 'Mr. Omar Hassan', base: 1000, adjustments: 0, net: 1000, status: 'Paid' },
];

const PaySalaryPage: React.FC = () => {
    const [showList, setShowList] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    const handlePay = () => {
        setSuccessMessage('Successfully processed payments for 2 staff members.');
        setShowList(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Pay Salary" subtitle="Process monthly payroll for staff." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Month" id="month"><option>October</option></Select>
                            <Select label="Select Year" id="year"><option>2024</option></Select>
                            <div className="self-end">
                                <Button type="submit" className="w-full">Load Staff Salaries</Button>
                            </div>
                        </div>
                    </CardBody>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Payroll for October 2024" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3"><input type="checkbox" /></th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Base Salary</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Adjustments</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Net Salary</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockSalaryData.map(staff => (
                                        <tr key={staff.id}>
                                            <td className="px-6 py-4"><input type="checkbox" disabled={staff.status === 'Paid'} /></td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.name}</td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-500">${staff.base.toFixed(2)}</td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-500">{staff.adjustments.toFixed(2)}</td>
                                            <td className="px-6 py-4 text-right text-sm font-bold text-gray-800">${staff.net.toFixed(2)}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${staff.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {staff.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handlePay}>Pay Selected Staff</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default PaySalaryPage;