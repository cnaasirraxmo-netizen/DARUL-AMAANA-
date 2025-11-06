
import React from 'react';
import { Card, CardHeader, CardBody, Input, Select, Button } from '../../components/common/FormElements';

const QMExamAppPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Q/M Exam Management" subtitle="A dedicated module for managing Q/M examinations." />
            <CardBody>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Exam Settings</h3>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                            <Select label="Default Exam Type" id="default-exam">
                                <option>Mid-term Q/M</option>
                                <option>Final Q/M</option>
                            </Select>
                            <Input label="Passing Percentage" id="passing-percent" type="number" defaultValue="70" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Button>Upload New Exam Questions</Button>
                            <Button>Assign Exam to All Classes</Button>
                            <Button variant="secondary">View Global Statistics</Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default QMExamAppPage;
