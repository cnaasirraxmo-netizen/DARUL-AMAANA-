import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert } from '../../components/common/FormElements';

const BackupExamDataPage: React.FC = () => {
    const [message, setMessage] = useState('');
    const [lastBackup, setLastBackup] = useState('2024-10-24 11:00 PM');

    const handleBackup = () => {
        setMessage('Backup in progress... This may take a few moments.');
        setTimeout(() => {
            const newBackupDate = new Date().toLocaleString();
            setMessage(`Backup completed successfully at ${newBackupDate}.`);
            setLastBackup(newBackupDate);
        }, 2000);
    };

    return (
        <div>
            <Alert message={message} onClose={() => setMessage('')} />
            <Card className="mt-4 max-w-xl mx-auto">
                <CardHeader title="Backup Exam Data" subtitle="Create a secure backup of all exam results and related information." />
                <CardBody>
                    <p className="text-gray-600">
                        It's important to regularly back up your data to prevent loss. The last successful backup was on:
                    </p>
                    <p className="text-lg font-semibold text-gray-800 my-2">{lastBackup}</p>
                    <p className="text-sm text-gray-500">
                        Click the button below to start a new manual backup. The system also performs automatic daily backups.
                    </p>
                </CardBody>
                <CardFooter className="text-right">
                    <Button onClick={handleBackup}>
                        Start New Backup
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BackupExamDataPage;
