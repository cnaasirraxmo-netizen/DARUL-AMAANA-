
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Textarea, Button, Alert } from '../../components/common/FormElements';
import { Slash } from '../../components/icons/Icons';

const SuspendStudentPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [student, setStudent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Student successfully suspended. Their status is now "Suspended" and access is blocked. Action has been logged.');
        setStudent('');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Suspend Student" subtitle="Temporarily prevent a student from participating while keeping records intact." />
                    <CardBody>
                         <div className="space-y-4">
                            <Select label="Select Branch" id="branch" required>
                               <option>Main Branch</option>
                               <option>West Branch</option>
                            </Select>
                            <Input 
                                label="Select Student" 
                                id="student-search"
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                                placeholder="Search for student by name or ID..."
                                required
                            />
                             <Input 
                                label="Student's Class"
                                id="student-class"
                                value={student ? "Grade 7A" : ""}
                                readOnly
                                disabled
                                className="bg-gray-100"
                                placeholder="Auto-filled when student selected"
                             />
                             <Textarea 
                                label="Reason for Suspension"
                                id="reason"
                                placeholder="Provide a clear reason for the suspension."
                                required
                             />
                             <Input
                                label="Duration / Dates"
                                id="duration"
                                placeholder="e.g., 1 week, 11/10/2025 - 18/10/2025"
                                required
                             />
                            <Input label="Authorized By" id="authorized-by" value="Admin" readOnly disabled className="bg-gray-100" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 focus:ring-red-500 flex items-center">
                           <Slash className="h-5 w-5 mr-2" />
                           Confirm Suspension
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SuspendStudentPage;
