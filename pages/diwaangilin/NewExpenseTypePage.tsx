import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewExpenseTypePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New expense type "Maintenance" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Expense Type" subtitle="Add a new category for tracking school expenses." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Expense Type Name" id="expense-name" placeholder="e.g., Maintenance" required />
                             <Select label="Parent Account" id="parent-account" required>
                                <option>5000 - Expenses</option>
                                <option>5100 - Administrative Costs</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Type
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewExpenseTypePage;