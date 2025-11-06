import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const trialBalanceData = [
    { account: '1110 - Petty Cash', debit: 5000, credit: 0 },
    { account: '1120 - Bank Account', debit: 150000, credit: 0 },
    { account: '4100 - Tuition Fees', debit: 0, credit: 520000 },
    { account: '5100 - Salaries', debit: 350000, credit: 0 },
    { account: '5200 - Rent', debit: 15000, credit: 0 },
];

const FinanceTrialBalancePage: React.FC = () => {
    const totalDebits = trialBalanceData.reduce((sum, item) => sum + item.debit, 0);
    const totalCredits = trialBalanceData.reduce((sum, item) => sum + item.credit, 0);

    return (
        <Card>
            <CardHeader title="Trial Balance" subtitle="A summary of all ledger balances to verify debit and credit equality." />
            <CardBody>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700">As of: December 31, 2024</h3>
                    <div className="flex items-center gap-2">
                        <Input type="date" id="report-date" label="" />
                        <Button>Generate</Button>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Debit</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Credit</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {trialBalanceData.map((item, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.account}</td>
                                    <td className="px-6 py-4 text-right text-sm text-gray-700">{item.debit > 0 ? `$${item.debit.toLocaleString()}` : '-'}</td>
                                    <td className="px-6 py-4 text-right text-sm text-gray-700">{item.credit > 0 ? `$${item.credit.toLocaleString()}` : '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-100">
                            <tr className="border-t-2 font-bold text-gray-800">
                                <td className="px-6 py-4 text-left text-sm uppercase">Totals</td>
                                <td className={`px-6 py-4 text-right text-sm ${totalDebits === totalCredits ? 'text-green-600' : 'text-red-600'}`}>${totalDebits.toLocaleString()}</td>
                                <td className={`px-6 py-4 text-right text-sm ${totalDebits === totalCredits ? 'text-green-600' : 'text-red-600'}`}>${totalCredits.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                 {totalDebits !== totalCredits && <p className="text-center text-red-600 font-semibold mt-4">Warning: Debits and Credits do not match!</p>}
            </CardBody>
        </Card>
    );
};

export default FinanceTrialBalancePage;
