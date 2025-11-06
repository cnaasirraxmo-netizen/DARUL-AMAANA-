
import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';

const IncomeStatementPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Income Statement" subtitle="Shows financial performance over a period of time." />
            <CardBody>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700">For the period ending: December 31, 2024</h3>
                    <div className="flex items-center gap-2">
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                        <Button>Generate</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-2xl mx-auto">
                        <tbody>
                            <tr className="font-semibold text-lg">
                                <td className="py-2">Revenue</td>
                                <td className="py-2 text-right"></td>
                            </tr>
                            <tr>
                                <td className="py-1 pl-4">Tuition Fees</td>
                                <td className="py-1 text-right">$500,000</td>
                            </tr>
                            <tr>
                                <td className="py-1 pl-4">Other Income</td>
                                <td className="py-1 text-right">$20,000</td>
                            </tr>
                            <tr className="border-t font-bold">
                                <td className="py-2">Total Revenue</td>
                                <td className="py-2 text-right">$520,000</td>
                            </tr>
                            
                            <tr className="font-semibold text-lg pt-4">
                                <td className="py-2 pt-6">Expenses</td>
                                <td className="py-2 text-right"></td>
                            </tr>
                            <tr>
                                <td className="py-1 pl-4">Salaries and Wages</td>
                                <td className="py-1 text-right">$350,000</td>
                            </tr>
                            <tr>
                                <td className="py-1 pl-4">Utilities</td>
                                <td className="py-1 text-right">$25,000</td>
                            </tr>
                             <tr>
                                <td className="py-1 pl-4">Rent</td>
                                <td className="py-1 text-right">$60,000</td>
                            </tr>
                            <tr className="border-t font-bold">
                                <td className="py-2">Total Expenses</td>
                                <td className="py-2 text-right">$435,000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-sky-100 border-t-2 border-sky-300">
                                <td className="py-3 font-extrabold text-lg text-sky-800">Net Income</td>
                                <td className="py-3 text-right font-extrabold text-lg text-sky-800">$85,000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default IncomeStatementPage;
