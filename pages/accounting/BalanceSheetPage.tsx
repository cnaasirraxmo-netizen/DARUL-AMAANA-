
import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const BalanceSheetPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Balance Sheet" subtitle="A snapshot of the school's financial condition." />
            <CardBody>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700">As of: December 31, 2024</h3>
                    <div className="flex items-center gap-2">
                        <Input type="date" id="report-date" label="" />
                        <Button>Generate</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Assets */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Assets</h4>
                        <table className="w-full">
                            <tbody>
                                <tr className="font-medium">
                                    <td className="py-2">Current Assets</td>
                                    <td className="py-2 text-right"></td>
                                </tr>
                                <tr>
                                    <td className="py-1 pl-4">Cash and Cash Equivalents</td>
                                    <td className="py-1 text-right">$150,000</td>
                                </tr>
                                <tr>
                                    <td className="py-1 pl-4">Accounts Receivable</td>
                                    <td className="py-1 text-right">$25,000</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 font-bold">Total Current Assets</td>
                                    <td className="py-2 text-right font-bold">$175,000</td>
                                </tr>
                                <tr className="font-medium">
                                    <td className="py-2 pt-4">Non-Current Assets</td>
                                    <td className="py-2 text-right"></td>
                                </tr>
                                <tr>
                                    <td className="py-1 pl-4">Buildings and Equipment</td>
                                    <td className="py-1 text-right">$500,000</td>
                                </tr>
                                 <tr className="border-t">
                                    <td className="py-2 font-bold">Total Non-Current Assets</td>
                                    <td className="py-2 text-right font-bold">$500,000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-100 border-t-2">
                                    <td className="py-3 font-extrabold text-lg">Total Assets</td>
                                    <td className="py-3 text-right font-extrabold text-lg">$675,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    
                    {/* Liabilities and Equity */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Liabilities and Equity</h4>
                        <table className="w-full">
                             <tbody>
                                <tr className="font-medium">
                                    <td className="py-2">Liabilities</td>
                                    <td className="py-2 text-right"></td>
                                </tr>
                                <tr>
                                    <td className="py-1 pl-4">Accounts Payable</td>
                                    <td className="py-1 text-right">$30,000</td>
                                </tr>
                                 <tr className="border-t">
                                    <td className="py-2 font-bold">Total Liabilities</td>
                                    <td className="py-2 text-right font-bold">$30,000</td>
                                </tr>
                                <tr className="font-medium">
                                    <td className="py-2 pt-4">Equity</td>
                                    <td className="py-2 text-right"></td>
                                </tr>
                                <tr>
                                    <td className="py-1 pl-4">Retained Earnings</td>
                                    <td className="py-1 text-right">$645,000</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 font-bold">Total Equity</td>
                                    <td className="py-2 text-right font-bold">$645,000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-100 border-t-2">
                                    <td className="py-3 font-extrabold text-lg">Total Liabilities and Equity</td>
                                    <td className="py-3 text-right font-extrabold text-lg">$675,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default BalanceSheetPage;
