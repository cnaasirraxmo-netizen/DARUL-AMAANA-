import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const ChangeLanguagePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Language settings updated successfully. The interface will now reload.');
        // In a real app, you would save this setting and reload the page or update the i18n context.
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-lg mx-auto">
                    <CardHeader title="Change Language" subtitle="Select the display language for the application." />
                    <CardBody>
                        <Select label="Application Language" id="language-select" defaultValue="en">
                            <option value="en">English</option>
                            <option value="so">Soomaali</option>
                            <option value="ar">العربية</option>
                        </Select>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Changes</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ChangeLanguagePage;
