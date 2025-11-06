import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';

const SalaryRaisePage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [staffId, setStaffId] = useState('');
    const [staffInfo, setStaffInfo] = useState<{ name: string; currentSalary: number } | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (staffId) {
            setStaffInfo({ name: 'Ms. Fatima Ali', currentSalary: 1100 });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Salary for Ms. Fatima Ali has been updated to $1200, effective from the specified date.`);
        setStaffId('');
        setStaffInfo(null);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            
            <Card className="mt-4 max-w-2xl mx-auto">
                <form onSubmit={handleSearch}>
                    <CardHeader title="Salary Raise" subtitle="Increase the salary for a staff member." />
                    <CardBody>
                        <div className="flex items-end gap-4">
                            <div className="flex-grow">
                                <Input 
                                    label="Staff ID or Name" 
                                    id="staff-search" 
                                    value={staffId}
                                    onChange={e => setStaffId(e.target.value)}
                                    placeholder="Search..." 
                                    required
                                />
                            </div>
                            <Button type="submit">Search</Button>
                        </div>
                    </CardBody>
                </form>

                {staffInfo && (
                    <form onSubmit={handleSubmit}>
                        <CardBody className="border-t">
                            <h3 className="text-lg font-semibold text-gray-800">{staffInfo.name}</h3>
                            <p className="mb-4">Current Salary: <span className="font-bold">${staffInfo.currentSalary.toFixed(2)}</span></p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="New Salary" id="new-salary" type="number" placeholder="Enter new total salary" required />
                                <Input label="Effective Date" id="effective-date" type="date" required />
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Confirm Raise</Button>
                        </CardFooter>
                    </form>
                )}
            </Card>
        </div>
    );
};

export default SalaryRaisePage;