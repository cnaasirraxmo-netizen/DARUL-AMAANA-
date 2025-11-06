

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle, Loader } from '../../components/icons/Icons';
import type { Branch, Class } from '../../data/mockData';

const API_BASE_URL = 'http://localhost:5000/api';

const initialFormState = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    pob: '',
    guardianName: '',
    guardianPhone: '',
    branch: '',
    classId: '',
};

const NewStudentPage: React.FC = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [classes, setClasses] = useState<Class[]>([]);
    const [filteredClasses, setFilteredClasses] = useState<Class[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const apiFetch = async (endpoint: string) => {
        const token = localStorage.getItem('authToken');
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${endpoint}`);
        }
        return response.json();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [branchesData, classesData] = await Promise.all([
                    apiFetch('/classes/branches'),
                    apiFetch('/classes')
                ]);
                setBranches(branchesData);
                setClasses(classesData);
                if (branchesData.length > 0) {
                    setFormData(prev => ({ ...prev, branch: branchesData[0].id }));
                }
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (formData.branch) {
            setFilteredClasses(classes.filter(c => c.branch === formData.branch));
        } else {
            setFilteredClasses([]);
        }
        setFormData(prev => ({...prev, classId: ''}));
    }, [formData.branch, classes]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setError('');
        
        const { guardianName, guardianPhone, branch, ...studentData } = formData;
        const postData = {
            ...studentData,
            guardian: {
                name: guardianName,
                phone: guardianPhone
            }
        };

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(postData)
            });

            const newStudent = await response.json();
            if (!response.ok) {
                throw new Error(newStudent.message || 'Failed to create student.');
            }
            
            setSuccessMessage(`Student registered successfully! New Student ID: ${newStudent.studentId}`);
            setFormData(initialFormState); // Reset form
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {successMessage && <Alert message={successMessage} onClose={() => setSuccessMessage('')} />}
            {error && <Alert message={error} type="error" onClose={() => setError('')} />}
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="New Student Registration" subtitle="Complete the form to enroll a new student." />
                    <CardBody>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Student Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <Input label="First Name" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            <Input label="Last Name" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            <Input label="Date of Birth" id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                            <Select label="Gender" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                             <Input label="Place of Birth" id="pob" name="pob" value={formData.pob} onChange={handleChange} />
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-800 mb-4 border-t pt-6">Guardian Information</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <Input label="Guardian's Full Name" id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleChange} required />
                            <Input label="Guardian's Phone" id="guardianPhone" name="guardianPhone" type="tel" value={formData.guardianPhone} onChange={handleChange} required />
                        </div>

                        <h3 className="text-lg font-medium text-gray-800 mb-4 border-t pt-6">Academic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select label="Branch" id="branch" name="branch" value={formData.branch} onChange={handleChange} required>
                                <option value="">Select a branch</option>
                                {branches.map(branch => <option key={branch.id} value={branch.id}>{branch.name}</option>)}
                            </Select>
                            <Select label="Class to Enroll" id="classId" name="classId" value={formData.classId} onChange={handleChange} required disabled={!formData.branch}>
                                <option value="">Select a class</option>
                                {filteredClasses.map(cls => <option key={cls._id} value={cls._id}>{cls.name}</option>)}
                            </Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center" disabled={isLoading}>
                            {isLoading ? <Loader className="animate-spin h-5 w-5 mr-2" /> : <PlusCircle className="h-5 w-5 mr-2" />}
                            {isLoading ? 'Registering...' : 'Register Student'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewStudentPage;