import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const gradingAssignments = [
    { class: 'Grade 9A', subject: 'Mathematics', user: 'Mr. Ahmed Yusuf' },
    { class: 'Grade 9A', subject: 'Science', user: 'Ms. Fatima Ali' },
    { class: 'Grade 9B', subject: 'Mathematics', user: 'Mr. Ahmed Yusuf' },
    { class: 'Grade 8A', subject: 'English', user: 'Mr. Omar Hassan' },
];

const UserGradingListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="User Grading List" subtitle="List of teachers/users assigned to enter results for each subject." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned User</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {gradingAssignments.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 text-sm text-gray-900">{item.class}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.subject}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default UserGradingListPage;
