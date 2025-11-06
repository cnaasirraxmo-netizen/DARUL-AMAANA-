import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const TransferSubjectResultsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Mathematics results for Grade 9A successfully transferred.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Transfer Subject Results" subtitle="Move a subject's results from one class/exam to another." />
                    <CardBody>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Source Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 border rounded-md mb-6">
                            <Select label="Branch" id="from-branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="from-class"><option>Grade 9A</option></Select>
                            <Select label="Exam" id="from-exam"><option>Mid-term</option></Select>
                            <Select label="Subject" id="from-subject"><option>Mathematics</option></Select>
                        </div>

                        <h3 className="text-lg font-medium text-gray-800 mb-2">Destination Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 border rounded-md">
                            <Select label="Branch" id="to-branch"><option>Main Branch</option></Select>
                            <Select label="Class" id="to-class"><option>Grade 9B</option></Select>
                            <Select label="Exam" id="to-exam"><option>Mid-term</option></Select>
                            <Select label="Subject" id="to-subject"><option>Mathematics</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Transfer Results</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default TransferSubjectResultsPage;
