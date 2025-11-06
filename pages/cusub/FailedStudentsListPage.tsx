
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockFailedStudents = [
    { id: 'S088', name: 'Ali Mohamed', class: 'Grade 8B', average: '58.5%' },
    { id: 'S092', name: 'Hassan Ibrahim', class: 'Grade 8B', average: '55.2%' },
    { id: 'S101', name: 'Khadija Omar', class: 'Grade 8B', average: '59.1%' },
];

const FailedStudentsListPage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Generate List of Failed Students" subtitle="Identify students who did not meet the passing criteria for a term." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Academic Year" id="year">
                                <option>2023-2024</option>
                                <option>2024-2025</option>
                            </Select>
                            <Select label="Select Branch" id="branch">
                                <option>All Branches</option>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="Select Class" id="class">
                                <option>All Classes</option>
                                <option>Grade 8B</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Failed Students for Grade 8B (2023-2024)" />
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Average Mark</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockFailedStudents.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">{student.average}</td>
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

export default FailedStudentsListPage;
