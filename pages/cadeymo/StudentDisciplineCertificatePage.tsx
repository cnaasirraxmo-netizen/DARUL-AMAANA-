
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const StudentDisciplineCertificatePage: React.FC = () => {
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowCertificate(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Student Discipline Certificate" subtitle="Generate an official report on a student's behavior." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                            </Select>
                            <Input label="Select Student" id="student-search" placeholder="Search by name or ID..." required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showCertificate && (
                <Card className="mt-8">
                    <CardHeader title="Discipline Report Preview" />
                    <CardBody>
                         <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" />
                                Print
                            </Button>
                        </div>
                        <div className="p-8 border rounded-lg bg-white printable-area">
                            <div className="text-center mb-8">
                                <School className="h-16 w-16 mx-auto text-sky-600" />
                                <h2 className="text-2xl font-bold mt-2">Mogadishu Primary & Secondary School</h2>
                                <p className="text-gray-500">Official Document</p>
                                <h3 className="text-xl font-semibold mt-6 border-b-2 pb-2 inline-block">Cadeyn Anshaxa Ardayga</h3>
                            </div>
                            <div className="text-lg space-y-4">
                                <p><span className="font-semibold">To Whom It May Concern,</span></p>
                                <p>This document outlines the disciplinary record for the student <span className="font-bold">Yusuf Hassan</span> of class <span className="font-bold">Grade 9B</span>.</p>
                                <p className="font-semibold mt-4">Incidents on Record:</p>
                                <ul className="list-disc list-inside pl-4">
                                    <li><span className="font-semibold">2024-09-20:</span> Lateness - Verbal warning issued.</li>
                                    <li><span className="font-semibold">2024-10-05:</span> Disrespect towards teacher - Parents were called.</li>
                                </ul>
                                <p className="mt-6">This report is a true and accurate reflection of the student's record in our system.</p>
                            </div>
                             <div className="mt-16 flex justify-between items-center text-sm">
                                <div>
                                    <p>_________________________</p>
                                    <p className="font-semibold">Head of Discipline</p>
                                </div>
                                <div>
                                    <p>Date: {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default StudentDisciplineCertificatePage;
