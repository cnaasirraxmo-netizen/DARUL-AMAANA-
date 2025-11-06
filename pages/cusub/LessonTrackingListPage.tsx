
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockLessonLogs = [
    { date: '2024-10-25', class: 'Grade 7A', subject: 'Mathematics', teacher: 'Mr. Ahmed Yusuf', details: 'Chapter 5: Algebra...' },
    { date: '2024-10-25', class: 'Grade 7A', subject: 'Science', teacher: 'Ms. Fatima Ali', details: 'Unit 3: Photosynthesis...' },
    { date: '2024-10-24', class: 'Grade 7A', subject: 'Mathematics', teacher: 'Mr. Ahmed Yusuf', details: 'Chapter 4: Geometry...' },
];

const LessonTrackingListPage: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowList(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Lesson Tracking List" subtitle="Review submitted lesson logs to monitor curriculum progress." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Select label="Select Class" id="class">
                                <option>All Classes</option>
                                <option>Grade 7A</option>
                            </Select>
                            <Select label="Select Teacher" id="teacher">
                                <option>All Teachers</option>
                                <option>Mr. Ahmed Yusuf</option>
                            </Select>
                            <Input label="Start Date" id="start-date" type="date" />
                            <Input label="End Date" id="end-date" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showList && (
                <Card className="mt-8">
                    <CardHeader title="Lesson Log for Grade 7A" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" />
                                Print Report
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockLessonLogs.map((log, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.class}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.subject}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.teacher}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-sm truncate">{log.details}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default LessonTrackingListPage;
