import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockTeachers = [
    { id: 'T01', name: 'Mr. Ahmed Yusuf' },
    { id: 'T02', name: 'Ms. Fatima Ali' },
    { id: 'T03', name: 'Mr. Omar Hassan' },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const TeacherWorkDaysPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = () => {
        setSuccessMessage('Teacher work days have been updated successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <CardHeader title="Teacher Work Days" subtitle="Manage the weekly availability of teachers." />
                <CardBody>
                    <div className="overflow-x-auto rounded-md border">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                                    {days.map(day => (
                                        <th key={day} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockTeachers.map(teacher => (
                                    <tr key={teacher.id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{teacher.name}</td>
                                        {days.map(day => (
                                            <td key={day} className="px-6 py-4 text-center">
                                                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleSave}>Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TeacherWorkDaysPage;
