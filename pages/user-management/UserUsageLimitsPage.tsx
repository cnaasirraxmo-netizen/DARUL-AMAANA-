import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button, Alert } from '../../components/common/FormElements';

const UserUsageLimitsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Usage limits for the Teacher role have been updated.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-xl mx-auto">
                    <CardHeader title="User Usage Limits" subtitle="Set operational restrictions for users or roles." />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Apply to" id="apply-to">
                                <option>A Specific User</option>
                                <option selected>A Role</option>
                            </Select>
                            <Select label="Select Role" id="role">
                                <option>Teacher</option>
                                <option>Data Entry</option>
                            </Select>
                            <Input label="Max Daily Logins" id="max-logins" type="number" placeholder="Leave blank for unlimited" />
                            <Input label="Session Timeout (in minutes)" id="session-timeout" type="number" placeholder="e.g., 30" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Limits</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default UserUsageLimitsPage;
