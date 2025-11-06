import React from 'react';
import { Card, CardHeader, CardBody, Select, Button } from '../../components/common/FormElements';

const mockDiscounts = [
    { student: 'Ayaan Hirsi (S101)', class: 'Grade 12A', type: 'Merit Scholarship', value: '10%' },
    { student: 'Osman Said (S032)', class: 'Grade 5C', type: 'Orphan Support', value: '100%' },
    { student: 'Fatima Ali (E02\'s Child)', class: 'Grade 3B', type: 'Staff Child Discount', value: '50%' },
];

const DiscountsFreeFeesListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Discounts & Free Fees List" subtitle="A report of all students with active scholarships or discounts." />
            <CardBody>
                <div className="flex items-center justify-end mb-4">
                    <Select label="" id="filter-type">
                        <option>All Discount Types</option>
                        <option>Merit Scholarship</option>
                        <option>Orphan Support</option>
                    </Select>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockDiscounts.map(d => (
                                <tr key={d.student}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{d.student}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{d.class}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{d.type}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-green-600">{d.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default DiscountsFreeFeesListPage;