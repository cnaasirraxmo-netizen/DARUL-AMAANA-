
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Textarea, Button, Alert } from '../../components/common/FormElements';

const StudentTransferPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [student, setStudent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Student Ahmed Ali successfully transferred from Grade 7A to Grade 8B (effective: 11/10/2025). Transfer logged.`);
        setStudent('');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader 
                        title="Student Transfer" 
                        subtitle="Move a student from one class to another while preserving all academic and financial records."
                    />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                             <Input 
                                label="Select Student (Searchable by Name or ID)" 
                                id="student-search" 
                                placeholder="Search for a student..."
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                                required
                            />
                            <Input 
                                label="Current Class" 
                                id="current-class" 
                                value={student ? "Grade 7A" : ""}
                                readOnly 
                                disabled
                                placeholder="Auto-filled when student is selected"
                                className="bg-gray-100"
                            />
                            <Select label="New Class / Section" id="new-class" required>
                                <option>Grade 8A</option>
                                <option>Grade 8B</option>
                                <option>Grade 8C</option>
                            </Select>
                             <Input 
                                label="Effective Date" 
                                id="effective-date"
                                type="date"
                                required
                            />
                            <Textarea 
                                label="Reason for Transfer (Optional)" 
                                id="reason"
                                placeholder="Enter reason here..."
                            />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit">Submit Transfer</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default StudentTransferPage;
