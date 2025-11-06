
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';
import { School } from '../../components/icons/Icons';

const StaffAbsenceCertificatePage: React.FC = () => {
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowCertificate(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Staff Absence Certificate" subtitle="Generate an official report for staff absences." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                            </Select>
                            <Input label="Select Staff Member" id="staff-search" placeholder="Search by name or ID..." required />
                            <div className="md:col-span-1 grid grid-cols-2 gap-4">
                                <Input label="Start Date" id="start-date" type="date" required />
                                <Input label="End Date" id="end-date" type="date" required />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate Report</Button>
                    </CardFooter>
                </form>
            </Card>

            {showCertificate && (
                <Card className="mt-8">
                    <CardHeader title="Absence Report" />
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
                                <h3 className="text-xl font-semibold mt-6 border-b-2 pb-2 inline-block">Warqadda Maqnaanshaha Shaqaalaha</h3>
                            </div>
                            <div className="text-lg space-y-4">
                                <p><span className="font-semibold">To Whom It May Concern,</span></p>
                                <p>This letter serves to certify the absence record of the following staff member:</p>
                                <p><span className="font-semibold">Name:</span> Omar Hassan</p>
                                <p><span className="font-semibold">Role:</span> Mathematics Teacher</p>
                                <p><span className="font-semibold">Period:</span> 2024-10-01 to 2024-10-31</p>
                                <p className="font-semibold mt-4">Details of Absences:</p>
                                <ul className="list-disc list-inside pl-4">
                                    <li><span className="font-semibold">2024-10-10:</span> Sick Leave (Approved)</li>
                                    <li><span className="font-semibold">2024-10-25:</span> Personal Leave (Approved)</li>
                                </ul>
                                <p className="mt-6">This information is provided from official school records.</p>
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
            )}
        </div>
    );
};

export default StaffAbsenceCertificatePage;
