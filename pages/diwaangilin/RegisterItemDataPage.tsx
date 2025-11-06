import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const RegisterItemDataPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Item "Classroom Projector" registered successfully. Asset Tag: ASSET-00123');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Register Item Data" subtitle="Log new assets or inventory into the system." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Item Name" id="item-name" placeholder="e.g., Classroom Projector" required />
                            <Select label="Item Category" id="item-category" required>
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Books</option>
                                <option>Other</option>
                            </Select>
                            <Input label="Serial Number (if applicable)" id="serial-number" />
                            <Input label="Purchase Date" id="purchase-date" type="date" />
                            <Input label="Value" id="value" type="number" placeholder="0.00" />
                            <Textarea label="Notes" id="notes" placeholder="e.g., Assigned to Room 201." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Item
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default RegisterItemDataPage;