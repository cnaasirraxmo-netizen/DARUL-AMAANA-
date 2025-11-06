import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer, School } from '../../components/icons/Icons';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = [
    { time: '8:00 - 8:45', subjects: ['Math', 'English', 'Math', 'Science', 'History'] },
    { time: '8:45 - 9:30', subjects: ['Science', 'Math', 'English', 'Math', 'Art'] },
    { time: '9:30 - 10:15', subjects: ['English', 'Science', 'History', 'English', 'Math'] },
];

const PrintTimetablePage: React.FC = () => {
    const [showTimetable, setShowTimetable] = useState(false);

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowTimetable(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Print Timetable" subtitle="Generate a printable version of a class schedule." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Select Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Select Class" id="class"><option>Grade 7A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate</Button>
                    </CardFooter>
                </form>
            </Card>

            {showTimetable && (
                <Card className="mt-8">
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </Button>
                        </div>
                        <div className="p-8 border rounded-lg bg-white printable-area">
                             <div className="text-center mb-8">
                                <School className="h-12 w-12 mx-auto text-sky-600" />
                                <h2 className="text-2xl font-bold mt-2">Class Timetable</h2>
                                <p className="text-lg font-semibold">Grade 7A - 2024-2025</p>
                            </div>
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

export default PrintTimetablePage;
