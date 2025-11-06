import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const mockUnpaid = [
    { id: 'S002', name: 'Fatima Omar', class: 'Grade 9A', balance: 250.00 },
    { id: 'S015', name: 'Asha Nur', class: 'Grade 8B', balance: 500.00 },
];

const UnpaidFeesNotificationsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleNotify = () => {
        setSuccessMessage('Notifications sent to 2 selected students.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card className="mt-4">
                <CardHeader title="Unpaid Fees Notifications" subtitle="Send payment reminders to students with outstanding balances." />
                <CardBody>
                    <div className="flex items-center justify-end mb-4">
                        <Select label="" id="filter-class">
                            <option>All Classes</option>
                            <option>Grade 9A</option>
                        </Select>
                    </div>
                    <div className="overflow-x-auto rounded-md border">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3"><input type="checkbox" /></th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockUnpaid.map(s => (
                                    <tr key={s.id}>
                                        <td className="px-6 py-4"><input type="checkbox" /></td>
                                        <td className="px-6 py-4 text-sm font-medium">{s.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{s.class}</td>
                                        <td className="px-6 py-4 text-right text-sm font-bold text-red-600">${s.balance.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleNotify}>Send Notifications to Selected</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default UnpaidFeesNotificationsPage;