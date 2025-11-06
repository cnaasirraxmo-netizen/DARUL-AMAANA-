import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const mockPaymentTypes = ['Cash', 'Bank Transfer', 'Mobile Money'];

const PaymentTypePage: React.FC = () => {
    const [paymentTypes, setPaymentTypes] = useState(mockPaymentTypes);
    const [newType, setNewType] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddType = () => {
        if (newType && !paymentTypes.includes(newType)) {
            setPaymentTypes([...paymentTypes, newType]);
            setSuccessMessage(`Payment type "${newType}" added successfully.`);
            setNewType('');
        }
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card className="mt-4 max-w-lg mx-auto">
                <CardHeader title="Manage Payment Types" subtitle="Add or view accepted payment methods." />
                <CardBody>
                    <h3 className="text-md font-semibold text-gray-700">Existing Types</h3>
                    <ul className="list-disc list-inside mt-2 mb-6 p-4 bg-gray-50 rounded-md">
                        {paymentTypes.map(type => <li key={type}>{type}</li>)}
                    </ul>
                    
                    <h3 className="text-md font-semibold text-gray-700">Add New Type</h3>
                    <div className="mt-2 flex gap-2">
                        <Input 
                            label="" 
                            id="new-type" 
                            value={newType} 
                            onChange={(e) => setNewType(e.target.value)}
                            placeholder="e.g., Credit Card"
                        />
                         <Button onClick={handleAddType} className="flex items-center whitespace-nowrap">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Add
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default PaymentTypePage;
