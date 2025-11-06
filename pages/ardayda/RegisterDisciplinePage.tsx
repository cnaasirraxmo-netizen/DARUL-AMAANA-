
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Textarea, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const RegisterDisciplinePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Waa lagu guulaystay! Disciplinary record saved successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Register Student Discipline" subtitle="Maintain behavior tracking for every student." />
                    <CardBody>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Select Branch" id="branch" required>
                                    <option>Main Branch</option>
                                    <option>West Branch</option>
                                </Select>
                                <Input label="Select Student (by ID or Name)" id="student-search" placeholder="Search for Ahmed Ali..." required />
                            </div>
                            <Select label="Type of Offense" id="offense-type" required>
                                <option>Lateness</option>
                                <option>Disrespect</option>
                                <option>Absence</option>
                                <option>Other (custom)</option>
                            </Select>
                            <Textarea label="Description / Notes" id="description" placeholder="Describe the incident..." required />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Date of Incident" id="incident-date" type="date" required />
                                <Input label="Action Taken" id="action-taken" placeholder="e.g., Warning, Parent Called" required />
                            </div>
                            <Input label="Recorded By" id="recorded-by" value="Admin" readOnly disabled className="bg-gray-100" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Record
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default RegisterDisciplinePage;
