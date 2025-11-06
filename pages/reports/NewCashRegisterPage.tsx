import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input } from '../../components/common/FormElements';

const NewCashRegisterPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Cash register opened successfully with an opening float of $500.00.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-lg mx-auto">
                    <CardHeader title="Open New Cash Register" subtitle="Start a new session for a cashbox." />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Select Cashbox" id="cashbox" required>
                                <option>Main Office Cash Register</option>
                                <option>Cafeteria POS</option>
                            </Select>
                            <Input label="Opening Float" id="float" type="number" placeholder="0.00" required />
                            <Input label="Date" id="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} readOnly />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Open Register</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewCashRegisterPage;