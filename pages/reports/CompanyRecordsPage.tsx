import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockCompanies = [
    { name: 'Educational Supplies Inc.', contact: 'Ali Omar', phone: '615551234' },
    { name: 'Mogadishu Printing Press', contact: 'Fatima Said', phone: '615555678' },
    { name: 'Campus Security Services', contact: 'Yusuf Abdi', phone: '615554321' },
];

const CompanyRecordsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Company Records" subtitle="A directory of all registered vendors and partners." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Person</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockCompanies.map(company => (
                                <tr key={company.name}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{company.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{company.contact}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{company.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default CompanyRecordsPage;