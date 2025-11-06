import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert } from '../../components/common/FormElements';

const BackupRestoreDatabasePage: React.FC = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [lastBackup, setLastBackup] = useState('2024-10-26 02:00 AM (Automatic)');

    const handleBackup = () => {
        setMessage('Full database backup in progress...');
        setError('');
        setTimeout(() => {
            const newBackupDate = new Date().toLocaleString();
            setMessage(`Backup completed successfully at ${newBackupDate}.`);
            setLastBackup(`${newBackupDate} (Manual)`);
        }, 3000);
    };

    const handleRestore = () => {
        if (window.confirm('Are you sure you want to restore? This will overwrite all current data.')) {
            setMessage('Restoring database... The system will be unavailable for a few moments.');
            setError('');
            setTimeout(() => {
                setError('Restore failed: Invalid backup file format.');
                setMessage('');
            }, 4000);
        }
    };

    return (
        <div>
            <Alert message={message} type="success" onClose={() => setMessage('')} />
            <Alert message={error} type="error" onClose={() => setError('')} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                <Card>
                    <CardHeader title="Backup Database" />
                    <CardBody>
                        <p className="text-gray-600">Create a full backup of the school's database.</p>
                        <p className="mt-2 text-sm">Last backup: <span className="font-semibold">{lastBackup}</span></p>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Button onClick={handleBackup}>Create New Backup</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader title="Restore Database" />
                    <CardBody>
                        <div className="p-3 bg-red-100 border-l-4 border-red-400 text-red-700">
                            <p className="font-bold">Warning!</p>
                            <p>Restoring will permanently delete all existing data. Proceed with caution.</p>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="restore-file" className="block text-sm font-medium text-gray-700">Select Backup File</label>
                            <input id="restore-file" type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"/>
                        </div>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Button onClick={handleRestore} className="bg-red-600 hover:bg-red-700 focus:ring-red-500">Restore Data</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default BackupRestoreDatabasePage;
