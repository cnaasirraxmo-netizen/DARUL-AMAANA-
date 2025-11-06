import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button, Alert } from '../../components/common/FormElements';

const GrantCustomPermissionsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Custom permission granted to Omar Hassan until 2025-01-01.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-xl mx-auto">
                    <CardHeader title="Grant Custom Permission" subtitle="Assign a temporary or unique permission to a user." />
                    <CardBody>
                        <div className="space-y-4">
                           <Select label="Select User" id="user-select" required>
                                <option>Omar Hassan (Accountant)</option>
                                <option>Ahmed Yusuf (Teacher)</option>
                           </Select>
                           <Input label="Custom Permission Name" id="custom-perm" placeholder="e.g., can_access_financial_audit_log" required/>
                           <Input label="Expiration Date (Optional)" id="expiry-date" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Grant Permission</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default GrantCustomPermissionsPage;
