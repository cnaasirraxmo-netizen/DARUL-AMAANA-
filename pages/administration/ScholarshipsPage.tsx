import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Select } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const ScholarshipsPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('New scholarship "Merit Scholarship (10%)" has been created.');
    };
    
    const handleAssignSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('Scholarship successfully assigned to student S001.');
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <form onSubmit={handleCreateSubmit}>
                    <Card>
                        <CardHeader title="Create Scholarship Type" />
                        <CardBody>
                            <div className="space-y-4">
                                <Input label="Scholarship Name" id="scholarship-name" placeholder="e.g., Merit Scholarship" required />
                                <Input label="Discount Percentage" id="discount" type="number" placeholder="e.g., 10 for 10%" required />
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit" className="flex items-center">
                                <PlusCircle className="h-5 w-5 mr-2" />
                                Create Type
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
                
                <form onSubmit={handleAssignSubmit}>
                    <Card>
                        <CardHeader title="Assign Scholarship to Student" />
                        <CardBody>
                             <div className="space-y-4">
                                <Input label="Search Student by ID or Name" id="student-search" placeholder="Enter student's ID..." required />
                                <Select label="Select Scholarship" id="scholarship-select" required>
                                    <option>Merit Scholarship (10%)</option>
                                    <option>Orphan Support (100%)</option>
                                    <option>Staff Child Discount (50%)</option>
                                </Select>
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Assign Scholarship</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    );
};

export default ScholarshipsPage;