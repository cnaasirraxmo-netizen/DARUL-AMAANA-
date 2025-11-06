
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockStudents: { id: string; name: string }[] = [];

const BulkTransferPage: React.FC = () => {
    const [selectedStudents, setSelectedStudents] = useState<Record<string, boolean>>({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleCheckboxChange = (studentId: string) => {
        setSelectedStudents(prev => ({ ...prev, [studentId]: !prev[studentId] }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const count = Object.values(selectedStudents).filter(Boolean).length;
        if (count > 0) {
            setSuccessMessage(`${count} student(s) successfully transferred. Action logged for audit.`);
            setSelectedStudents({});
        } else {
             setSuccessMessage(`No students selected for transfer.`);
        }
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Transfer Between Classes" subtitle="Manage mass or group transfers during term restructuring." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Branch" id="branch">
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="From Class" id="from-class">
                                <option>Grade 7A</option>
                                <option>Grade 7B</option>
                            </Select>
                            <Select label="To Class" id="to-class">
                                <option>Grade 8A</option>
                                <option>Grade 8B</option>
                            </Select>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-lg font-medium text-gray-900">Select Students to Transfer from Grade 7A</h3>
                             <p className="text-sm text-gray-500">Load students by selecting a class above. Backend connection required.</p>
                            <div className="mt-4 max-h-72 overflow-y-auto rounded-md border">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {mockStudents.length === 0 && (
                                            <tr>
                                                <td colSpan={3} className="text-center py-4 text-gray-500">No students to display.</td>
                                            </tr>
                                        )}
                                        {mockStudents.map(student => (
                                            <tr key={student.id} className={selectedStudents[student.id] ? 'bg-sky-50' : ''}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                                                        checked={!!selectedStudents[student.id]}
                                                        onChange={() => handleCheckboxChange(student.id)}
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">{student.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button type="button" variant="secondary">Cancel</Button>
                        <Button type="submit">Transfer Selected</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default BulkTransferPage;