import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewParentPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Parent "Amina Hassan" has been registered successfully. Parent ID: P0123');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Register New Parent/Guardian" subtitle="Create a profile for a new parent or guardian." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <Input label="Full Name" id="parent-name" placeholder="e.g., Amina Hassan" required />
                           <Input label="Phone Number" id="parent-phone" placeholder="e.g., 61xxxxxxx" required />
                           <Input label="Alternative Phone" id="alt-phone" />
                           <Input label="Occupation" id="occupation" />
                           <Input label="Address" id="address" />
                           <Input label="Email" id="email" type="email" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Parent
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewParentPage;