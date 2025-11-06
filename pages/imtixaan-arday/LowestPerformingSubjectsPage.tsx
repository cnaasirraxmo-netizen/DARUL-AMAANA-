import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const subjectData = [
    { name: 'Advanced Algebra', average: 68.4 },
    { name: 'Literature', average: 71.2 },
    { name: 'World History', average: 73.0 },
    { name: 'Art', average: 75.1 },
    { name: 'Music Theory', average: 78.9 },
];

const LowestPerformingSubjectsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Lowest Performing Subjects" subtitle="Bottom 5 subjects needing attention based on average scores." />
            <CardBody>
                <div className="space-y-4">
                    {subjectData.map((subject, index) => (
                        <div key={subject.name} className="flex items-center">
                            <div className="font-bold text-lg text-gray-600 w-8">{index + 1}.</div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-red-700">{subject.name}</span>
                                    <span className="text-sm font-medium text-red-700">{subject.average.toFixed(1)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${subject.average}%` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default LowestPerformingSubjectsPage;
