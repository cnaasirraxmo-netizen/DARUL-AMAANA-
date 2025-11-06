import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewOrganizationPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New organization "Ministry of Education" has been registered.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Register New Organization" subtitle="Add a new hay'ad or institution to the system." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Organization Name" id="org-name" placeholder="e.g., Ministry of Education" required />
                            <Input label="Contact Person" id="contact-person" />
                            <Input label="Phone Number" id="phone" type="tel" />
                            <Textarea label="Notes" id="notes" placeholder="e.g., Government regulatory body." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Save Organization
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewOrganizationPage;