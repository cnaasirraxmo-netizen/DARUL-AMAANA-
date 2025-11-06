import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const permissions = {
    'Accounting': ['View Reports', 'Create Invoices', 'Process Payments', 'Manage Accounts'],
    'HRM': ['Add New Staff', 'Manage Salaries', 'Track Attendance', 'View Staff Reports'],
    'Academics': ['Enter Exam Results', 'Manage Classes', 'Define Subjects', 'Promote Students'],
};

const GrantUserPermissionsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [userSelected, setUserSelected] = useState(false);
    
    const handleLoad = (e: React.FormEvent) => {
        e.preventDefault();
        setUserSelected(true);
    };

    const handleSave = () => {
        setSuccessMessage('Permissions for Ahmed Yusuf updated successfully.');
        setUserSelected(false);
    }

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card>
                <form onSubmit={handleLoad}>
                    <CardHeader title="Grant User Permissions" subtitle="Assign specific permissions to a user." />
                    <CardBody>
                        <div className="max-w-md">
                           <Select label="Select User" id="user-select" required>
                                <option>Ahmed Yusuf (Teacher)</option>
                                <option>Omar Hassan (Accountant)</option>
                           </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Load Permissions</Button>
                    </CardFooter>
                </form>
            </Card>

            {userSelected && (
                 <Card className="mt-8">
                    <CardHeader title="Editing permissions for Ahmed Yusuf" />
                    <CardBody>
                        <div className="space-y-6">
                            {Object.entries(permissions).map(([module, perms]) => (
                                <div key={module}>
                                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">{module}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {perms.map(perm => (
                                            <div key={perm} className="flex items-center">
                                                <input id={perm} name={perm} type="checkbox" className="h-4 w-4 text-sky-600 border-gray-300 rounded" />
                                                <label htmlFor={perm} className="ml-2 block text-sm text-gray-900">{perm}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                     <CardFooter className="flex justify-end">
                        <Button onClick={handleSave}>Save Permissions</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default GrantUserPermissionsPage;
