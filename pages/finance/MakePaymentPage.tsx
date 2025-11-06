import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';

const MakePaymentPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [studentId, setStudentId] = useState('');
    const [studentInfo, setStudentInfo] = useState<{ name: string, balance: number } | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (studentId) {
            setStudentInfo({ name: 'Fatima Omar', balance: 250.00 });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Payment of $250.00 recorded for Fatima Omar. New balance is $0.00.`);
        setStudentId('');
        setStudentInfo(null);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            
            <Card className="mt-4">
                <form onSubmit={handleSearch}>
                    <CardHeader title="Make a Payment" subtitle="Search for a student to record a fee payment." />
                    <CardBody>
                        <div className="flex items-end gap-4">
                            <div className="flex-grow">
                                <Input 
                                    label="Student ID or Name" 
                                    id="student-search" 
                                    value={studentId}
                                    onChange={e => setStudentId(e.target.value)}
                                    placeholder="Search..." 
                                    required
                                />
                            </div>
                            <Button type="submit">Search Student</Button>
                        </div>
                    </CardBody>
                </form>

                {studentInfo && (
                    <form onSubmit={handleSubmit}>
                        <CardBody className="border-t">
                            <h3 className="text-lg font-semibold text-gray-800">Payment for {studentInfo.name}</h3>
                            <p className="mb-4">Current Balance: <span className="font-bold text-red-600">${studentInfo.balance.toFixed(2)}</span></p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Input label="Payment Amount" id="amount" type="number" placeholder="0.00" required />
                                <Select label="Payment Method" id="payment-method" required>
                                    <option>Cash</option>
                                    <option>Bank Transfer</option>
                                    <option>Mobile Money</option>
                                </Select>
                                <Input label="Payment Date" id="payment-date" type="date" required />
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Submit Payment</Button>
                        </CardFooter>
                    </form>
                )}
            </Card>
        </div>
    );
};

export default MakePaymentPage;
