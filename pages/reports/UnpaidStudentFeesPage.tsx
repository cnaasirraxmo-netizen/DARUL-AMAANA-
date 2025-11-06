import React from 'react';
import { Card, CardHeader, CardBody, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockUnpaid = [
    { id: 'S002', name: 'Fatima Omar', class: 'Grade 9A', balance: 250.00 },
    { id: 'S015', name: 'Asha Nur', class: 'Grade 8B', balance: 500.00 },
    { id: 'S033', name: 'Liban Farah', class: 'Grade 9A', balance: 250.00 },
];

const UnpaidStudentFeesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Unpaid Student Fees Report" subtitle="A list of all students with outstanding balances." />
            <CardBody>
                <div className="flex justify-between items-center mb-4">
                    <Select label="" id="filter-class">
                        <option>All Classes</option>
                        <option>Grade 9A</option>
                    </Select>
                     <Button variant="secondary" className="flex items-center">
                        <Printer className="h-4 w-4 mr-2" /> Print Report
                    </Button>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Outstanding Balance</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockUnpaid.map(s => (
                                <tr key={s.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{s.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                    <td className="px-6 py-4 text-right text-sm font-bold text-red-600">${s.balance.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-100">
                            <tr>
                                <td colSpan={3} className="px-6 py-3 text-right font-bold">Total Outstanding:</td>
                                <td className="px-6 py-3 text-right font-bold text-red-700">$1,000.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default UnpaidStudentFeesPage;