import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockTypes = [
    { name: 'Mid-term Exam', year: '2024-2025' },
    { name: 'Final Exam', year: '2024-2025' },
    { name: 'Quiz 1', year: '2024-2025' },
    { name: 'Monthly Test', year: '2024-2025' },
];

const ExamTypesListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Exam Types List" subtitle="A reference list of all exams defined in the system." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exam Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Academic Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockTypes.map(type => (
                                <tr key={type.name}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{type.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{type.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default ExamTypesListPage;