import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewBranchPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New branch "North Campus" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Branch" subtitle="Add a new campus or center to the school system." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Branch Name" id="branch-name" placeholder="e.g., North Campus" required />
                            <Input label="Branch Code" id="branch-code" placeholder="e.g., NC01" required />
                            <Textarea label="Address" id="address" placeholder="Enter the full address of the branch" required />
                            <Input label="Contact Phone" id="phone" type="tel" placeholder="e.g., 61xxxxxxx" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Branch
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewBranchPage;