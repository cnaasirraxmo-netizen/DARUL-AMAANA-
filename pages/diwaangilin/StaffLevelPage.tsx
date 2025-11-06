import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const StaffLevelPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New staff level "Senior Teacher" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Staff Level" subtitle="Define a new grade or tier for employees." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Level Name" id="level-name" placeholder="e.g., Senior Teacher" required />
                            <Textarea label="Description" id="description" placeholder="Optional: Describe this level." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                           <PlusCircle className="h-5 w-5 mr-2" />
                           Save Level
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default StaffLevelPage;