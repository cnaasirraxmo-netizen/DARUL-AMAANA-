
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Textarea, Button, Alert } from '../../components/common/FormElements';

const AccountToAccountTransferPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Transfer completed successfully. Transaction ID: T-54321');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader 
                        title="Account to Account Transfer" 
                        subtitle="Move funds between two internal accounts."
                    />
                    <CardBody>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="From Account (Debit)" id="from-account" required>
                                    <option>1010 - Petty Cash</option>
                                    <option>1020 - Bank Account A</option>
                                    <option>1030 - Bank Account B</option>
                                </Select>
                                <Select label="To Account (Credit)" id="to-account" required>
                                    <option>4010 - School Fees Income</option>
                                    <option>5010 - Salaries Expense</option>
                                    <option>5020 - Utilities Expense</option>
                                </Select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Amount" id="amount" type="number" placeholder="0.00" required />
                                <Input label="Transaction Date" id="date" type="date" required />
                            </div>
                            <Textarea 
                                label="Description / Reason" 
                                id="description"
                                placeholder="e.g., Transfer for monthly utility payments"
                                required
                            />
                            <Input label="Reference #" id="reference" placeholder="Optional reference number" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Reset</Button>
                        <Button type="submit">Execute Transfer</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default AccountToAccountTransferPage;
