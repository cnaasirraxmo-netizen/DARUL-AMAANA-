import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import DashboardCard from '../../components/DashboardCard';
import { Users, User, BarChart2 } from '../../components/icons/Icons';

const AttendanceSystemPage: React.FC = () => {
    return (
        <div>
             <Card>
                <CardHeader title="Attendance System" subtitle="Dashboard for monitoring daily attendance." />
                <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <DashboardCard 
                            icon={BarChart2}
                            title="Today's Attendance"
                            value="96.5%"
                            color="bg-green-500"
                        />
                        <DashboardCard 
                            icon={Users}
                            title="Total Absentees Today"
                            value="43"
                            color="bg-red-500"
                        />
                         <DashboardCard 
                            icon={User}
                            title="Staff Present"
                            value="145 / 150"
                            color="bg-sky-500"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Button>Take Daily Attendance</Button>
                            <Button variant="secondary">View Class Attendance Reports</Button>
                            <Button variant="secondary">View Staff Attendance</Button>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-800">Recent Alerts</h3>
                        <div className="mt-2 space-y-2">
                            <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-md text-sm text-yellow-800">
                                <strong>Warning:</strong> Ahmed Ali (S001) has been absent for 3 consecutive days.
                            </div>
                             <div className="p-3 bg-blue-100 border border-blue-300 rounded-md text-sm text-blue-800">
                                <strong>Info:</strong> Grade 8B had 100% attendance today.
                            </div>
                        </div>
                    </div>
                </CardBody>
             </Card>
        </div>
    );
};

export default AttendanceSystemPage;