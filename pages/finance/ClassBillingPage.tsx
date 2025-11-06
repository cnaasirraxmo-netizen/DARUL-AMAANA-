import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const ClassBillingPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Successfully billed "Final Exam Fee" to all 35 students in Grade 9A.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Class Billing" subtitle="Apply a fee to an entire class at once." />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                            </Select>
                            <Select label="Select Class" id="class" required>
                                <option>Grade 9A</option>
                                <option>Grade 9B</option>
                            </Select>
                            <Input label="Fee Description" id="fee-description" placeholder="e.g., Final Exam Fee" required />
                            <Input label="Amount" id="amount" type="number" placeholder="0.00" required />
                            <Input label="Billing Date" id="billing-date" type="date" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Apply Bill to Class</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ClassBillingPage;
