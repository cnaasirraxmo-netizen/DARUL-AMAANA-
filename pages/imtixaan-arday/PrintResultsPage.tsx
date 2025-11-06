
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button } from '../../components/common/FormElements';
import { Printer } from '../../components/icons/Icons';

const mockResults = [
    { id: 'S001', name: 'Ahmed Ali', total: 263, status: 'Passed' },
    { id: 'S002', name: 'Fatima Omar', total: 278, status: 'Passed' },
    { id: 'S003', name: 'Yusuf Hassan', total: 240, status: 'Passed' },
];

const PrintResultsPage: React.FC = () => {
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };

    return (
        <div>
            <div className="no-print">
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Print Class Results" subtitle="Generate a printable summary of results for an entire class." />
                        <CardBody>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                                <Select label="Class" id="class"><option>Grade 9A</option></Select>
                                <Select label="Exam" id="exam"><option>Mid-term Exam</option></Select>
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit">Generate List</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>

            {showResults && (
                <div className="printable-area">
                    <Card className="mt-8">
                        <CardHeader title="Results Summary for Grade 9A" />
                        <CardBody>
                            <div className="flex justify-end mb-4 no-print">
                                <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                    <Printer className="h-4 w-4 mr-2" /> Print
                                </Button>
                            </div>
                            <div className="overflow-x-auto rounded-md border">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Marks</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {mockResults.map(s => (
                                            <tr key={s.id}>
                                                <td className="px-6 py-4 text-sm text-gray-500">{s.id}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-gray-800">{s.total}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${s.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                        {s.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default PrintResultsPage;