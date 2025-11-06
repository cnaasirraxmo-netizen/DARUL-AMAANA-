import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewDisciplineTypePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New discipline type "Uniform Violation" has been created.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Create New Discipline Type" subtitle="Define categories for student behavior incidents." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Discipline Type Name" id="discipline-name" placeholder="e.g., Uniform Violation" required />
                             <Select label="Severity Level" id="severity" required>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Select>
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

export default NewDisciplineTypePage;