import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert, Input, Textarea } from '../../components/common/FormElements';

const CancelBillingPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Billing ID B202410-002 has been successfully cancelled. The student\'s balance has been adjusted.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Cancel Billing" subtitle="Reverse a previously generated bill." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Search by Bill ID or Student ID" id="search-bill" placeholder="Enter Bill ID..." required />
                             <div className="p-4 border rounded-md bg-gray-50">
                                <p className="font-semibold text-gray-800">Bill Details:</p>
                                <p className="text-sm text-gray-600">Student: Fatima Omar (S002)</p>
                                <p className="text-sm text-gray-600">Amount: $250.00</p>
                                <p className="text-sm text-gray-600">Date: 2024-10-01</p>
                                <p className="text-sm text-gray-600">Status: <span className="font-bold text-red-600">Unpaid</span></p>
                            </div>
                            <Textarea label="Reason for Cancellation" id="reason" placeholder="e.g., Billed in error." required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" variant="primary" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                            Confirm Cancellation
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default CancelBillingPage;
