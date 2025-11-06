
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button, Alert } from '../../components/common/FormElements';
import { GraduationCap } from '../../components/icons/Icons';

const TahfidGraduationStudentPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [student, setStudent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Success! Student Abdullahi Nur has been marked as a Tahfid Graduate.');
        setStudent('');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Tahfid Graduation Registration" subtitle="Register a student as having completed the Tahfid program." />
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
                                label="Student's Current Class"
                                id="student-class"
                                value={student ? "Tahfid Level 5" : ""}
                                readOnly
                                disabled
                                className="bg-gray-100"
                                placeholder="Auto-filled when student is selected"
                             />
                             <Input
                                label="Graduation Date"
                                id="grad-date"
                                type="date"
                                required
                             />
                             <Input
                                label="Certificate Number"
                                id="cert-number"
                                placeholder="Enter official certificate number"
                             />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                           <GraduationCap className="h-5 w-5 mr-2" />
                           Confirm Graduation
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default TahfidGraduationStudentPage;
