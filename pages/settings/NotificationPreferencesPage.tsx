import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert } from '../../components/common/FormElements';

const NotificationPreferencesPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Notification preferences saved.');
    };

    const NotificationToggle: React.FC<{ title: string, description: string }> = ({ title, description }) => (
        <div className="py-4 border-b">
            <h4 className="font-semibold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
            <div className="flex items-center space-x-6">
                <div className="flex items-center">
                    <input id={`${title}-email`} type="checkbox" className="h-4 w-4 text-sky-600 border-gray-300 rounded" />
                    <label htmlFor={`${title}-email`} className="ml-2 block text-sm text-gray-900">Email</label>
                </div>
                <div className="flex items-center">
                    <input id={`${title}-sms`} type="checkbox" className="h-4 w-4 text-sky-600 border-gray-300 rounded" />
                    <label htmlFor={`${title}-sms`} className="ml-2 block text-sm text-gray-900">SMS</label>
                </div>
                <div className="flex items-center">
                    <input id={`${title}-inapp`} type="checkbox" defaultChecked className="h-4 w-4 text-sky-600 border-gray-300 rounded" />
                    <label htmlFor={`${title}-inapp`} className="ml-2 block text-sm text-gray-900">In-App</label>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Notification Preferences" subtitle="Manage how and when you receive notifications." />
                    <CardBody>
                        <NotificationToggle 
                            title="Fee Payment Overdue"
                            description="Notify parents when a fee payment is past its due date."
                        />
                         <NotificationToggle 
                            title="Student Absent"
                            description="Notify parents when their child is marked absent."
                        />
                         <NotificationToggle 
                            title="New School Announcement"
                            description="Notify all parents and staff about a new general announcement."
                        />
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Preferences</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NotificationPreferencesPage;
