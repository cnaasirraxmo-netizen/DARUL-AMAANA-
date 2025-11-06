import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';

const CollectCashPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [studentId, setStudentId] = useState('');
    const [balance, setBalance] = useState<number | null>(null);

    const handleSearch = () => {
        if (studentId) setBalance(250.00);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Cash payment of $250.00 collected successfully for student S002. Receipt printed.');
        setStudentId('');
        setBalance(null);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Collect Cash" subtitle="Quick form for on-the-spot cash payments." />
                    <CardBody>
                        <div className="space-y-4">
                            <div className="flex items-end gap-2">
                                <div className="flex-grow">
                                    <Input 
                                        label="Student ID" 
                                        id="student-id" 
                                        value={studentId}
                                        onChange={e => setStudentId(e.target.value)}
                                        required 
                                    />
                                </div>
                                <Button type="button" onClick={handleSearch} variant="secondary">Check Balance</Button>
                            </div>

                            {balance !== null && (
                                <div className="p-4 bg-sky-50 rounded-md">
                                    <p className="font-semibold">Student: Fatima Omar</p>
                                    <p className="text-lg font-bold">Outstanding Balance: ${balance.toFixed(2)}</p>
                                </div>
                            )}

                            <Input label="Amount to Pay" id="amount" type="number" placeholder="0.00" required />
                             <Select label="Cashbox" id="cashbox" required>
                                <option>Main Office Cash Register</option>
                                <option>Finance Office Cashbox</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Collect & Print Receipt</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default CollectCashPage;
