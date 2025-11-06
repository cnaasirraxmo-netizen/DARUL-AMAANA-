import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Alert } from '../../components/common/FormElements';
import { Loader } from '../../components/icons/Icons';

const API_BASE_URL = 'http://localhost:5000/api';

interface ImportResult {
    successCount: number;
    failedCount: number;
    errors: string[];
}

const ImportPreviousDataPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [dataType, setDataType] = useState('students');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ImportResult | null>(null);
    const [error, setError] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setResult(null);
            setError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        setIsLoading(true);
        setResult(null);
        setError('');

        const formData = new FormData();
        formData.append('importFile', file);
        formData.append('dataType', dataType);

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/data/import`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Import failed.');
            }
            setResult(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {error && <Alert type="error" message={error} onClose={() => setError('')} />}
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader title="Import Data" subtitle="Upload CSV files to bulk-create records." />
                    <CardBody className="space-y-6">
                        <Select label="Type of Data to Import" id="data-type" value={dataType} onChange={(e) => setDataType(e.target.value)}>
                            <option value="students">Students</option>
                        </Select>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Upload CSV File</label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                                accept=".csv"
                            />
                            {file && <p className="mt-2 text-sm text-gray-600">Selected: {file.name}</p>}
                            <p className="text-xs text-gray-500 mt-1">
                                Required columns for Students: `first_name`, `last_name`, `date_of_birth`, `gender`, `guardian_name`, `guardian_phone`.
                            </p>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" disabled={isLoading || !file}>
                            {isLoading && <Loader className="animate-spin h-5 w-5 mr-3" />}
                            {isLoading ? 'Importing...' : 'Start Import'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            {result && (
                <Card className="mt-8">
                    <CardHeader title="Import Results" />
                    <CardBody>
                        <div className={`p-4 ${result.failedCount === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} rounded-md`}>
                            <p className="font-bold">Import process completed!</p>
                            <p>{result.successCount} records were created successfully.</p>
                        </div>
                        {result.failedCount > 0 && (
                            <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
                                <p className="font-bold">{result.failedCount} records failed to import.</p>
                                <h4 className="font-semibold mt-2">Errors:</h4>
                                <ul className="list-disc list-inside text-sm max-h-40 overflow-y-auto">
                                    {result.errors.map((err, i) => <li key={i}>{err}</li>)}
                                </ul>
                            </div>
                        )}
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default ImportPreviousDataPage;
