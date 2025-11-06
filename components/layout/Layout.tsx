import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../../pages/Dashboard';
import PlaceholderPage from '../../pages/PlaceholderPage';

// Import Ardayda pages
import StudentTransferPage from '../../pages/ardayda/StudentTransferPage';
import TransferOnlyPage from '../../pages/ardayda/TransferOnlyPage';
import RegisterDisciplinePage from '../../pages/ardayda/RegisterDisciplinePage';
import SuspendStudentPage from '../../pages/ardayda/SuspendStudentPage';
import BulkTransferPage from '../../pages/ardayda/BulkTransferPage';
import SearchStudentPage from '../../pages/ardayda/SearchStudentPage';
import RestoreStudentPage from '../../pages/ardayda/RestoreStudentPage';

// Import Accounting pages
import NewAccountPage from '../../pages/accounting/NewAccountPage';
import AccountToAccountTransferPage from '../../pages/accounting/AccountToAccountTransferPage';
import BalanceSheetPage from '../../pages/accounting/BalanceSheetPage';
import CashboxStatementPage from '../../pages/accounting/CashboxStatementPage';
import ChartOfAccountsPage from '../../pages/accounting/ChartOfAccountsPage';
import IncomeStatementPage from '../../pages/accounting/IncomeStatementPage';
import CashboxListPage from '../../pages/accounting/CashboxListPage';
import TransferredAccountsReportPage from '../../pages/accounting/TransferredAccountsReportPage';
import TrialBalancePage from '../../pages/accounting/TrialBalancePage';

// Import Certificate pages
import GenerateCertificatePage from '../../pages/certificates/GenerateCertificatePage';
import CertificateRecordsPage from '../../pages/certificates/CertificateRecordsPage';

// Import Cusub pages
import ImportPreviousDataPage from '../../pages/cusub/ImportPreviousDataPage';
import FailedStudentsListPage from '../../pages/cusub/FailedStudentsListPage';
import PastStudentsPage from '../../pages/cusub/PastStudentsPage';
import ClassLessonTrackingPage from '../../pages/cusub/ClassLessonTrackingPage';
import TahfidGraduationListPage from '../../pages/cusub/TahfidGraduationListPage';
import LessonTrackingListPage from '../../pages/cusub/LessonTrackingListPage';
import QMExamAppPage from '../../pages/cusub/QMExamAppPage';
import QMExamAppByClassPage from '../../pages/cusub/QMExamAppByClassPage';
import TahfidGraduationStudentPage from '../../pages/cusub/TahfidGraduationStudentPage';

// Import Diwaangilin pages
import NewStudentPage from '../../pages/diwaangilin/NewStudentPage';
import NewStudentArabicPage from '../../pages/diwaangilin/NewStudentArabicPage';
import NewStudentV2Page from '../../pages/diwaangilin/NewStudentV2Page';
import StudentParentRegistrationPage from '../../pages/diwaangilin/StudentParentRegistrationPage';
import RegisterItemDataPage from '../../pages/diwaangilin/RegisterItemDataPage';
import NewClassPage from '../../pages/diwaangilin/NewClassPage';
import NewOrganizationPage from '../../pages/diwaangilin/NewOrganizationPage';
import NewLevelPage from '../../pages/diwaangilin/NewLevelPage';
import StaffLevelPage from '../../pages/diwaangilin/StaffLevelPage';
import NewPositionPage from '../../pages/diwaangilin/NewPositionPage';
import NewSubjectPage from '../../pages/diwaangilin/NewSubjectPage';
import NewDisciplineTypePage from '../../pages/diwaangilin/NewDisciplineTypePage';
import NewExpenseTypePage from '../../pages/diwaangilin/NewExpenseTypePage';
import NewAbsenceTypePage from '../../pages/diwaangilin/NewAbsenceTypePage';
import NewStudentDepartureTypePage from '../../pages/diwaangilin/NewStudentDepartureTypePage';
import NewYearPage from '../../pages/diwaangilin/NewYearPage';
import NewShiftPage from '../../pages/diwaangilin/NewShiftPage';
import NewCompanyPage from '../../pages/diwaangilin/NewCompanyPage';
import NewParentPage from '../../pages/diwaangilin/NewParentPage';
import NewBranchPage from '../../pages/diwaangilin/NewBranchPage';
import BranchClassLinkPage from '../../pages/diwaangilin/BranchClassLinkPage';
import NewPeriodPage from '../../pages/diwaangilin/NewPeriodPage';

// Import Imtixaan Arday pages
import StudentMarksheetPage from '../../pages/imtixaan-arday/StudentMarksheetPage';
import BackupExamDataPage from '../../pages/imtixaan-arday/BackupExamDataPage';
import ChangeResultsPage from '../../pages/imtixaan-arday/ChangeResultsPage';
import ChangeStudentResultPage from '../../pages/imtixaan-arday/ChangeStudentResultPage';
import IdCardPage from '../../pages/imtixaan-arday/IdCardPage';
import TransferExamPage from '../../pages/imtixaan-arday/TransferExamPage';
import TransferSubjectResultsPage from '../../pages/imtixaan-arday/TransferSubjectResultsPage';
import ExamReportPage from '../../pages/imtixaan-arday/ExamReportPage';
import UserGradingListPage from '../../pages/imtixaan-arday/UserGradingListPage';
import LowestPerformingSubjectsPage from '../../pages/imtixaan-arday/LowestPerformingSubjectsPage';
import HighestPerformingSubjectsPage from '../../pages/imtixaan-arday/HighestPerformingSubjectsPage';
import MarksheetV2Page from '../../pages/imtixaan-arday/MarksheetV2Page';
import MarksheetV5Page from '../../pages/imtixaan-arday/MarksheetV5Page';
import PrintResultsPage from '../../pages/imtixaan-arday/PrintResultsPage';
import UploadExamPage from '../../pages/imtixaan-arday/UploadExamPage';
import CorrectClassResultsPage from '../../pages/imtixaan-arday/CorrectClassResultsPage';
import EnterResultsPage from '../../pages/imtixaan-arday/EnterResultsPage';
import EnterResultsV2Page from '../../pages/imtixaan-arday/EnterResultsV2Page';
import NewExamTypePage from '../../pages/imtixaan-arday/NewExamTypePage';
import DeleteClassResultsPage from '../../pages/imtixaan-arday/DeleteClassResultsPage';

// Import Class Timetable pages
import NewTimetablePage from '../../pages/class-timetable/NewTimetablePage';
import PrepareSubjectsPage from '../../pages/class-timetable/PrepareSubjectsPage';
import TeacherWorkDaysPage from '../../pages/class-timetable/TeacherWorkDaysPage';
import CreateTimetablePage from '../../pages/class-timetable/CreateTimetablePage';
import PrintTimetablePage from '../../pages/class-timetable/PrintTimetablePage';
import CopyClassTimetablePage from '../../pages/class-timetable/CopyClassTimetablePage';

// Import Finance pages
import FinanceNewAccountPage from '../../pages/finance/NewAccountPage';
import StudentBillingMonthlyPage from '../../pages/finance/StudentBillingMonthlyPage';
import BusBillingMonthlyPage from '../../pages/finance/BusBillingMonthlyPage';
import ClassBillingPage from '../../pages/finance/ClassBillingPage';
import JournalEntryPage from '../../pages/finance/JournalEntryPage';
import CancelBillingPage from '../../pages/finance/CancelBillingPage';
import MakePaymentPage from '../../pages/finance/MakePaymentPage';
import CollectCashPage from '../../pages/finance/CollectCashPage';
import PaymentTypePage from '../../pages/finance/PaymentTypePage';
import StudentReceiptsPage from '../../pages/finance/StudentReceiptsPage';
import BillingReceiptsPage from '../../pages/finance/BillingReceiptsPage';
import StudentPaymentStatisticsPage from '../../pages/finance/StudentPaymentStatisticsPage';
import FinanceTrialBalancePage from '../../pages/finance/TrialBalancePage';

// Import Administration pages
import TeacherPolicyPage from '../../pages/administration/TeacherPolicyPage';
import FormListPage from '../../pages/administration/FormListPage';
import TeacherPolicyListPage from '../../pages/administration/TeacherPolicyListPage';
import GraduationManagementPage from '../../pages/administration/GraduationManagementPage';
import ScholarshipsPage from '../../pages/administration/ScholarshipsPage';
import AttendanceSystemPage from '../../pages/administration/AttendanceSystemPage';
import SchoolInformationPage from '../../pages/administration/SchoolInformationPage';
import CancelledRecordsPage from '../../pages/administration/CancelledRecordsPage';

// Import User Management pages
import ChangePasswordPage from '../../pages/user-management/ChangePasswordPage';
import ChangeProfilePicturePage from '../../pages/user-management/ChangeProfilePicturePage';
import AddNewUserPage from '../../pages/user-management/AddNewUserPage';
import UpdatePasswordPage from '../../pages/user-management/UpdatePasswordPage';
import UserListPage from '../../pages/user-management/UserListPage';
import UserUsageLimitsPage from '../../pages/user-management/UserUsageLimitsPage';
import GrantUserPermissionsPage from '../../pages/user-management/GrantUserPermissionsPage';
import GrantMultiplePermissionsPage from '../../pages/user-management/GrantMultiplePermissionsPage';
import GrantCustomPermissionsPage from '../../pages/user-management/GrantCustomPermissionsPage';
import AssignUserRolesPage from '../../pages/user-management/AssignUserRolesPage';

// Import HRM pages
import SalaryRaisePage from '../../pages/hrm/SalaryRaisePage';
import PaySalaryPage from '../../pages/hrm/PaySalaryPage';
import MonthlySalaryAdjustmentPage from '../../pages/hrm/MonthlySalaryAdjustmentPage';
import AdvanceSalaryPage from '../../pages/hrm/AdvanceSalaryPage';
import AddNewStaffPage from '../../pages/hrm/AddNewStaffPage';
import StaffAttendancePage from '../../pages/hrm/StaffAttendancePage';
import StaffReportsPage from '../../pages/hrm/StaffReportsPage';

// Import Reports pages
import PaymentCollectionSummaryPage from '../../pages/reports/PaymentCollectionSummaryPage';
import PurchaseRecordsPage from '../../pages/reports/PurchaseRecordsPage';
import UnpaidFeesNotificationsPage from '../../pages/reports/UnpaidFeesNotificationsPage';
import ReportsFailedStudentListPage from '../../pages/reports/FailedStudentListPage';
import NotificationsMessagesPage from '../../pages/reports/NotificationsMessagesPage';
import StaffMessagesPage from '../../pages/reports/StaffMessagesPage';
import FixedAssetsPage from '../../pages/reports/FixedAssetsPage';
import UnpaidStudentFeesPage from '../../pages/reports/UnpaidStudentFeesPage';
import StudentPaymentRecordsPage from '../../pages/reports/StudentPaymentRecordsPage';
import CollectedFeesSummaryPage from '../../pages/reports/CollectedFeesSummaryPage';
import ReportsStudentListPage from '../../pages/reports/StudentListPage';
import DisciplineReportsPage from '../../pages/reports/DisciplineReportsPage';
import OrphanStudentsPage from '../../pages/reports/OrphanStudentsPage';
import AbsentStudentsPage from '../../pages/reports/AbsentStudentsPage';
import ReportsAdvanceSalariesPage from '../../pages/reports/AdvanceSalariesPage';
import EmployeeListPage from '../../pages/reports/EmployeeListPage';
import ExamCorrectionListPage from '../../pages/reports/ExamCorrectionListPage';
import ExamTypesListPage from '../../pages/reports/ExamTypesListPage';
import GradeLevelsPage from '../../pages/reports/GradeLevelsPage';
import AttendanceTypesPage from '../../pages/reports/AttendanceTypesPage';
import BehaviorTypesPage from '../../pages/reports/BehaviorTypesPage';
import DiscountsFreeFeesListPage from '../../pages/reports/DiscountsFreeFeesListPage';
import GraduationListPage from '../../pages/reports/GraduationListPage';
import EmployeeShiftListPage from '../../pages/reports/EmployeeShiftListPage';
import SchoolBranchListPage from '../../pages/reports/SchoolBranchListPage';
import ClassScheduleListPage from '../../pages/reports/ClassScheduleListPage';
import SmsReportsPage from '../../pages/reports/SmsReportsPage';
import NewCashRegisterPage from '../../pages/reports/NewCashRegisterPage';
import ParentReceiptsPage from '../../pages/reports/ParentReceiptsPage';
import CompanyRecordsPage from '../../pages/reports/CompanyRecordsPage';
import AssetRecordsPage from '../../pages/reports/AssetRecordsPage';

// Import Settings pages
import ChangeLanguagePage from '../../pages/settings/ChangeLanguagePage';
import SetDefaultAcademicYearPage from '../../pages/settings/SetDefaultAcademicYearPage';
import ManageRolesPermissionsPage from '../../pages/settings/ManageRolesPermissionsPage';
import BackupRestoreDatabasePage from '../../pages/settings/BackupRestoreDatabasePage';
import ApiSettingsPage from '../../pages/settings/ApiSettingsPage';
import ThemeModePage from '../../pages/settings/ThemeModePage';
import NotificationPreferencesPage from '../../pages/settings/NotificationPreferencesPage';


interface LayoutProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ activePage, setActivePage, onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      
      // Ardayda Pages
      case 'arday-wareejin':
        return <StudentTransferPage />;
      case 'arday-wareejin-kaliyah':
        return <TransferOnlyPage />;
      case 'diiwangeli-anshax-arday':
        return <RegisterDisciplinePage />;
      case 'joojinta-ardayga':
        return <SuspendStudentPage />;
      case 'kala-wareejin-fasalo':
        return <BulkTransferPage />;
      case 'raadi-arday':
        return <SearchStudentPage />;
      case 'soo-celi-arday':
        return <RestoreStudentPage />;

      // Accounting Pages
      case 'account-cusub':
        return <NewAccountPage />;
      case 'account-to-account':
        return <AccountToAccountTransferPage />;
      case 'balancesheet':
        return <BalanceSheetPage />;
      case 'caddeenta-qasnadda':
        return <CashboxStatementPage />;
      case 'chart-of-accounts':
        return <ChartOfAccountsPage />;
      case 'income-statement':
        return <IncomeStatementPage />;
      case 'liiska-qasnadaha':
        return <CashboxListPage />;
      case 'transferred-accounts-report':
        return <TransferredAccountsReportPage />;
      case 'trial-balance':
        return <TrialBalancePage />;

      // Certificate Pages
      case 'generate-certificate':
        return <GenerateCertificatePage />;
      case 'certificate-records':
        return <CertificateRecordsPage />;

      // Cusub Pages
      case 'ku-shub-xog-hore':
        return <ImportPreviousDataPage />;
      case 'liiska-ardayda-dhacday':
        return <FailedStudentsListPage />;
      case 'past-students':
        return <PastStudentsPage />;
      case 'la-socodka-casharada-fasalka':
        return <ClassLessonTrackingPage />;
      case 'liiska-qalinjabin-taxfitka':
        return <TahfidGraduationListPage />;
      case 'liiska-la-socodka-casharada-fasa':
        return <LessonTrackingListPage />;
      case 'q-mimtixan-app':
        return <QMExamAppPage />;
      case 'q-m-imtixan-app-by-fasal':
        return <QMExamAppByClassPage />;
      case 'qalinjabin-taxfitka-arday':
        return <TahfidGraduationStudentPage />;
        
      // Diwaangilin Pages
      case 'diwaangilin-arday-cusub':
        return <NewStudentPage />;
      case 'arday-cusub-arabic':
        return <NewStudentArabicPage />;
      case 'arday-cusub-new':
        return <NewStudentV2Page />;
      case 'arday-iyo-waalid':
        return <StudentParentRegistrationPage />;
      case 'diwangelin-xogta-alaabta':
        return <RegisterItemDataPage />;
      case 'fasal-cusub':
        return <NewClassPage />;
      case 'hayad-cusub':
        return <NewOrganizationPage />;
      case 'heer-cusub':
        return <NewLevelPage />;
      case 'heerka-shaqaalaha':
        return <StaffLevelPage />;
      case 'jago-cusub':
        return <NewPositionPage />;
      case 'maado-cusub':
        return <NewSubjectPage />;
      case 'nuuc-anshax-cusub':
        return <NewDisciplineTypePage />;
      case 'nuuc-kharaj':
        return <NewExpenseTypePage />;
      case 'nuuc-maqnaasho':
        return <NewAbsenceTypePage />;
      case 'nuucyada-bixitaanka-ardayga':
        return <NewStudentDepartureTypePage />;
      case 'sanad-cusub':
        return <NewYearPage />;
      case 'shift-cusub':
        return <NewShiftPage />;
      case 'shirkad-cusub':
        return <NewCompanyPage />;
      case 'waalid-cusub':
        return <NewParentPage />;
      case 'xarun-cusub':
        return <NewBranchPage />;
      case 'xarun-fasal-2':
        return <BranchClassLinkPage />;
      case 'xiisad-cusub':
        return <NewPeriodPage />;

      // Imtixaan Arday Pages
      case 'natiijo-arday-marksheet':
        return <StudentMarksheetPage />;
      case 'backup':
        return <BackupExamDataPage />;
      case 'bedel-natiijo':
        return <ChangeResultsPage />;
      case 'bedel-natiijo-arday':
        return <ChangeStudentResultPage />;
      case 'id-card':
        return <IdCardPage />;
      case 'imtixaan-wareejin':
        return <TransferExamPage />;
      case 'kala-wareeji-natiijo-maado':
        return <TransferSubjectResultsPage />;
      case 'kashf-imtixaanka':
        return <ExamReportPage />;
      case 'liiska-mudeynta-userada':
        return <UserGradingListPage />;
      case 'maadooyinka-ugu-liidata':
        return <LowestPerformingSubjectsPage />;
      case 'maadooyinka-ugu-sareeya':
        return <HighestPerformingSubjectsPage />;
      case 'marksheet-v2':
        return <MarksheetV2Page />;
      case 'marksheet-v5':
        return <MarksheetV5Page />;
      case 'natiijo-daabicid':
        return <PrintResultsPage />;
      case 'upload-exam':
        return <UploadExamPage />;
      case 'natiijo-sixid-fasal':
        return <CorrectClassResultsPage />;
      case 'natiijo-xareyn':
        return <EnterResultsPage />;
      case 'natiijo-xareyn2':
        return <EnterResultsV2Page />;
      case 'nuuc-imtixaan-cusub':
        return <NewExamTypePage />;
      case 'tir-natijo-fasal':
        return <DeleteClassResultsPage />;

      // Class Timetable Pages
      case 'new-timetable':
        return <NewTimetablePage />;
      case 'prepare-subjects':
        return <PrepareSubjectsPage />;
      case 'teacher-work-days':
        return <TeacherWorkDaysPage />;
      case 'create-timetable':
        return <CreateTimetablePage />;
      case 'print-timetable':
        return <PrintTimetablePage />;
      case 'copy-class-timetable':
        return <CopyClassTimetablePage />;

      // Finance Pages
      case 'finance-new-account':
        return <FinanceNewAccountPage />;
      case 'student-billing-monthly':
        return <StudentBillingMonthlyPage />;
      case 'bus-billing-monthly':
        return <BusBillingMonthlyPage />;
      case 'class-billing':
        return <ClassBillingPage />;
      case 'journal-entry':
        return <JournalEntryPage />;
      case 'cancel-billing':
        return <CancelBillingPage />;
      case 'make-payment':
        return <MakePaymentPage />;
      case 'collect-cash':
        return <CollectCashPage />;
      case 'payment-type':
        return <PaymentTypePage />;
      case 'student-receipts':
        return <StudentReceiptsPage />;
      case 'billing-receipts':
        return <BillingReceiptsPage />;
      case 'student-payment-statistics':
        return <StudentPaymentStatisticsPage />;
      case 'finance-trial-balance':
        return <FinanceTrialBalancePage />;
        
      // Administration Pages
      case 'teacher-policy':
        return <TeacherPolicyPage />;
      case 'form-list':
        return <FormListPage />;
      case 'teacher-policy-list':
        return <TeacherPolicyListPage />;
      case 'graduation-management':
        return <GraduationManagementPage />;
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'attendance-system':
        return <AttendanceSystemPage />;
      case 'school-information':
        return <SchoolInformationPage />;
      case 'cancelled-records':
        return <CancelledRecordsPage />;

      // User Management Pages
      case 'change-password':
        return <ChangePasswordPage />;
      case 'change-profile-picture':
        return <ChangeProfilePicturePage />;
      case 'add-new-user':
        return <AddNewUserPage />;
      case 'update-password':
        return <UpdatePasswordPage />;
      case 'user-list':
        return <UserListPage />;
      case 'user-usage-limits':
        return <UserUsageLimitsPage />;
      case 'grant-user-permissions':
        return <GrantUserPermissionsPage />;
      case 'grant-multiple-permissions':
        return <GrantMultiplePermissionsPage />;
      case 'grant-custom-permissions':
        return <GrantCustomPermissionsPage />;
      case 'assign-user-roles':
        return <AssignUserRolesPage />;

      // HRM Pages
      case 'salary-raise':
        return <SalaryRaisePage />;
      case 'pay-salary':
        return <PaySalaryPage />;
      case 'monthly-salary-adjustment':
        return <MonthlySalaryAdjustmentPage />;
      case 'advance-salary':
        return <AdvanceSalaryPage />;
      case 'add-new-staff':
        return <AddNewStaffPage />;
      case 'staff-attendance':
        return <StaffAttendancePage />;
      case 'staff-reports':
        return <StaffReportsPage />;

      // Reports Pages
      case 'payment-collection-summary':
        return <PaymentCollectionSummaryPage />;
      case 'purchase-records':
        return <PurchaseRecordsPage />;
      case 'unpaid-fees-notifications':
        return <UnpaidFeesNotificationsPage />;
      case 'failed-student-list':
        return <ReportsFailedStudentListPage />;
      case 'notifications-messages':
        return <NotificationsMessagesPage />;
      case 'staff-messages':
        return <StaffMessagesPage />;
      case 'fixed-assets':
        return <FixedAssetsPage />;
      case 'unpaid-student-fees':
        return <UnpaidStudentFeesPage />;
      case 'student-payment-records':
        return <StudentPaymentRecordsPage />;
      case 'collected-fees-summary':
        return <CollectedFeesSummaryPage />;
      case 'student-list':
        return <ReportsStudentListPage />;
      case 'discipline-reports':
        return <DisciplineReportsPage />;
      case 'orphan-students':
        return <OrphanStudentsPage />;
      case 'absent-students':
        return <AbsentStudentsPage />;
      case 'advance-salaries':
        return <ReportsAdvanceSalariesPage />;
      case 'employee-list':
        return <EmployeeListPage />;
      case 'exam-correction-list':
        return <ExamCorrectionListPage />;
      case 'exam-types-list':
        return <ExamTypesListPage />;
      case 'grade-levels':
        return <GradeLevelsPage />;
      case 'attendance-types':
        return <AttendanceTypesPage />;
      case 'behavior-types':
        return <BehaviorTypesPage />;
      case 'discounts-free-fees-list':
        return <DiscountsFreeFeesListPage />;
      case 'graduation-list':
        return <GraduationListPage />;
      case 'employee-shift-list':
        return <EmployeeShiftListPage />;
      case 'school-branch-list':
        return <SchoolBranchListPage />;
      case 'class-schedule-list':
        return <ClassScheduleListPage />;
      case 'sms-reports':
        return <SmsReportsPage />;
      case 'new-cash-register':
        return <NewCashRegisterPage />;
      case 'parent-receipts':
        return <ParentReceiptsPage />;
      case 'company-records':
        return <CompanyRecordsPage />;
      case 'asset-records':
        return <AssetRecordsPage />;

      // Settings Pages
      case 'change-language':
        return <ChangeLanguagePage />;
      case 'set-default-academic-year':
        return <SetDefaultAcademicYearPage />;
      case 'manage-roles-permissions':
        return <ManageRolesPermissionsPage />;
      case 'backup-restore-database':
        return <BackupRestoreDatabasePage />;
      case 'update-school-info':
        return <SchoolInformationPage />; // Reusing existing page
      case 'api-settings':
        return <ApiSettingsPage />;
      case 'theme-mode':
        return <ThemeModePage />;
      case 'notification-preferences':
        return <NotificationPreferencesPage />;

      default:
        // A simple way to format the page title from the path
        const title = activePage
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return <PlaceholderPage title={title} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="no-print">
        <Sidebar isOpen={isSidebarOpen} activePage={activePage} setActivePage={setActivePage} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="no-print">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} onLogout={onLogout} />
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Layout;