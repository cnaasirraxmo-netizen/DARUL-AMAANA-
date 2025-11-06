import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Input, Button, Alert } from '../../components/common/FormElements';
import { Loader } from '../../components/icons/Icons';
import type { CertificateTemplate } from '../../types';

const API_BASE_URL = 'http://localhost:5000/api';

const GenerateCertificatePage: React.FC = () => {
    const [templates, setTemplates] = useState<CertificateTemplate[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<CertificateTemplate | null>(null);
    const [studentId, setStudentId] = useState('');
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');

    useEffect(() => {
        const fetchTemplates = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch(`${API_BASE_URL}/certificates/templates`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error('Failed to fetch certificate templates.');
                const data = await response.json();
                setTemplates(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const templateCode = e.target.value;
        const template = templates.find(t => t.code === templateCode) || null;
        setSelectedTemplate(template);
        setFormData({}); // Reset form data on template change
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTemplate) return;
        
        setIsGenerating(true);
        setError('');
        setSuccessMessage('');
        setGeneratedUrl('');

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/certificates/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    studentId,
                    templateCode: selectedTemplate.code,
                    data: formData
                })
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed to generate certificate.');
            
            setSuccessMessage(`Certificate generated successfully for student ${studentId}.`);
            setGeneratedUrl(result.fileUrl);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsGenerating(false);
        }
    };

    const getPreviewHtml = () => {
        if (!selectedTemplate) return '';
        let html = selectedTemplate.templateHtml;
        Object.entries(formData).forEach(([key, value]) => {
            html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
        });
        return html;
    };

    if (isLoading) {
        return <div className="flex items-center justify-center p-8"><Loader className="h-8 w-8 animate-spin text-sky-600" /><span className="ml-2">Loading templates...</span></div>;
    }

    return (
        <div>
            {successMessage && <Alert message={successMessage} onClose={() => setSuccessMessage('')} />}
            {generatedUrl && <div className="mb-4"><a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">View Generated Certificate (Mock URL)</a></div>}
            {error && <Alert message={error} type="error" onClose={() => setError('')} />}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader title="Generate Certificate" subtitle="Fill in the details to create a new certificate." />
                        <CardBody className="space-y-4">
                            <Input
                                label="Student ID"
                                id="student-id"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                placeholder="Enter student's ID (e.g., S0001)"
                                required
                            />
                            <Select label="Certificate Template" id="template" onChange={handleTemplateChange} required>
                                <option value="">Select a template...</option>
                                {templates.map(t => <option key={t.code} value={t.code}>{t.title}</option>)}
                            </Select>

                            {selectedTemplate && (
                                <div className="space-y-4 border-t pt-4">
                                    <h3 className="font-semibold text-gray-700">Template Fields</h3>
                                    {selectedTemplate.fields.map(field => (
                                        <Input
                                            key={field}
                                            label={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                            id={field}
                                            name={field}
                                            value={formData[field] || ''}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    ))}
                                </div>
                            )}
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit" disabled={!selectedTemplate || isGenerating}>
                                {isGenerating && <Loader className="animate-spin h-5 w-5 mr-3" />}
                                {isGenerating ? 'Generating...' : 'Generate Certificate'}
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader title="Live Preview" />
                        <CardBody>
                            <div className="w-full h-full min-h-[500px] bg-gray-100 p-4 rounded-md border overflow-auto">
                               {selectedTemplate ? (
                                    <div dangerouslySetInnerHTML={{ __html: getPreviewHtml() }} />
                               ) : (
                                   <div className="text-center text-gray-500 pt-16">Select a template to see a preview.</div>
                               )}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </form>
        </div>
    );
};

export default GenerateCertificatePage;