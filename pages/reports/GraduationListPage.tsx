import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockGraduates = [
    { id: 'S101', name: 'Ayaan Hirsi', class: 'Grade 12A' },
    { id: 'S102', name: 'Bashir Ahmed', class: 'Grade 12A' },
    { id: 'S104', name: 'Hassan Jama', class: 'Grade 12A' },
];

const GraduationListPage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Graduation List" subtitle="Generate the official list of graduating students." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
                            <Select label="Academic Year" id="year"><option>2024-2025</option></Select>
                            <Select label="Class" id="class"><option>Grade 12A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate List</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Graduating Class of 2025 - Grade 12A" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print Official List
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Full Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockGraduates.map(s => (
                                        <tr key={s.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
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

export default GraduationListPage;