import React from 'react';
import { Card, CardHeader, CardBody, Select, Input } from '../../components/common/FormElements';

const mockStudents = [
    { id: 'S001', name: 'Ahmed Ali', class: 'Grade 9A', status: 'Active' },
    { id: 'S002', name: 'Fatima Omar', class: 'Grade 9A', status: 'Active' },
    { id: 'S003', name: 'Yusuf Hassan', class: 'Grade 9B', status: 'Active' },
    { id: 'S098', name: 'Ali Yusuf', class: 'Grade 6B', status: 'Suspended' },
];

const StudentListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Student List" subtitle="A comprehensive, filterable list of all students." />
            <CardBody>
                 <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                    <Input label="" id="search-student" placeholder="Search by name or ID..." className="w-full md:w-1/3" />
                    <div className="flex gap-4">
                        <Select label="" id="filter-class"><option>All Classes</option></Select>
                        <Select label="" id="filter-status"><option>All Statuses</option></Select>
                    </div>
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
                            {mockStudents.map(s => (
                                <tr key={s.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${s.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{s.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default StudentListPage;