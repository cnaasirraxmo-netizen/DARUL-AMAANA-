import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewStudentDepartureTypePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New departure type "Relocation" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create Student Departure Type" subtitle="Define reasons for students leaving the school." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Departure Type Name" id="departure-name" placeholder="e.g., Relocation" required />
                            <Textarea label="Description" id="description" placeholder="Optional: Describe this departure type." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Type
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewStudentDepartureTypePage;