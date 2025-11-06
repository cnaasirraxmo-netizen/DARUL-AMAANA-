import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert } from '../../components/common/FormElements';
import { User } from '../../components/icons/Icons';

const ChangeProfilePicturePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Profile picture updated successfully.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-lg mx-auto">
                    <CardHeader title="Change Profile Picture" />
                    <CardBody className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                            {preview ? (
                                <img src={preview} alt="Profile preview" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <User className="w-24 h-24 text-gray-400" />
                            )}
                        </div>
                        <input type="file" id="profile-picture-upload" className="hidden" onChange={handleFileChange} accept="image/*" />
                        <label htmlFor="profile-picture-upload" className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            Select Image
                        </label>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" disabled={!preview}>Save Changes</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ChangeProfilePicturePage;
