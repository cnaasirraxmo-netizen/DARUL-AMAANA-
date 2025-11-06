import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const periods = [
    { time: '8:00 - 8:45', subjects: ['Math', 'English', 'Math', 'Science'] },
    { time: '8:45 - 9:30', subjects: ['Science', 'Math', 'English', 'Math'] },
];

const ClassScheduleListPage: React.FC = () => {
    const [showTimetable, setShowTimetable] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowTimetable(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Class Schedule List" subtitle="View and print timetables for any class." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="class"><option>Grade 7A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">View Schedule</Button>
                    </CardFooter>
                </form>
            </Card>

            {showTimetable && (
                <Card className="mt-8">
                    <CardHeader title="Schedule for Grade 7A" />
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </Button>
                        </div>
                        <div className="overflow-x-auto rounded-md border printable-area">
                            <table className="min-w-full border-collapse border border-slate-400">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-300 p-2">Time</th>
                                        {days.map(day => <th key={day} className="border border-slate-300 p-2">{day}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {periods.map(period => (
                                        <tr key={period.time}>
                                            <td className="border border-slate-300 p-2 font-semibold">{period.time}</td>
                                            {period.subjects.map((sub, i) => <td key={i} className="border border-slate-300 p-2 text-center">{sub}</td>)}
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

export default ClassScheduleListPage;