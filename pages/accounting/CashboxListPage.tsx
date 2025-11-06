
import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import { Eye } from '../../components/icons/Icons';

const mockCashboxes = [
    { id: 'CB001', name: 'Main Office Cash Register', branch: 'Main Branch', status: 'Open' },
    { id: 'CB002', name: 'Cafeteria POS', branch: 'Main Branch', status: 'Closed' },
    { id: 'CB003', name: 'West Branch Admissions', branch: 'West Branch', status: 'Open' },
];

const CashboxListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Cashbox List" subtitle="List of all cash registers and points of sale." />
            <CardBody>
                 <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cashbox ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockCashboxes.map((cashbox) => (
                                <tr key={cashbox.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cashbox.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cashbox.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cashbox.branch}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            cashbox.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {cashbox.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Button variant="secondary" className="flex items-center">
                                            <Eye className="h-4 w-4 mr-2" />
                                            View Statement
                                        </Button>
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

export default CashboxListPage;
