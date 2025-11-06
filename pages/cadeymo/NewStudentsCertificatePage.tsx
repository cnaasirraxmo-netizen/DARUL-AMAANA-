
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockNewStudents = [
    { id: 'S1251', name: 'Ayaan Hirsi', class: 'Grade 1A', registered: '2024-09-01' },
    { id: 'S1252', name: 'Bashir Ahmed', class: 'Grade 1A', registered: '2024-09-02' },
    { id: 'S1253', name: 'Faduma Ali', class: 'Grade 1A', registered: '2024-09-02' },
];

const NewStudentsCertificatePage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Generate List of New Students" subtitle="Filter and view students who registered in a specific period." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Branch" id="branch">
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="Select Class" id="class">
                                <option>All Classes</option>
                                <option>Grade 1A</option>
                                <option>Grade 1B</option>
                            </Select>
                             <Input label="Academic Year" id="year" defaultValue="2024-2025" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="New Students in Grade 1A (2024-2025)" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" />
                                Print List
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Full Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registration Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockNewStudents.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.registered}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default NewStudentsCertificatePage;
