import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const permissions = {
    'Academics': ['Enter Exam Results', 'Manage Classes', 'Define Subjects'],
    'Student Management': ['View Student Profile', 'Edit Student Details', 'Register Discipline'],
};

const GrantMultiplePermissionsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Permissions have been applied to 3 selected users.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="Grant Multiple Permissions" subtitle="Apply a set of permissions to several users at once." />
                    <CardBody>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="user-multiselect" className="block text-sm font-medium text-gray-700 mb-1">Select Users</label>
                                <select id="user-multiselect" multiple className="block w-full h-40 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                                    <option>Ahmed Yusuf</option>
                                    <option>Fatima Ali</option>
                                    <option>Aisha Ibrahim</option>
                                    <option>Mohamed Abdi</option>
                                </select>
                                <p className="mt-1 text-xs text-gray-500">Hold Ctrl/Cmd to select multiple users.</p>
                            </div>

                            {Object.entries(permissions).map(([module, perms]) => (
                                <div key={module}>
                                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">{module}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                        <Button type="submit">Apply Permissions</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default GrantMultiplePermissionsPage;
