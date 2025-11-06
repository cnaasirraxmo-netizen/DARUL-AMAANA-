import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Alert } from '../../components/common/FormElements';

const ThemeModePage: React.FC = () => {
    const [theme, setTheme] = useState('light');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = () => {
        setSuccessMessage(`Theme changed to ${theme} mode.`);
        // In a real app, you'd add/remove a 'dark' class to the <html> element
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <Card className="mt-4 max-w-lg mx-auto">
                <CardHeader title="Theme Mode" subtitle="Choose your preferred interface appearance." />
                <CardBody>
                    <fieldset className="space-y-4">
                        <legend className="sr-only">Theme mode</legend>
                        <div className="flex items-center">
                            <input id="light" name="theme-mode" type="radio" checked={theme === 'light'} onChange={() => setTheme('light')} className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300" />
                            <label htmlFor="light" className="ml-3 block text-sm font-medium text-gray-700">Light Mode (Default)</label>
                        </div>
                        <div className="flex items-center">
                            <input id="dark" name="theme-mode" type="radio" checked={theme === 'dark'} onChange={() => setTheme('dark')} className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300" />
                            <label htmlFor="dark" className="ml-3 block text-sm font-medium text-gray-700">Dark Mode</label>
                        </div>
                    </fieldset>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleSave}>Apply Theme</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ThemeModePage;
