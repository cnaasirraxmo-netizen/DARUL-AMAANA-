
import React, { useState, FormEvent } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { Eye, Edit, Printer, Slash, Loader } from '../../components/icons/Icons';
import type { Student } from '../../data/mockData';

const API_BASE_URL = 'http://localhost:5000/api';


const SearchStudentPage: React.FC = () => {
    const [results, setResults] = useState<Student[]>([]);
    const [searched, setSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSearched(true);
        setError(null);
        setResults([]);

        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams();
        
        formData.forEach((value, key) => {
            if (value && value !== 'Any') {
                const keyMap: {[key: string]: string} = {
                    'name': 'q',
                    'student-id': 'studentId'
                };
                const paramKey = keyMap[key] || key;
                params.append(paramKey, value.toString());
            }
        });

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/students?${params.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch students.');
            }

            const data = await response.json();
            setResults(data.students);
        } catch (err: any) {
            setError(err.message || 'An error occurred while searching. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderResults = () => {
        if (!searched) return null;

        if (isLoading) {
            return (
                <div className="flex items-center justify-center p-8">
                    <Loader className="h-8 w-8 animate-spin text-sky-600" />
                    <span className="ml-2 text-gray-600">Searching...</span>
                </div>
            );
        }

        if (error) {
            return <Alert message={error} type="error" />;
        }

        if (results.length === 0) {
            return <div className="p-8 text-center text-gray-500">No students found matching your criteria.</div>;
        }

        return (
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {results.map(student => (
                            <tr key={student.studentId}>
                                <td className="px-6 py-4 text-sm text-gray-500">{student.studentId}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{`${student.firstName} ${student.lastName}`}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{student.classId?.name || 'N/A'}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                                        student.status === 'active' ? 'bg-green-100 text-green-800' :
                                        student.status === 'suspended' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-sm space-x-2">
                                    <button className="text-gray-500 hover:text-sky-600"><Eye className="h-5 w-5"/></button>
                                    <button className="text-gray-500 hover:text-yellow-600"><Edit className="h-5 w-5"/></button>
                                    <button className="text-gray-500 hover:text-blue-600"><Printer className="h-5 w-5"/></button>
                                    <button className="text-gray-500 hover:text-red-600"><Slash className="h-5 w-5"/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader title="Search Student" subtitle="Quickly find and access any student’s detailed profile." />
                <CardBody>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Input name="name" label="Name" id="name" placeholder="Student's name" />
                        <Input name="guardianPhone" label="Guardian Phone" id="guardian-phone" placeholder="e.g., 61xxxxxxx" />
                        <Input name="pob" label="Place of Birth" id="birth-place" placeholder="e.g., Mogadishu" />
                        <Select name="gender" label="Gender" id="gender">
                            <option>Any</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                        <Input name="guardianName" label="Student Guardian" id="guardian" />
                        <Input name="student-id" label="Student ID" id="student-id" placeholder="e.g., S0001" />
                        <Select name="class" label="Class" id="class">
                            <option value="">Any</option>
                            {/* This should be populated from an API call in a real app */}
                        </Select>
                        <Select name="status" label="Status" id="status">
                            <option>Any</option>
                            <option value="active">Active</option>
                            <option value="suspended">Suspended</option>
                            <option value="graduated">Graduated</option>
                        </Select>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                         {isLoading && <Loader className="animate-spin h-5 w-5 mr-3" />}
                        {isLoading ? 'Searching...' : 'Search'}
                    </Button>
                </CardFooter>
            </Card>

            {searched && (
                 <Card className="mt-8">
                    <CardHeader title="Search Results" />
                    {renderResults()}
                </Card>
            )}
        </form>
    );
};

export default SearchStudentPage;