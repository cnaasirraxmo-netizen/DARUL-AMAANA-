
import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const accounts = [
    { code: '1000', name: 'Assets', type: 'Header', indent: 0 },
    { code: '1100', name: 'Current Assets', type: 'Header', indent: 1 },
    { code: '1110', name: 'Petty Cash', type: 'Detail', indent: 2 },
    { code: '1120', name: 'Bank Account', type: 'Detail', indent: 2 },
    { code: '1200', name: 'Fixed Assets', type: 'Header', indent: 1 },
    { code: '1210', name: 'Furniture', type: 'Detail', indent: 2 },
    { code: '4000', name: 'Income', type: 'Header', indent: 0 },
    { code: '4100', name: 'Tuition Fees', type: 'Detail', indent: 1 },
    { code: '5000', name: 'Expenses', type: 'Header', indent: 0 },
    { code: '5100', name: 'Salaries', type: 'Detail', indent: 1 },
];

const ChartOfAccountsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Chart of Accounts" />
            <CardBody>
                <div className="flex justify-end mb-4">
                    <Button className="flex items-center">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        New Account
                    </Button>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {accounts.map(acc => (
                                <tr key={acc.code} className={acc.type === 'Header' ? 'bg-gray-50' : ''}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{acc.code}</td>
                                    <td className={`px-6 py-4 text-sm ${acc.type === 'Header' ? 'font-bold text-gray-800' : 'text-gray-700'}`} style={{ paddingLeft: `${1.5 + acc.indent * 1.5}rem`}}>
                                        {acc.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{acc.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default ChartOfAccountsPage;
