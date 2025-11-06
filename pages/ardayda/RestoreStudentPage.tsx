
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Select, Button, Input, Alert } from '../../components/common/FormElements';

const mockInactiveStudents = [
    { id: 'S098', name: 'Ali Yusuf', class: 'Grade 6B', status: 'Suspended' },
    { id: 'S154', name: 'Hawa Jama', class: 'Grade 9A', status: 'Deleted' },
    { id: 'S032', name: 'Osman Said', class: 'Grade 5C', status: 'Inactive' },
];

const RestoreStudentPage: React.FC = () => {
    const [restoredMessage, setRestoredMessage] = useState('');
    const [students, setStudents] = useState(mockInactiveStudents);

    const handleRestore = (studentId: string, studentName: string) => {
        setRestoredMessage(`Student ${studentName} successfully restored to active status.`);
        setStudents(students.filter(s => s.id !== studentId));
    };

    return (
        <div>
            <Alert message={restoredMessage} onClose={() => setRestoredMessage('')} />
            <Card className="mt-4">
                <CardHeader title="Restore Student" subtitle="Recover previously suspended, deleted, or inactive students." />
                <CardBody>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <Select label="" id="branch">
                            <option>Filter by Branch: All</option>
                            <option>Main Branch</option>
                            <option>West Branch</option>
                        </Select>
                        <div className="w-full md:w-1/3">
                            <Input label="" id="search" placeholder="Search students..."/>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-md border">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Class</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                student.status === 'Suspended' ? 'bg-yellow-100 text-yellow-800' :
                                                student.status === 'Deleted' ? 'bg-red-100 text-red-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Button onClick={() => handleRestore(student.id, student.name)}>Restore</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {students.length === 0 && <p className="text-center text-gray-500 py-4">No inactive students found.</p>}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default RestoreStudentPage;
