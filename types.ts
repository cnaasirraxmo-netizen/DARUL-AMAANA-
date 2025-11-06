import React from 'react';

export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuItem {
  name:string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  submenus?: SubMenuItem[];
}

export interface User {
  _id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'teacher' | 'staff' | 'parent' | 'student';
  status: 'active' | 'inactive';
}

export interface CertificateTemplate {
  _id: string;
  code: string;
  title: string;
  templateHtml: string;
  fields: string[];
}

export interface CertificateRecord {
    _id: string;
    student: {
        _id: string;
        studentId: string;
        firstName: string;
        lastName: string;
    };
    templateCode: string;
    data: Record<string, string>;
    issuedBy: {
        _id: string;
        username: string;
    };
    issuedAt: string;
    fileUrl: string;
}