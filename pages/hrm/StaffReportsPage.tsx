import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockStaff = [
    { id: 'E01', name: 'Mr. Ahmed Yusuf', role: 'Teacher', department: 'Academics', status: 'Active' },
    { id: 'E02', name: 'Ms. Fatima Ali', role: 'Teacher', department: 'Academics', status: 'Active' },
    { id: 'E03', name: 'Mr. Omar Hassan', role: 'Accountant', department: 'Finance', status: 'On Leave' },
];

const StaffReportsPage: React.FC = () => {
    const [showReport, setShowReport] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowReport(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Staff Reports" subtitle="Generate various reports related to human resources." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Report Type" id="report-type" required>
                                <option>Employee List</option>
                                <option>Attendance Summary</option>
                                <option>Salary Sheet</option>
                            </Select>
                            <Input label="Start Date" id="start-date" type="date" />
                            <Input label="End Date" id="end-date" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showReport && (
                <Card className="mt-8">
                    <CardHeader title="Report: Employee List" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print Report
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emp. ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockStaff.map(staff => (
                                        <tr key={staff.id}>
                                            <td className="px-6 py-4 text-sm text-gray-500">{staff.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{staff.role}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{staff.department}</td>
                                            <td className="px-6 py-4 text-sm">
                                                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${staff.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {staff.status}
                                                </span>
                                            </td>
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

export default StaffReportsPage;