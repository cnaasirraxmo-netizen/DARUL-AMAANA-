
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const mockStudents = [
    { id: 'S001', name: 'Ahmed Ali', class: 'Grade 9A', photo: 'https://picsum.photos/seed/S001/100' },
    { id: 'S002', name: 'Fatima Omar', class: 'Grade 9A', photo: 'https://picsum.photos/seed/S002/100' },
    { id: 'S003', name: 'Yusuf Hassan', class: 'Grade 9A', photo: 'https://picsum.photos/seed/S003/100' },
];

const IdCardPage: React.FC = () => {
    const [showCards, setShowCards] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowCards(true);
    };

    return (
        <div>
            <div className="no-print">
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Generate Student ID Cards" subtitle="Select a class to generate printable ID cards." />
                        <CardBody>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                                <Select label="Class" id="class"><option>Grade 9A</option></Select>
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Generate ID Cards</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>

            {showCards && (
                <div className="printable-area">
                    <Card className="mt-8">
                        <CardHeader title="ID Cards for Grade 9A" />
                        <CardBody>
                            <div className="flex justify-end mb-4 no-print">
                                <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                    <Printer className="h-4 w-4 mr-2" /> Print All
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mockStudents.map(student => (
                                    <div key={student.id} className="bg-white border-2 border-sky-500 rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto">
                                        <div className="bg-sky-500 p-3 text-center text-white font-bold">
                                            <div className="flex items-center justify-center">
                                            <School className="h-6 w-6 mr-2" />
                                            <span>Mogadishu School</span>
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col items-center">
                                            <img src={student.photo} alt={student.name} className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover" />
                                            <h3 className="text-xl font-bold mt-3">{student.name}</h3>
                                            <p className="text-gray-600">Student ID: {student.id}</p>
                                            <p className="text-gray-600">Class: {student.class}</p>
                                            <div className="mt-4 border-t pt-2 text-sm text-gray-500">
                                                Academic Year: 2024-2025
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default IdCardPage;