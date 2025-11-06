
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button, Alert } from '../../components/common/FormElements';

const TransferOnlyPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [student, setStudent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Quick Transfer successful. Student class profile updated.');
        setStudent('');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader 
                        title="Transfer Only" 
                        subtitle="Used for light administrative changes. Does not move fees, results, or attendance."
                    />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Input 
                                label="Select Student (by ID or Name)" 
                                id="student-search" 
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                                placeholder="Search for a student..."
                                required
                            />
                            <Input 
                                label="Old Class" 
                                id="old-class" 
                                value={student ? "Grade 7A" : ""}
                                readOnly 
                                disabled
                                placeholder="Auto-filled when student is selected"
                                className="bg-gray-100"
                            />
                            <Select label="New Class / Section" id="new-class" required>
                                <option>Grade 7B</option>
                                <option>Grade 7C</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit">Save</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default TransferOnlyPage;
