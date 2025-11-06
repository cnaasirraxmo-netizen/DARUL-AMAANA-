import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert, Input } from '../../components/common/FormElements';

const mockStaff = [
    { id: 'E01', name: 'Mr. Ahmed Yusuf' },
    { id: 'E02', name: 'Ms. Fatima Ali' },
    { id: 'E03', name: 'Mr. Omar Hassan' },
    { id: 'E04', name: 'Ms. Aisha Ibrahim' },
];

const StaffAttendancePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showList, setShowList] = useState(false);

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    const handleSave = () => {
        setSuccessMessage('Staff attendance for today has been saved.');
        setShowList(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Staff Attendance" subtitle="Mark daily attendance for all staff members." />
                    <CardBody>
                        <div className="flex items-end gap-4 max-w-sm">
                            <Input label="Select Date" id="attendance-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} required />
                            <Button type="submit">Load Staff</Button>
                        </div>
                    </CardBody>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title={`Attendance for ${new Date().toLocaleDateString()}`} />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff Name</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Present</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Absent</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Late</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">On Leave</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockStaff.map(staff => (
                                        <tr key={staff.id}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.name}</td>
                                            <td className="px-6 py-4 text-center"><input type="radio" name={`att-${staff.id}`} defaultChecked /></td>
                                            <td className="px-6 py-4 text-center"><input type="radio" name={`att-${staff.id}`} /></td>
                                            <td className="px-6 py-4 text-center"><input type="radio" name={`att-${staff.id}`} /></td>
                                            <td className="px-6 py-4 text-center"><input type="radio" name={`att-${staff.id}`} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save Attendance</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default StaffAttendancePage;