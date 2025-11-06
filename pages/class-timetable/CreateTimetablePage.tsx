import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = ['Period 1 (8:00)', 'Period 2 (8:45)', 'Period 3 (9:30)', 'Break', 'Period 4 (11:00)', 'Period 5 (11:45)'];
const subjects = ['Mathematics', 'Science', 'English', 'History', 'Art'];

const CreateTimetablePage: React.FC = () => {
    const [showTimetable, setShowTimetable] = useState(false);

    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setShowTimetable(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Create Timetable" subtitle="Visually build the weekly class schedule." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Select Branch" id="branch"><option>Main Branch</option></Select>
                            <Select label="Select Class" id="class"><option>Grade 7A</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Timetable Grid</Button>
                    </CardFooter>
                </form>
            </Card>
            {showTimetable && (
                <Card className="mt-8">
                    <CardHeader title="Timetable for Grade 7A" />
                    <CardBody>
                        <div className="overflow-x-auto rounded-md border">
                            <table className="min-w-full divide-y divide-gray-200 border">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase border-r">Time</th>
                                        {days.map(day => (
                                            <th key={day} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">{day}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {periods.map((period, pIndex) => (
                                        <tr key={period} className="divide-x">
                                            <td className="px-2 py-4 font-medium text-gray-700 whitespace-nowrap">{period}</td>
                                            {days.map((day, dIndex) => (
                                                <td key={day} className={`p-1 ${period === 'Break' ? 'bg-gray-100' : ''}`}>
                                                    {period !== 'Break' && (
                                                        <Select label="" id={`cell-${pIndex}-${dIndex}`} className="text-xs">
                                                            <option value="">-</option>
                                                            {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                                                        </Select>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button>Save Timetable</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default CreateTimetablePage;
