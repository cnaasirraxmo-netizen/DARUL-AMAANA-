import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockFailedStudents = [
    { id: 'S088', name: 'Ali Mohamed', class: 'Grade 8B', average: '58.5%' },
    { id: 'S092', name: 'Hassan Ibrahim', class: 'Grade 8B', average: '55.2%' },
];

const FailedStudentListPage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Failed Student List" subtitle="Identify students who did not meet the passing criteria." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Exam" id="exam"><option>Final Exam 2023-2024</option></Select>
                            <Select label="Branch" id="branch"><option>All Branches</option></Select>
                            <Select label="Class" id="class"><option>All Classes</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Failed Students - Final Exam 2023-2024" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print List
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Average</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockFailedStudents.map(s => (
                                        <tr key={s.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-red-600">{s.average}</td>
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

export default FailedStudentListPage;