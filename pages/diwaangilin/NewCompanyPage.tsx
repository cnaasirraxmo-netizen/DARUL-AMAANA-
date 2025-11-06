import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewCompanyPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Company "Educational Supplies Inc." has been registered.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader title="Register New Company" subtitle="Add a new vendor, partner, or other company." />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="Company Name" id="company-name" placeholder="e.g., Educational Supplies Inc." required />
                            <Input label="Contact Person" id="contact-person" />
                            <Input label="Phone Number" id="phone" type="tel" />
                            <Input label="Email Address" id="email" type="email" />
                            <Textarea label="Notes" id="notes" placeholder="e.g., Primary supplier for textbooks." />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                           Save Company
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewCompanyPage;