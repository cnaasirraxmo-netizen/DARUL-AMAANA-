import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';

const SchoolInformationPage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        setSuccessMessage('School information updated successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSave}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader title="School Information" />
                    <CardBody>
                        <div className="space-y-4">
                            <Input label="School Name" id="school-name" defaultValue="Mogadishu Primary & Secondary School" disabled={!isEditing} />
                            <Textarea label="Address" id="address" defaultValue="KM4, Airport Road, Mogadishu, Somalia" disabled={!isEditing} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Phone Number" id="phone" defaultValue="+252 61 123 4567" disabled={!isEditing} />
                                <Input label="Email Address" id="email" type="email" defaultValue="info@mogadishuschool.edu.so" disabled={!isEditing} />
                                <Input label="Website" id="website" defaultValue="www.mogadishuschool.edu.so" disabled={!isEditing} />
                                <Input label="Principal's Name" id="principal" defaultValue="Dr. Amina Yusuf" disabled={!isEditing} />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end space-x-2">
                        {isEditing ? (
                            <>
                                <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button type="submit">Save Changes</Button>
                            </>
                        ) : (
                            <Button type="button" onClick={() => setIsEditing(true)}>Edit Information</Button>
                        )}
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SchoolInformationPage;