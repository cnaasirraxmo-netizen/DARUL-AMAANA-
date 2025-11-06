import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert, Textarea } from '../../components/common/FormElements';

const MonthlySalaryAdjustmentPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage("Salary adjustment for Mr. Ahmed Yusuf saved for October 2024.");
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Monthly Salary Adjustment" subtitle="Add a bonus or deduction for a specific month." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Select Staff Member" id="staff-search" placeholder="Search by name or ID..." required />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Adjustment Type" id="adj-type" required>
                                    <option>Bonus</option>
                                    <option>Deduction</option>
                                </Select>
                                <Input label="Amount" id="amount" type="number" placeholder="0.00" required />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Month" id="month" required>
                                    <option>October</option>
                                    <option>November</option>
                                </Select>
                                <Select label="Year" id="year" required>
                                    <option>2024</option>
                                </Select>
                             </div>
                            <Textarea label="Reason" id="reason" placeholder="e.g., Performance bonus for Q3" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Adjustment</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default MonthlySalaryAdjustmentPage;