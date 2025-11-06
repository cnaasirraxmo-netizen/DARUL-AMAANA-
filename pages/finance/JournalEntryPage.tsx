import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

interface JournalLine {
    account: string;
    debit: string;
    credit: string;
}

const JournalEntryPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [lines, setLines] = useState<JournalLine[]>([
        { account: '', debit: '', credit: '' },
        { account: '', debit: '', credit: '' },
    ]);

    const handleAddLine = () => {
        setLines([...lines, { account: '', debit: '', credit: '' }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add validation for balanced debits/credits here
        setSuccessMessage('Journal Entry posted successfully. JE ID: 2024-0012');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Journal Entry" subtitle="Manually record financial transactions." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <Input label="Date" id="entry-date" type="date" required />
                            <Textarea label="Description / Memo" id="description" placeholder="e.g., To record purchase of office supplies" required />
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
                                    {lines.map((line, index) => (
                                        <tr key={index}>
                                            <td className="px-2 py-2">
                                                <Select label="" id={`acc-${index}`}>
                                                    <option>Select account...</option>
                                                    <option>1010 - Petty Cash</option>
                                                    <option>5030 - Office Supplies</option>
                                                </Select>
                                            </td>
                                            <td className="px-2 py-2">
                                                <Input type="number" label="" id={`debit-${index}`} placeholder="0.00" className="text-right" />
                                            </td>
                                            <td className="px-2 py-2">
                                                <Input type="number" label="" id={`credit-${index}`} placeholder="0.00" className="text-right" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Button type="button" variant="secondary" onClick={handleAddLine} className="mt-4 flex items-center">
                            <PlusCircle className="h-4 w-4 mr-2" /> Add Line
                        </Button>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Post Entry</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default JournalEntryPage;
