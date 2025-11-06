import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';

const UpdatePasswordPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [userFound, setUserFound] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if(user) {
            setUserFound(true);
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Password for user '${user}' has been updated.`);
        setUser('');
        setUserFound(false);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card className="mt-4 max-w-lg mx-auto">
                {!userFound ? (
                     <form onSubmit={handleSearch}>
                        <CardHeader title="Update User Password" />
                        <CardBody>
                           <Input label="Enter Username or Email" id="user-search" value={user} onChange={e => setUser(e.target.value)} required />
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Find User</Button>
                        </CardFooter>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <CardHeader title={`Resetting password for ${user}`} />
                        <CardBody>
                            <div className="space-y-4">
                                <Input label="New Password" id="new-password" type="password" required />
                                <Input label="Confirm New Password" id="confirm-password" type="password" required />
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-between">
                            <Button type="button" variant="secondary" onClick={() => setUserFound(false)}>Back</Button>
                            <Button type="submit">Update Password</Button>
                        </CardFooter>
                    </form>
                )}
            </Card>
        </div>
    );
};

export default UpdatePasswordPage;
