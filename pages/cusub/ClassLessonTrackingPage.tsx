import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Textarea, Button, Alert } from '../../components/common/FormElements';
import { Loader } from '../../components/icons/Icons';

const API_BASE_URL = 'http://localhost:5000/api';

const ClassLessonTrackingPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccessMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/data/class-lessons`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'Failed to save lesson log.');
            }
            
            setSuccessMessage('Lesson progress has been successfully logged.');
            form.reset();
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
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader 
                        title="Class Lesson Tracking" 
                        subtitle="Log daily progress to monitor syllabus coverage." 
                    />
                    <CardBody>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Select Branch" name="branch" id="branch" required>
                                    <option value="">Select Branch</option>
                                    <option value="Main Branch">Main Branch</option>
                                    <option value="West Branch">West Branch</option>
                                </Select>
                                <Select label="Select Class" name="class" id="class" required>
                                    <option value="">Select Class</option>
                                    <option value="669a9b9a5e5a9a086202026c">Grade 7A</option>
                                    <option value="669a9b9a5e5a9a086202026d">Grade 7B</option>
                                    <option value="669a9b9a5e5a9a086202026e">Grade 8A</option>
                                </Select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select label="Subject" name="subject" id="subject" required>
                                     <option value="">Select Subject</option>
                                    <option>Mathematics</option>
                                    <option>Science</option>
                                    <option>English</option>
                                    <option>History</option>
                                </Select>
                                <Input label="Date" name="lesson-date" id="lesson-date" type="date" required />
                            </div>
                             <Select label="Teacher" name="teacher" id="teacher" required>
                                <option value="">Select Teacher</option>
                                <option value="669a9b9a5e5a9a086202026a">Mr. Ahmed Yusuf</option>
                                <option value="669a9b9a5e5a9a086202026b">Ms. Fatima Ali</option>
                            </Select>
                            <Textarea 
                                label="Lesson Details / Topics Covered" 
                                name="lesson-details"
                                id="lesson-details"
                                placeholder="e.g., Chapter 5: Algebra - Introduction to variables. Exercises 5.1 and 5.2 completed."
                                required
                            />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" disabled={isLoading}>
                             {isLoading && <Loader className="animate-spin h-5 w-5 mr-3" />}
                            {isLoading ? 'Saving...' : 'Save Log'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ClassLessonTrackingPage;