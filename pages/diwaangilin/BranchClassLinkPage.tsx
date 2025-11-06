import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';

const BranchClassLinkPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Class "Grade 7A" has been successfully assigned to "Main Branch".');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-2xl mx-auto">
                    <CardHeader 
                        title="Assign Class to Branch" 
                        subtitle="Manage which classes are available at each school branch." 
                    />
                    <CardBody>
                        <div className="space-y-4">
                            <Select label="Select Branch" id="branch" required>
                                <option>Main Branch</option>
                                <option>West Branch</option>
                            </Select>
                            <Select label="Select Class to Assign" id="class" required>
                                <option>Grade 7A</option>
                                <option>Grade 7B</option>
                                <option>Grade 8A</option>
                                <option>Grade 9C</option>
                            </Select>
                             <Select label="Academic Year" id="academic-year" required>
                                <option>2024-2025</option>
                                <option>2025-2026</option>
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Save Assignment</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default BranchClassLinkPage;