import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const FinanceNewAccountPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New fee account "Bus Fee" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Fee Account" subtitle="Define a new type of fee or charge for students." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Fee Name" id="fee-name" placeholder="e.g., Bus Fee" required />
                            <Input label="Default Amount" id="default-amount" type="number" placeholder="0.00" />
                            <Select label="Linked Ledger Account (Income)" id="ledger-account" required>
                                <option>4100 - Tuition Fees</option>
                                <option>4200 - Transportation Fees</option>
                                <option>4300 - Other Fees</option>
                            </Select>
                            <div className="flex items-center">
                                <input id="is-recurring" name="is-recurring" type="checkbox" className="h-4 w-4 text-sky-600 border-gray-300 rounded" />
                                <label htmlFor="is-recurring" className="ml-2 block text-sm text-gray-900">This is a recurring monthly fee</label>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Fee Account
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default FinanceNewAccountPage;
