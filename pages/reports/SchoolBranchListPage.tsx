import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockBranches = [
    { name: 'Main Branch', code: 'MAIN', address: 'KM4, Mogadishu' },
    { name: 'West Branch', code: 'WEST', address: 'Hodan, Mogadishu' },
    { name: 'North Campus', code: 'NORTH', address: 'Kaaraan, Mogadishu' },
];

const SchoolBranchListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="School Branch List" subtitle="A reference list of all school campuses." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Branch Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockBranches.map(branch => (
                                <tr key={branch.code}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{branch.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{branch.code}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{branch.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default SchoolBranchListPage;