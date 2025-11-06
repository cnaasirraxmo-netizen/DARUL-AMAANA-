import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewLevelPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New level "Grade 10" has been created successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Level" subtitle="Define a new academic grade or level." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Level Name" id="level-name" placeholder="e.g., Grade 10" required />
                            <Input label="Level Code" id="level-code" placeholder="e.g., G10" />
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

export default NewLevelPage;