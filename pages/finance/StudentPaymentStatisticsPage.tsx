import React from 'react';
import { Card, CardHeader, CardBody, Select, Button, Input } from '../../components/common/FormElements';
import DashboardCard from '../../components/DashboardCard';
import { DollarSign, Users } from '../../components/icons/Icons';

const StudentPaymentStatisticsPage: React.FC = () => {
    return (
        <div>
             <Card>
                <CardHeader title="Student Payment Statistics" subtitle="An overview of fee collections and outstanding balances." />
                <CardBody>
                     <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Input type="date" id="start-date" label="" />
                            <span className="text-gray-500">to</span>
                            <Input type="date" id="end-date" label="" />
                        </div>
                        <Button>Filter</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <DashboardCard 
                            icon={DollarSign}
                            title="Total Collected"
                            value="$150,250.00"
                            color="bg-green-500"
                        />
                        <DashboardCard 
                            icon={DollarSign}
                            title="Total Outstanding"
                            value="$25,500.00"
                            color="bg-red-500"
                        />
                         <DashboardCard 
                            icon={Users}
                            title="Students with Balance"
                            value="120"
                            color="bg-yellow-500"
                        />
                    </div>
                </CardBody>
             </Card>
        </div>
    );
};

export default StudentPaymentStatisticsPage;
