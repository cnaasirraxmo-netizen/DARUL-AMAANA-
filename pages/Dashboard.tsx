import React, { useState, useEffect } from 'react';
import DashboardCard from '../components/DashboardCard';
import { Users, Briefcase, BarChart2 } from '../components/icons/Icons';
import { Button } from '../components/common/FormElements';
import { apiRequest } from '../api';

const API_BASE_URL = 'http://localhost:5000/api';

interface DashboardStats {
    studentsCount: number;
    staffCount: number;
    totalIncome: number;
    attendanceSummary: {
        present: number;
        absent: number;
        percent: number;
    };
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch(`${API_BASE_URL}/dashboard/summary`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    // Silently fail if the local backend isn't running
                    console.warn('Failed to fetch dashboard data from local backend.');
                    setStats({ studentsCount: 0, staffCount: 0, totalIncome: 0, attendanceSummary: { present: 0, absent: 0, percent: 0 }});
                    return;
                }
                const data = await response.json();
                setStats(data);
            } catch (err: any) {
                 console.warn('Error fetching dashboard data:', err.message);
                 setStats({ studentsCount: 0, staffCount: 0, totalIncome: 0, attendanceSummary: { present: 0, absent: 0, percent: 0 }});
            }
        };

        fetchStats();
    }, []);
    
    const testConnection = async () => {
        try {
            console.log("Testing Back4App connection...");
            const res = await apiRequest("classes/Students", "GET");
            console.log("Back4App Connected:", res);
            alert('Connection successful! Check the console for data.');
        } catch (error) {
            console.error("Back4App Connection Failed:", error);
            alert('Connection failed. Check the console for errors.');
        }
    };


    const statsCards = stats ? [
        { title: 'All Students', value: stats.studentsCount.toLocaleString(), icon: Users, color: 'bg-green-500' },
        { title: 'All Staff', value: stats.staffCount.toLocaleString(), icon: Briefcase, color: 'bg-yellow-500' },
        { title: 'Attendance Today', value: `${stats.attendanceSummary.percent}%`, icon: BarChart2, color: 'bg-blue-500' },
    ] : [];

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!stats) {
        return <div>Loading dashboard...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                    <DashboardCard
                        key={index}
                        icon={stat.icon}
                        title={stat.title}
                        value={stat.value}
                        color={stat.color}
                    />
                ))}
            </div>
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome back, Admin!</h2>
                <p className="text-gray-600">Here's a quick overview of your school's current status. You can manage students, staff, finances, and more using the navigation on the left.</p>
            </div>
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Backend Connection Test</h2>
                <p className="text-gray-600 mb-4">Click the button below to test the connection to the Back4App backend. The results will be logged to the browser's developer console.</p>
                <Button onClick={testConnection}>Test Back4App Connection</Button>
            </div>
        </div>
    );
};

export default Dashboard;