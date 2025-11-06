import React from 'react';
import { Card, CardHeader, CardBody, Select, Button } from '../../components/common/FormElements';

const mockAssets = [
    { id: 'ASSET-001', name: 'Dell Laptop', category: 'Electronics', value: 1200, date: '2023-08-10' },
    { id: 'ASSET-002', name: 'Classroom Projector', category: 'Electronics', value: 800, date: '2023-09-01' },
    { id: 'ASSET-003', name: 'Student Desk', category: 'Furniture', value: 150, date: '2023-07-20' },
];

const AssetRecordsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Asset Records" subtitle="Detailed view of the fixed asset register." />
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purchase Date</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockAssets.map(asset => (
                                <tr key={asset.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{asset.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{asset.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{asset.category}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{asset.date}</td>
                                    <td className="px-6 py-4 text-right text-sm font-semibold">${asset.value.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default AssetRecordsPage;