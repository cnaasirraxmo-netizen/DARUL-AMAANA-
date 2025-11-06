import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const TransferExamPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Exam data successfully transferred from Term 1 to Term 2.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Transfer Exam" subtitle="Migrate exam definitions and data between academic periods." />
                    <CardBody>
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-800">Source</h3>
                           <div className="p-4 border rounded-md grid grid-cols-2 gap-4">
                               <Select label="Academic Year" id="from-year">
                                   <option>2024-2025</option>
                               </Select>
                               <Select label="Exam" id="from-exam">
                                   <option>Mid-term Exam (Term 1)</option>
                               </Select>
                           </div>

                           <h3 className="text-lg font-medium text-gray-800 pt-4">Destination</h3>
                           <div className="p-4 border rounded-md grid grid-cols-2 gap-4">
                               <Select label="Academic Year" id="to-year">
                                   <option>2024-2025</option>
                               </Select>
                               <Select label="Exam" id="to-exam">
                                   <option>Mid-term Exam (Term 2)</option>
                               </Select>
                           </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Execute Transfer</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default TransferExamPage;
