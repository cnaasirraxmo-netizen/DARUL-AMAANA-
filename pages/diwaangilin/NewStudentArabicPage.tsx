import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Alert } from '../../components/common/FormElements';
import { PlusCircle } from '../../components/icons/Icons';

const NewStudentArabicPage: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('تم تسجيل الطالب بنجاح!');
    };
    
    // Style for right-to-left text direction
    const rtlStyle: React.CSSProperties = {
        direction: 'rtl',
        textAlign: 'right',
    };

    return (
        <div>
            <Alert message={successMessage} onClose={() => setSuccessMessage('')} />
            <form onSubmit={handleSubmit}>
                <Card className="mt-4">
                    <CardHeader title="تسجيل طالب جديد (بالعربية)" subtitle="إدخال معلومات الطالب باللغة العربية." />
                    <CardBody style={rtlStyle}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <Input label="الاسم الكامل" id="full-name-ar" placeholder="مثال: أحمد علي" required />
                           <Input label="اسم الأم" id="mother-name-ar" required />
                           <Input label="رقم الهاتف" id="phone-ar" type="tel" />
                           <Input label="تاريخ الميلاد" id="dob-ar" type="date" />
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-start">
                        <Button type="submit" className="flex items-center">
                            <PlusCircle className="h-5 w-5 ml-2" />
                            حفظ الطالب
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default NewStudentArabicPage;