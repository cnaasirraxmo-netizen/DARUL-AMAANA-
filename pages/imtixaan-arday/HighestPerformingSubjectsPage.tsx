import React from 'react';
import { Card, CardHeader, CardBody } from '../../components/common/FormElements';

const subjectData = [
    { name: 'Physics', average: 91.5 },
    { name: 'Chemistry', average: 89.2 },
    { name: 'Biology', average: 88.0 },
    { name: 'History', average: 85.7 },
    { name: 'Geography', average: 82.1 },
];

const HighestPerformingSubjectsPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Highest Performing Subjects" subtitle="Top 5 subjects based on average student scores across all classes." />
            <CardBody>
                <div className="space-y-4">
                    {subjectData.map((subject, index) => (
                        <div key={subject.name} className="flex items-center">
                            <div className="font-bold text-lg text-gray-600 w-8">{index + 1}.</div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-sky-700">{subject.name}</span>
                                    <span className="text-sm font-medium text-sky-700">{subject.average.toFixed(1)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${subject.average}%` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default HighestPerformingSubjectsPage;
