import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import { PlusCircle, User, PenSquare } from '../../components/icons/Icons';

const ManageRolesPermissionsPage: React.FC = () => {
    // In a real app, these would link to the respective pages using a router.
    // For now, they are just buttons.
    const handleNavigation = (page: string) => {
        alert(`Navigating to ${page}... (Functionality to be linked with a router)`);
    };

    return (
        <Card>
            <CardHeader title="Manage Roles & Permissions" subtitle="A central hub for user access control." />
            <CardBody className="space-y-6">
                <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold flex items-center"><PlusCircle className="h-5 w-5 mr-2 text-sky-600" />Create New Role</h3>
                        <p className="text-sm text-gray-500">Define a new user role like 'Librarian' or 'Discipline Head'.</p>
                    </div>
                    <Button onClick={() => alert('Navigate to "Create New Role" page...')}>Create Role</Button>
                </div>

                <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold flex items-center"><User className="h-5 w-5 mr-2 text-sky-600" />Assign Roles to Users</h3>
                        <p className="text-sm text-gray-500">Change the role assigned to an existing user.</p>
                    </div>
                    <Button onClick={() => handleNavigation('Assign User Roles page')}>Assign Roles</Button>
                </div>

                <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold flex items-center"><PenSquare className="h-5 w-5 mr-2 text-sky-600" />Grant Specific Permissions</h3>
                        <p className="text-sm text-gray-500">Modify the specific permissions for a user, independent of their role.</p>
                    </div>
                    <Button onClick={() => handleNavigation('Grant User Permissions page')}>Manage Permissions</Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default ManageRolesPermissionsPage;
