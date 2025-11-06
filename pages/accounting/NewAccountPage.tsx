
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewAccountPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Account created successfully!');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Account" subtitle="Add a new account to the Chart of Accounts." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Account Code" id="account-code" placeholder="e.g., 1130" required />
                            <Input label="Account Name" id="account-name" placeholder="e.g., Bank Deposits" required />
                            <Select label="Account Type" id="account-type" required>
                                <option>Asset</option>
                                <option>Liability</option>
                                <option>Equity</option>
                                <option>Income</option>
                                <option>Expense</option>
                            </Select>
                             <Select label="Parent Account (Optional)" id="parent-account">
                                <option>None</option>
                                <option>1100 - Current Assets</option>
                                <option>5000 - Expenses</option>
                            </Select>
                            <Input label="Opening Balance" id="opening-balance" type="number" placeholder="0.00" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Account
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewAccountPage;
