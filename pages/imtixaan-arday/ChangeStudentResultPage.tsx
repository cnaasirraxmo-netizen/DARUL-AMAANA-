import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert, Textarea } from '../../components/common/FormElements';

const ChangeStudentResultPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [studentId, setStudentId] = useState('');
    const [studentData, setStudentData] = useState<{ name: string; class: string; subject: string; mark: number } | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (studentId) {
            setStudentData({
                name: 'Ahmed Ali',
                class: 'Grade 9A',
                subject: 'Mathematics',
                mark: 85,
            });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Result for Ahmed Ali updated successfully from 85 to ${studentData?.mark}.`);
        setStudentData(null);
        setStudentId('');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card className="mt-4 max-w-3xl mx-auto">
                 {!studentData ? (
                    <form onSubmit={handleSearch}>
                        <CardHeader title="Change Student Result" subtitle="Find a specific student's exam result to modify it." />
                        <CardBody>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Student ID or Name" id="student-search" value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="Enter student ID or name..." required/>
                                <Select label="Select Exam" id="exam-select" required>
                                    <option>Mid-term Exam</option>
                                    <option>Final Exam</option>
                                </Select>
                             </div>
                        </CardBody>
                        <CardFooter className="text-right">
                            <Button type="submit">Find Result</Button>
                        </CardFooter>
                    </form>
                 ) : (
                    <form onSubmit={handleSubmit}>
                        <CardHeader title={`Editing Result for ${studentData.name}`} />
                        <CardBody>
                            <div className="space-y-4">
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="Student Name" id="student-name" value={studentData.name} readOnly disabled />
                                    <Input label="Class" id="student-class" value={studentData.class} readOnly disabled />
                               </div>
                                <Input label="Subject" id="subject" value={studentData.subject} readOnly disabled />
                                <Input label="New Mark" id="new-mark" type="number" value={studentData.mark} onChange={e => setStudentData({...studentData, mark: parseInt(e.target.value)})} required />
                                <Textarea label="Reason for Change" id="reason" placeholder="e.g., Correction of data entry error." required/>
                            </div>
                        </CardBody>
                         <CardFooter className="flex justify-end space-x-2">
                             <Button type="button" variant="secondary" onClick={() => setStudentData(null)}>Cancel</Button>
                             <Button type="submit">Save Change</Button>
                        </CardFooter>
                    </form>
                 )}
            </Card>
        </div>
    );
};

export default ChangeStudentResultPage;
