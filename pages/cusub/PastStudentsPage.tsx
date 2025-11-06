import React, { useState, useEffect } from 'react';
// FIX: Import `Loader` from `../../components/icons/Icons` as it's not exported from `FormElements`.
import { Card, CardHeader, CardBody, Alert } from '../../components/common/FormElements';
import { Loader } from '../../components/icons/Icons';
import type { Student } from '../../data/mockData';

const API_BASE_URL = 'http://localhost:5000/api';

const PastStudentsPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // Add state for pagination later if needed

    useEffect(() => {
        const fetchPastStudents = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch(`${API_BASE_URL}/data/past-students`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error('Failed to fetch past students.');
                const data = await response.json();
                setStudents(data.students);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPastStudents();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <div className="p-8 text-center"><Loader className="h-8 w-8 animate-spin mx-auto text-sky-600" /></div>;
        }
        if (error) {
            return <Alert message={error} type="error" />;
        }
        if (students.length === 0) {
            return <div className="p-8 text-center text-gray-500">No past students found.</div>;
        }
        return (
             <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Class</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map(student => (
                            <tr key={student.studentId}>
                                <td className="px-6 py-4 text-sm text-gray-500">{student.studentId}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{`${student.firstName} ${student.lastName}`}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{student.classId?.name || 'N/A'}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                                        student.status === 'graduated' ? 'bg-purple-100 text-purple-800' :
                                        student.status === 'transferred' ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {student.status}
                                    </span>
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
            <CardHeader title="Past Students" subtitle="List of graduated, transferred, or deleted students." />
            <CardBody>
                {renderContent()}
            </CardBody>
        </Card>
    );
};

export default PastStudentsPage;