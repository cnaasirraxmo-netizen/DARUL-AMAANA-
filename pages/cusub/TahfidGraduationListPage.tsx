
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockGraduates = [
    { id: 'S055', name: 'Abdullahi Nur', class: 'Tahfid Level 5', gradDate: '2024-06-15' },
    { id: 'S061', name: 'Amina Farah', class: 'Tahfid Level 5', gradDate: '2024-06-15' },
    { id: 'S043', name: 'Idil Hussein', class: 'Tahfid Level 5', gradDate: '2024-06-15' },
];

const TahfidGraduationListPage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Tahfid Graduation List" subtitle="Generate a list of students who have completed the Tahfid program." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Graduation Year" id="year">
                                <option>2024</option>
                                <option>2023</option>
                            </Select>
                            <Select label="Select Branch" id="branch">
                                <option>All Branches</option>
                                <option>Main Branch</option>
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
                    <CardHeader title="Tahfid Graduates - 2024" />
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Final Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Graduation Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockGraduates.map(student => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.class}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{student.gradDate}</td>
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

export default TahfidGraduationListPage;
