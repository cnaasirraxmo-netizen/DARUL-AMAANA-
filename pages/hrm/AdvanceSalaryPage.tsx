import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert, Textarea } from '../../components/common/FormElements';

const AdvanceSalaryPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [staffId, setStaffId] = useState('');
    const [staffInfo, setStaffInfo] = useState<{ name: string; department: string } | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (staffId) {
            setStaffInfo({ name: 'Mr. Ahmed Yusuf', department: 'Academics' });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(`Salary advance of $200.00 recorded for Mr. Ahmed Yusuf. This will be deducted from next month's payroll.`);
        setStaffId('');
        setStaffInfo(null);
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            
            <Card className="mt-4 max-w-2xl mx-auto">
                <form onSubmit={handleSearch}>
                    <CardHeader title="Advance Salary" subtitle="Provide a salary advance to a staff member." />
                    <CardBody>
                        <div className="flex items-end gap-4">
                            <div className="flex-grow">
                                <Input 
                                    label="Staff ID or Name" 
                                    id="staff-search" 
                                    value={staffId}
                                    onChange={e => setStaffId(e.target.value)}
                                    placeholder="Search for staff member..." 
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
                            <h3 className="text-lg font-semibold text-gray-800">Advance for {staffInfo.name} ({staffInfo.department})</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <Input label="Advance Amount" id="amount" type="number" placeholder="0.00" required />
                                <Input label="Date" id="date" type="date" required />
                            </div>
                             <div className="mt-4">
                                <Textarea label="Reason for Advance" id="reason" required />
                             </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Submit Advance</Button>
                        </CardFooter>
                    </form>
                )}
            </Card>
        </div>
    );
};

export default AdvanceSalaryPage;