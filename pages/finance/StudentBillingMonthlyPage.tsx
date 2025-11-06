import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const StudentBillingMonthlyPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Monthly tuition bills for October 2024 have been successfully generated for 1,250 students.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader title="Generate Monthly Student Billing" subtitle="Create tuition fee bills for all active students." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Academic Year" id="academic-year" required>
                                <option>2024-2025</option>
                            </Select>
                            <Select label="Billing Month" id="billing-month" required>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </Select>
                            <Input label="Billing Date" id="billing-date" type="date" required />
                            <Input label="Due Date" id="due-date" type="date" required />
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="font-semibold">Summary:</p>
                            <p className="text-sm text-gray-600">This action will generate a standard tuition fee bill for every active student. The amount will be based on their assigned class fee. Discounts and scholarships will be applied automatically.</p>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate All Bills</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default StudentBillingMonthlyPage;
