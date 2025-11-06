
import React from 'react';

// --- Layout Components ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white rounded-2xl shadow-md ${className}`}>
        {children}
    </div>
);

export const CardHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
    <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl ${className}`}>
        {children}
    </div>
);

// --- Form Elements ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            id={id}
            {...props}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        />
    </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    children: React.ReactNode;
}
export const Select: React.FC<SelectProps> = ({ label, id, children, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
            id={id}
            {...props}
            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        >
            {children}
        </select>
    </div>
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}
export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea
            id={id}
            {...props}
            rows={4}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        />
    </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const baseClasses = "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = {
        primary: 'text-white bg-sky-600 hover:bg-sky-700 focus:ring-sky-500',
        secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400',
    };
    return (
        <button {...props} className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </button>
    );
};


interface AlertProps {
    message: string;
    type?: 'success' | 'error';
    onClose?: () => void;
}
export const Alert: React.FC<AlertProps> = ({ message, type = 'success', onClose }) => {
    const colors = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700',
    }
    if (!message) return null;

    return (
        <div className={`border px-4 py-3 rounded-md relative ${colors[type]}`} role="alert">
            <span className="block sm:inline">{message}</span>
            {onClose && (
                <button onClick={onClose} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className={`fill-current h-6 w-6 ${colors[type].split(' ')[2]}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </button>
            )}
        </div>
    );
};
