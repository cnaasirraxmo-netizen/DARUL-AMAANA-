import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockTypes = [
    { name: 'Lateness', severity: 'Low' },
    { name: 'Disrespect', severity: 'Medium' },
    { name: 'Uniform Violation', severity: 'Low' },
    { name: 'Fighting', severity: 'High' },
    { name: 'Skipping Class', severity: 'Medium' },
];

const BehaviorTypesPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Behavior Types List" subtitle="A reference list of all defined student discipline categories." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Behavior Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockTypes.map(type => (
                                <tr key={type.name}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{type.name}</td>
                                    <td className="px-6 py-4 text-sm">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            type.severity === 'High' ? 'bg-red-100 text-red-800' :
                                            type.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-green-100 text-green-800'
                                        }`}>
                                            {type.severity}
                                        </span>
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

export default BehaviorTypesPage;