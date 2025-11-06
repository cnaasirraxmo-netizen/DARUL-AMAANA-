import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Textarea, Select, Button, Alert } from '../../components/common/FormElements';

const TeacherPolicyPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Teacher policy has been successfully saved.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader title="Create / Edit Teacher Policy" subtitle="Define guidelines and regulations for teaching staff." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Policy Title" id="policy-title" placeholder="e.g., Late Arrival Policy" required />
                            <Textarea 
                                label="Policy Details" 
                                id="policy-details"
                                placeholder="Describe the policy in detail here..." 
                                rows={8}
                                required 
                            />
                             <Select label="Status" id="status" required>
                                <option>Draft</option>
                                <option>Active</option>
                                <option>Archived</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Policy</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default TeacherPolicyPage;