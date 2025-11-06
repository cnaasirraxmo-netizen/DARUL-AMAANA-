
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const StudentCertificatePage: React.FC = () => {
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowCertificate(true);
    };

    return (
        <div>
            <div className="no-print">
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Student Certificate" subtitle="Generate an official certificate for a student." />
                        <CardBody>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Select Branch" id="branch" required>
                                    <option>Main Branch</option>
                                </Select>
                                <Input label="Select Student" id="student-search" placeholder="Search by name or ID..." required />
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Generate Certificate</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>

            {showCertificate && (
                <div className="printable-area">
                    <Card className="mt-8">
                        <CardHeader title="Certificate Preview" />
                        <CardBody>
                            <div className="flex justify-end mb-4 no-print">
                                <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                    <Printer className="h-4 w-4 mr-2" />
                                    Print
                                </Button>
                            </div>
                            <div className="p-8 border rounded-lg bg-white">
                                <div className="text-center mb-8">
                                    <School className="h-16 w-16 mx-auto text-sky-600" />
                                    <h2 className="text-2xl font-bold mt-2">Mogadishu Primary & Secondary School</h2>
                                    <p className="text-gray-500">Official Document</p>
                                    <h3 className="text-xl font-semibold mt-6 border-b-2 pb-2 inline-block">Caddeynta Ardayga</h3>
                                </div>
                                <div className="text-lg space-y-4">
                                    <p><span className="font-semibold">To Whom It May Concern,</span></p>
                                    <p>
                                        This is to certify that <span className="font-bold">Ahmed Ali</span> is a bonafide student
                                        at our institution. He is currently enrolled in <span className="font-bold">Grade 7A</span> for the
                                        academic year <span className="font-bold">2024-2025</span>.
                                    </p>
                                    <p>
                                        According to our records, he has been a diligent and well-behaved student.
                                    </p>
                                    <p className="mt-6">This certificate is issued for whatever official purpose it may serve.</p>
                                </div>
                                <div className="mt-16 flex justify-between items-center text-sm">
                                    <div>
                                        <p>_________________________</p>
                                        <p className="font-semibold">Principal's Signature</p>
                                    </div>
                                    <div>
                                        <p>Date: {new Date().toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default StudentCertificatePage;