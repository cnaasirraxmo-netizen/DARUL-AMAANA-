import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';
import { Slash } from '../../components/icons/Icons';

const DeleteClassResultsPage: React.FC = () => {
    const [confirmation, setConfirmation] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDelete = () => {
        setSuccessMessage('All results for Grade 9A Mid-term Exam have been permanently deleted.');
        setConfirmation(false);
    };

    return (
        <div>
            <Alert message={successMessage} type="success" onClose={() => setSuccessMessage('')} />
            <Alert message={errorMessage} type="error" onClose={() => setErrorMessage('')} />
            
            <Card className="mt-4 max-w-2xl mx-auto">
                <CardHeader title="Delete Class Results" subtitle="Permanently remove all exam results for a selected class." />
                <CardBody>
                    <div className="space-y-4">
                        <p className="text-red-700 font-semibold">
                            WARNING: This action is irreversible. Once deleted, the data cannot be recovered. Please be absolutely sure before proceeding.
                        </p>
                        <Select label="Select Branch" id="branch" required>
                            <option>Main Branch</option>
                        </Select>
                        <Select label="Select Class" id="class" required>
                            <option>Grade 9A</option>
                        </Select>
                        <Select label="Select Exam" id="exam" required>
                            <option>Mid-term Exam</option>
                        </Select>
                         <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="confirmation" name="confirmation" type="checkbox" checked={confirmation} onChange={(e) => setConfirmation(e.target.checked)} className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="confirmation" className="font-medium text-gray-700">I understand this action is permanent and cannot be undone.</label>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button 
                        onClick={handleDelete}
                        disabled={!confirmation}
                        className="bg-red-600 hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300 disabled:cursor-not-allowed flex items-center"
                    >
                        <Slash className="h-5 w-5 mr-2" />
                        Permanently Delete Results
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default DeleteClassResultsPage;
