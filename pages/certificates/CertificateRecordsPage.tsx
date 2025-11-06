import React, { useState, FormEvent } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { Loader, Eye } from '../../components/icons/Icons';
import type { CertificateRecord } from '../../types';

const API_BASE_URL = 'http://localhost:5000/api';

const CertificateRecordsPage: React.FC = () => {
    const [studentId, setStudentId] = useState('');
    const [records, setRecords] = useState<CertificateRecord[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setRecords([]);
        setSearched(true);

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/certificates/student/${studentId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to fetch records.');
            setRecords(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const renderResults = () => {
        if (!searched) return null;
        if (isLoading) return <div className="p-8 text-center"><Loader className="h-8 w-8 animate-spin mx-auto text-sky-600" /></div>;
        if (error) return <Alert message={error} type="error" />;
        if (records.length === 0) return <div className="p-8 text-center text-gray-500">No certificate records found for this student.</div>;

        return (
            <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issued By</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {records.map(record => (
                            <tr key={record._id}>
                                <td className="px-6 py-4 text-sm text-gray-500">{new Date(record.issuedAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.templateCode}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{record.issuedBy?.username || 'N/A'}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href={record.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-600 hover:text-sky-800">
                                        <Eye className="h-5 w-5 mr-1"/> View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <Card>
            <form onSubmit={handleSearch}>
                <CardHeader title="Certificate Records" subtitle="Search for a student to view their certificate history." />
                <CardBody>
                    <div className="max-w-md">
                        <Input
                            label="Student ID"
                            id="student-id"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            placeholder="Enter student's ID (e.g., S0001)"
                            required
                        />
                    </div>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Searching...' : 'Search History'}
                    </Button>
                </CardFooter>
            </form>
            
            {searched && (
                 <CardBody className="border-t">
                    <h3 className="text-lg font-semibold mb-4">Results for {studentId}</h3>
                    {renderResults()}
                </CardBody>
            )}
        </Card>
    );
};

export default CertificateRecordsPage;