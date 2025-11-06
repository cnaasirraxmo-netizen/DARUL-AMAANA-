import React from 'react';
import { Card, CardHeader, CardBody, Select, Button } from '../../components/common/FormElements';

const mockAssets = [
    { id: 'ASSET-001', name: 'Dell Laptop', category: 'Electronics', value: 1200 },
    { id: 'ASSET-002', name: 'Classroom Projector', category: 'Electronics', value: 800 },
    { id: 'ASSET-003', name: 'Student Desk', category: 'Furniture', value: 150 },
    { id: 'ASSET-004', name: 'Office Chair', category: 'Furniture', value: 250 },
];

const FixedAssetsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Fixed Assets Report" subtitle="A summary of the school's fixed assets." />
            <CardBody>
                <div className="flex items-center justify-end mb-4">
                    <Select label="" id="filter-category">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                    </Select>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockAssets.map(asset => (
                                <tr key={asset.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{asset.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{asset.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{asset.category}</td>
                                    <td className="px-6 py-4 text-right text-sm font-semibold">${asset.value.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                         <tfoot className="bg-gray-100">
                            <tr>
                                <td colSpan={3} className="px-6 py-3 text-right font-bold">Total Asset Value:</td>
                                <td className="px-6 py-3 text-right font-bold">$2,400.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default FixedAssetsPage;