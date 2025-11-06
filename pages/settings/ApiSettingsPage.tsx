import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';

const ApiSettingsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('API settings have been saved.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="API Settings" subtitle="Manage integrations with external services." />
                    <CardBody className="space-y-4">
                        <Input label="SMS Gateway API Key" id="sms-api" type="password" defaultValue="************1234" />
                        <Input label="Online Payment API Key" id="payment-api" type="password" defaultValue="************5678" />
                        <Input label="Google Maps API Key" id="maps-api" type="password" />
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Settings</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ApiSettingsPage;
