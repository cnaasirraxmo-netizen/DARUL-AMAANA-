import React, { useState } from 'react';
// FIX: Imported CardFooter to be used in the component.
import { Card, CardHeader, CardBody, Select, Input, Button, CardFooter } from '../../components/common/FormElements';

const mockTransactions = [
    { date: '2024-10-01', description: 'Opening Balance', debit: 500.00, credit: 0, balance: 500.00 },
    { date: '2024-10-01', description: 'Fee Payment - S001', debit: 250.00, credit: 0, balance: 750.00 },
    { date: '2024-10-01', description: 'Office Supplies', debit: 0, credit: 50.00, balance: 700.00 },
    { date: '2024-10-02', description: 'Fee Payment - S003', debit: 250.00, credit: 0, balance: 950.00 },
];

const CashboxStatementPage: React.FC = () => {
    const [showStatement, setShowStatement] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowStatement(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Cashbox Statement" subtitle="Generate a statement for a specific cash register." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Cashbox" id="cashbox">
                                <option>CB001 - Main Office</option>
                                <option>CB002 - Cafeteria</option>
                            </Select>
                            <Input label="Start Date" id="start-date" type="date" />
                            <Input label="End Date" id="end-date" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Statement</Button>
                    </CardFooter>
                </form>
            </Card>

            {showStatement && (
                <Card className="mt-8">
                    <CardHeader title="Statement for CB001 - Main Office" subtitle="From 2024-10-01 to 2024-10-02" />
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Debit (+)</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Credit (-)</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockTransactions.map((tx, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.description}</td>
                                        <td className="px-6 py-4 text-right text-sm text-green-600">{tx.debit > 0 ? `$${tx.debit.toFixed(2)}` : '-'}</td>
                                        <td className="px-6 py-4 text-right text-sm text-red-600">{tx.credit > 0 ? `$${tx.credit.toFixed(2)}` : '-'}</td>
                                        <td className="px-6 py-4 text-right text-sm font-medium text-gray-800">${tx.balance.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                             <tfoot className="bg-gray-100">
                                <tr>
                                    <td colSpan={2} className="px-6 py-3 text-right font-bold">Totals:</td>
                                    <td className="px-6 py-3 text-right font-bold text-green-600">$1000.00</td>
                                    <td className="px-6 py-3 text-right font-bold text-red-600">$50.00</td>
                                    <td className="px-6 py-3 text-right font-bold">$950.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default CashboxStatementPage;