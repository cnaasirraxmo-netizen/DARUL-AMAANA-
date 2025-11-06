import React from 'react';
import { Card, CardHeader, CardBody, Select, Input } from '../../components/common/FormElements';

const mockStaff = [
    { id: 'E01', name: 'Mr. Ahmed Yusuf', role: 'Teacher', department: 'Academics', status: 'Active' },
    { id: 'E02', name: 'Ms. Fatima Ali', role: 'Teacher', department: 'Academics', status: 'Active' },
    { id: 'E03', name: 'Mr. Omar Hassan', role: 'Accountant', department: 'Finance', status: 'On Leave' },
];

const EmployeeListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Employee List" subtitle="A comprehensive list of all staff members." />
            <CardBody>
                 <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                    <Input label="" id="search-staff" placeholder="Search by name or ID..." className="w-full md:w-1/3" />
                    <div className="flex gap-4">
                        <Select label="" id="filter-dept"><option>All Departments</option></Select>
                        <Select label="" id="filter-status"><option>All Statuses</option></Select>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockStaff.map(s => (
                                <tr key={s.id}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.role}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{s.department}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${s.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{s.status}</span>
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

export default EmployeeListPage;