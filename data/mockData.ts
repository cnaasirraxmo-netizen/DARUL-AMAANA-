
export interface Student {
    _id: string;
    studentId: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    classId: {
        _id: string;
        name: string;
    };
    branchId: string;
    status: 'active' | 'suspended' | 'graduated' | 'deleted' | 'transferred';
    dob: string;
    gender: string;
    pob?: string;
    guardian: {
        name: string;
        phone: string;
    };
}

export interface Branch {
    id: string;
    name: string;
}

export interface Class {
    _id: string;
    name: string;
    branch: string;
}

// Mock data and functions have been removed to connect to a live backend.
