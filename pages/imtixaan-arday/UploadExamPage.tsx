import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const UploadExamPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setStatusMessage('Please select a file to upload.');
            setIsError(true);
            return;
        }
        setIsError(false);
        setStatusMessage(`Uploading ${file.name}...`);
        
        setTimeout(() => {
            setStatusMessage('Upload successful! 35 results have been imported for Grade 9A - Science.');
            setFile(null);
        }, 2000);
    };

    return (
        <div>
            {statusMessage && <Alert message={statusMessage} type={isError ? 'error' : 'success'} onClose={() => setStatusMessage('')} />}
            <form onSubmit={handleSubmit}>
                <Card className="mt-4 max-w-3xl mx-auto">
                    <CardHeader title="Upload Exam Results" subtitle="Import marks from a CSV or Excel file."/>
                    <CardBody>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                               <Select label="Branch" id="branch" className="md:col-span-1"><option>Main Branch</option></Select>
                               <Select label="Class" id="class" className="md:col-span-1"><option>Grade 9A</option></Select>
                               <Select label="Exam" id="exam" className="md:col-span-1"><option>Mid-term Exam</option></Select>
                               <Select label="Subject" id="subject" className="md:col-span-1"><option>Science</option></Select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload File</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                         <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-sky-600 hover:text-sky-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".csv, .xlsx, .xls" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">The file should contain 'student_id' and 'mark' columns.</p>
                                    </div>
                                </div>
                                {file && <p className="mt-2 text-sm text-gray-500">Selected: {file.name}</p>}
                                <a href="#" className="text-sm text-sky-600 hover:underline mt-2 inline-block">Download template file</a>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            Start Upload
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default UploadExamPage;
