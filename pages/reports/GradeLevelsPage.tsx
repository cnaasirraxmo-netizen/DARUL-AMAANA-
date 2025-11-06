import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const mockLevels = [
    { name: 'Grade 1', code: 'G1' },
    { name: 'Grade 2', code: 'G2' },
    { name: 'Grade 3', code: 'G3' },
    { name: 'Grade 4', code: 'G4' },
    { name: 'Grade 5', code: 'G5' },
    { name: 'Grade 6', code: 'G6' },
    { name: 'Grade 7', code: 'G7' },
    { name: 'Grade 8', code: 'G8' },
];

const GradeLevelsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Grade Levels List" subtitle="A reference list of all academic levels." />
            <CardBody>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockLevels.map(level => (
                                <tr key={level.code}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{level.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{level.code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default GradeLevelsPage;