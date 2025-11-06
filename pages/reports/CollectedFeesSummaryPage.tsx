import React from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '../../components/common/FormElements';
import DashboardCard from '../../components/DashboardCard';
import { DollarSign } from '../../components/icons/Icons';

const CollectedFeesSummaryPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Collected Fees Summary" subtitle="A summary of fees collected over a specified period." />
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Input type="date" id="start-date" label="" />
                        <span className="text-gray-500">to</span>
                        <Input type="date" id="end-date" label="" />
                    </div>
                    <Button>Generate Summary</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DashboardCard icon={DollarSign} title="Tuition Fees" value="$120,500" color="bg-blue-500" />
                    <DashboardCard icon={DollarSign} title="Bus Fees" value="$25,000" color="bg-green-500" />
                    <DashboardCard icon={DollarSign} title="Exam Fees" value="$5,250" color="bg-yellow-500" />
                </div>
            </CardBody>
        </Card>
    );
};

export default CollectedFeesSummaryPage;