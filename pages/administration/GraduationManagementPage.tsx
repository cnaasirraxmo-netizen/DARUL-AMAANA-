import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockStudents = [
    { id: 'S101', name: 'Ayaan Hirsi', eligible: true },
    { id: 'S102', name: 'Bashir Ahmed', eligible: true },
    { id: 'S103', name: 'Faduma Ali', eligible: false },
    { id: 'S104', name: 'Hassan Jama', eligible: true },
];

const GraduationManagementPage: React.FC = () => {
    const [showList, setShowList] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    const handleFinalize = () => {
        setSuccessMessage('Graduation list finalized and saved for Grade 12A.');
        setShowList(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Graduation Management" subtitle="Manage the list of graduating students for a class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Academic Year" id="year"><option>2024-2025</option></Select>
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 12A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Student List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Confirm Students for Graduation - Grade 12A" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eligibility Status</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Confirm</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockStudents.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    student.eligible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {student.eligible ? 'Eligible' : 'Not Eligible'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <input type="checkbox" defaultChecked={student.eligible} disabled={!student.eligible} className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleFinalize}>Finalize Graduation List</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default GraduationManagementPage;