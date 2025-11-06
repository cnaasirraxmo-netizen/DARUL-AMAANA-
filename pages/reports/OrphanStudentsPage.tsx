import React from 'react';
import { Card, CardHeader, CardBody, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockOrphans = [
    { id: 'S032', name: 'Osman Said', class: 'Grade 5C', status: 'Father Deceased' },
    { id: 'S112', name: 'Amina Jama', class: 'Grade 7B', status: 'Both Parents Deceased' },
];

const OrphanStudentsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Orphan Students List" subtitle="A report of students registered with orphan status." />
            <CardBody>
                <div className="flex justify-between items-center mb-4">
                    <Select label="" id="filter-status">
                        <option>All Statuses</option>
                        <option>Father Deceased</option>
                        <option>Mother Deceased</option>
                        <option>Both Parents Deceased</option>
                    </Select>
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockOrphans.map(s => (
                                <tr key={s.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default OrphanStudentsPage;