import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import { Eye, Edit } from '../../components/icons/Icons';

const mockPolicies = [
    { title: 'Late Arrival Policy', status: 'Active', updated: '2024-09-01' },
    { title: 'Classroom Management Guidelines', status: 'Active', updated: '2024-08-15' },
    { title: 'Exam Proctoring Protocol', status: 'Draft', updated: '2024-10-20' },
];

const TeacherPolicyListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Teacher Policy List" subtitle="List of all operational and draft policies for teaching staff." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockPolicies.map((policy) => (
                                <tr key={policy.title}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{policy.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            policy.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {policy.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.updated}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                        <button className="text-gray-500 hover:text-sky-600"><Eye className="h-5 w-5"/></button>
                                        <button className="text-gray-500 hover:text-yellow-600"><Edit className="h-5 w-5"/></button>
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

export default TeacherPolicyListPage;