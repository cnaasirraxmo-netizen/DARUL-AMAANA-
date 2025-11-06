import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, Button, Input } from '../../components/common/FormElements';
import { Printer, School } from '../../components/icons/Icons';

const marks = [
    { subject: 'Mathematics', score: 85 },
    { subject: 'Science', score: 90 },
    { subject: 'English', score: 88 },
];

const MarksheetV5Page: React.FC = () => {
    const [showMarksheet, setShowMarksheet] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowMarksheet(true);
    };

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Generate Marksheet (V5)" subtitle="A compact, modern marksheet template." />
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Select label="Branch" id="branch"><option>Main Branch</option></Select>
                            <Input label="Student ID or Name" id="student-search" placeholder="Search..." required />
                            <Select label="Exam" id="exam"><option>Final Exam</option></Select>
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">Generate</Button>
                    </CardFooter>
                </form>
            </Card>

            {showMarksheet && (
                <Card className="mt-8">
                    <CardBody>
                        <div className="flex justify-end mb-4">
                            <Button variant="secondary" className="flex items-center" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </Button>
                        </div>
                        <div className="p-6 bg-slate-100 rounded-lg max-w-2xl mx-auto printable-area">
                            <header className="flex items-center justify-between pb-4 border-b-2 border-slate-300">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">REPORT CARD</h2>
                                    <p className="text-slate-500">Final Exam 2024-2025</p>
                                </div>
                                <div className="text-right">
                                    <School className="h-8 w-8 text-slate-500 mb-1 inline-block" />
                                    <p className="font-semibold">Mogadishu School</p>
                                </div>
                            </header>
                            
                            <section className="my-4">
                                <h3 className="font-bold text-lg">Student: Ahmed Ali</h3>
                                <p className="text-slate-600">Class: Grade 9A</p>
                            </section>

                            <section>
                                <div className="flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full">
                                                <thead className="bg-slate-200">
                                                    <tr>
                                                        <th scope="col" className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-3">Subject</th>
                                                        <th scope="col" className="px-3 py-2 text-center text-sm font-semibold text-slate-900">Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white">
                                                    {marks.map((mark) => (
                                                        <tr key={mark.subject}>
                                                            <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-3">{mark.subject}</td>
                                                            <td className="whitespace-nowrap px-3 py-3 text-sm text-center text-slate-500">{mark.score}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot className="bg-slate-200">
                                                    <tr>
                                                        <th scope="row" className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-3">Total</th>
                                                        <td className="px-3 py-2 text-center text-sm font-semibold text-slate-900">263</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <footer className="mt-6 text-center text-xs text-slate-500">
                                <p>This is an official document. Contact the school administration for any queries.</p>
                            </footer>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default MarksheetV5Page;
