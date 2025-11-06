import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';

const ChangePasswordPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Password changed successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-lg mx-auto">
                    <CardHeader title="Change Your Password" />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Current Password" id="current-password" type="password" required />
                            <Input label="New Password" id="new-password" type="password" required />
                            <Input label="Confirm New Password" id="confirm-password" type="password" required />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Update Password</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ChangePasswordPage;
