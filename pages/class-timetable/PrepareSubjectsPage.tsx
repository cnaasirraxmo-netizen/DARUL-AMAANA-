import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockSubjects = [
    { id: 'MATH', name: 'Mathematics' },
    { id: 'SCI', name: 'Science' },
    { id: 'ENG', name: 'English' },
    { id: 'HIST', name: 'History' },
];

const mockTeachers = [
    { id: 'T01', name: 'Mr. Ahmed Yusuf' },
    { id: 'T02', name: 'Ms. Fatima Ali' },
    { id: 'T03', name: 'Mr. Omar Hassan' },
];

const PrepareSubjectsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showSubjects, setShowSubjects] = useState(false);

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSubjects(true);
    };

    const handleSave = () => {
        setSuccessMessage('Teacher assignments for Grade 7A have been saved.');
        setShowSubjects(false);
    }

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Prepare Subjects" subtitle="Assign teachers to subjects for a specific class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Select Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Select Class" id="class"><option>Grade 7A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Subjects</Button>
                    </CardFooter>
                </form>
            </Card>

            {showSubjects && (
                <Card className="mt-8">
                    <CardHeader title="Assign Teachers for Grade 7A" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assign Teacher</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockSubjects.map(subject => (
                                        <tr key={subject.id}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{subject.name}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <Select label="" id={`teacher-${subject.id}`}>
                                                    <option>Select a teacher</option>
                                                    {mockTeachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
                                                </Select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                     <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save Assignments</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default PrepareSubjectsPage;
