import React from 'react';
import { Card, CardHeader, CardBody, Button } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const mockForms = [
    { name: 'Student Admission Form', description: 'For new student enrollment.' },
    { name: 'Staff Leave Request Form', description: 'For employees to request time off.' },
    { name: 'Library Membership Form', description: 'To register for library access.' },
];

const FormListPage: React.FC = () => {
    return (
        <Card>
            <CardHeader title="School Forms" subtitle="A list of downloadable forms for students and staff." />
            <CardBody>
                 <div className="flex justify-end mb-4">
                    <Button className="flex items-center">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        Upload New Form
                    </Button>
                </div>
                <div className="overflow-x-auto rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockForms.map((form) => (
                                <tr key={form.name}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{form.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{form.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Button variant="secondary">
                                            Download
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default FormListPage;