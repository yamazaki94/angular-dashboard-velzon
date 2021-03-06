import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { LogHoursComponent } from './duty-hours/log-hours/log-hours.component';
import { ViewHoursComponent } from './duty-hours/view-hours/view-hours.component';
import { CreateProgramComponent } from './curriculum/create-program/create-program.component';
import { EcSetupComponent } from './curriculum/ec-setup.component';
import { AllocateProcedureComponent } from './curriculum/view-program/procedure/allocate-procedure/allocate-procedure.component';
import { AddRotationComponent } from './curriculum/view-program/rotation/add-rotation/add-rotation.component';
import { PreviewRotationComponent } from './curriculum/view-program/rotation/preview-rotation/preview-rotation.component';
import { ViewProgramComponent } from './curriculum/view-program/view-program.component';
import { InTrainingEvaluationReportComponent } from './forms/in-trainning-evaluation-report/in-trainning-evaluation-report.component';
import { PresentationEvaluationFormComponent } from './forms/presentation-evaluation-form/presentation-evaluation-form.component';
import { ResearchMentorEvaluationFormComponent } from './forms/research-mentor-evaluation-form/research-mentor-evaluation-form.component';
import { RotationEvaluationFormComponent } from './forms/rotation-evaluation-form/rotation-evaluation-form.component';
import { SixMonthAndAnnualEvaluationFormComponent } from './forms/six-month-and-annual-evaluation-form/six-month-and-annual-evaluation-form.component';
import { TrainerEvaluationFormComponent } from './forms/trainer-evaluation-form/trainer-evaluation-form.component';
import { ResidentBlockDiagramComponent } from './resident-block-diagram/resident-block-diagram.component';
import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping/rotation-page-resident-mapping.component';
import { LogProcedureComponent } from './log-procedure/log-procedure.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveRequestFormComponent } from './leave-application/leave-request-form/leave-request-form.component';
import { LeaveReturnApplicationComponent } from './leave-application/leave-return-application/leave-return-application.component';
import { SelfReferralRequestComponent } from './counselling-requests/self-referral-request/self-referral-request.component';
import { SelfReferralRequestFormComponent } from './counselling-requests/self-referral-request/self-referral-request-form/self-referral-request-form.component';
import { ProgramReferralRequestComponent } from './counselling-requests/program-referral-request/program-referral-request.component';
import { ProgramReferralRequestFormComponent } from './counselling-requests/program-referral-request/program-referral-request-form/program-referral-request-form.component';
import { MmrDashboardComponent } from './counselling-requests/mmr-dashboard/mmr-dashboard.component';
import { ConfidentialityFormComponent } from './counselling-requests/self-referral-request/confidentiality-form/confidentiality-form.component';
import { MyAppointmentsComponent } from './counselling-requests/my-appointments/my-appointments.component';
import { AssessmentFormComponent } from './counselling-requests/my-appointments/assessment-form/assessment-form.component';
import { ConfidentialityFormTwoComponent } from './counselling-requests/self-referral-request/confidentiality-form-two/confidentiality-form-two.component';
import { ScholarshipSectionComponent } from './scholarship-section/scholarship-section.component';
import { CreateProgramTypeComponent } from './scholarship-section/create-program-type/create-program-type.component';
import { CreateScholarshipProgramComponent } from './scholarship-section/create-program/create-program.component';
import { ViewScholarshipApplicationsComponent } from './scholarship-section/view-scholarship-applications/view-scholarship-applications.component';
import { ScholarshipApplicationFormComponent } from './scholarship-section/view-scholarship-applications/scholarship-application-form/scholarship-application-form.component';
import { DashboardsEmployerComponent } from './employer-view/dashboards-employer/dashboards-employer.component';
import { ScholarshipApplicationViewComponent } from './employer-view/scholarship-application-view/scholarship-application-view.component';
import { DashboardInterviewerComponent } from './interviewer-view/dashboard-interviewer/dashboard-interviewer.component';
import { ShowApplicationFormComponent } from './interviewer-view/show-application-form/show-application-form.component';
import { InterviewEvaluationFormComponent } from './interviewer-view/interview-evaluation-form/interview-evaluation-form.component';
import { InterviewResultComponent } from './interviewer-view/interview-result/interview-result.component';
import { ApplicantApplicationFormComponent } from './applicant-view/applicant-application-form/applicant-application-form.component';
import { ViewAcceptanceLetterComponent } from './scholarship-section/view-scholarship-applications/view-acceptance-letter/view-acceptance-letter.component';
import { FinanceDashboardComponent } from './finance-view/finance-dashboard/finance-dashboard.component';
import { FinanceScholarshipApplicationViewComponent } from './finance-view/finance-scholarship-application-view/finance-scholarship-application-view.component';
import { FinanceViewAcceptanceLetterComponent } from './finance-view/finance-view-acceptance-letter/finance-view-acceptance-letter.component';
import { DashboardInternationalTraineeComponent } from './international-trainees-view/dashboard-international-trainee/dashboard-international-trainee.component';
import { ApplicationInternationalTraineeComponent } from './international-trainees-view/application-international-trainee/application-international-trainee.component';
import { InternationalTraineeApplicationsViewComponent } from './scholarship-section/international-trainee-applications-view/international-trainee-applications-view.component';
import { DefineMeetingTypesComponent } from './meeting-management/configuration/define-meeting-types/define-meeting-types.component';
import { MeetingInviteComponent } from './meeting-management/meeting/meeting-invite/meeting-invite.component';
import { MeetingTableViewComponent } from './meeting-management/meeting/meeting-table-view/meeting-view.component';
import { MeetingViewComponent } from './meeting-management/meeting/meeting-view/meeting-view.component';
// import { MeetingViewComponent } from './meeting-management/meeting/meeting-view/meeting-view.component';

const routes: Routes = [
    //Default Routing
    { path: "dashboard", component: DashboardComponent },
    { path: "residency-block-diagram", component: ResidentBlockDiagramComponent },
    { path: "rotation-page-resident-mapping", component: RotationPageResidentMappingComponent },
    { path: "forms", children: [
      { path: "trainer-evaluation-form", component: TrainerEvaluationFormComponent },
      { path: "research-mentor-evaluation-form", component: ResearchMentorEvaluationFormComponent },
      { path: "rotation-evaluation-form", component: RotationEvaluationFormComponent },
      { path: "in-training-evaluation-form", component: InTrainingEvaluationReportComponent },
      { path: "presentation-evaluation-form", component: PresentationEvaluationFormComponent },
      { path: "six-month-and-annual-evaluation-form", component: SixMonthAndAnnualEvaluationFormComponent },
      
    ] },
    { path: "curriculum", children: [
        { path: "", component: EcSetupComponent },
        { path: "create-program", component: CreateProgramComponent },
        { path: "view-program", component: ViewProgramComponent },
        { path: "add-rotation", component: AddRotationComponent },
        { path: "view-rotation", component: PreviewRotationComponent },
        { path: "allocate-procedure", component: AllocateProcedureComponent },
      ] 
    },
    {
      path: 'graduate-medical-education', loadChildren: () => import('./graduate_medical_education/medical-education.module').then(m => m.AppsModule)
    },
    { path: "duty-hours", children: [
        { path: "grid", component: LogHoursComponent },
        { path: "view", component: ViewHoursComponent },
      ] 
    },
    { path: "leave-application", children: [
        { path: "", component: LeaveApplicationComponent },
        { path: "leave-request", component: LeaveRequestFormComponent },
        { path: "leave-return-application", component: LeaveReturnApplicationComponent },
      ] 
    },
    { path: "log-procedures", component: LogProcedureComponent },
    { path: "counselling", children: [
      { path: "self-referral", children : [
        {path : "", component: SelfReferralRequestComponent},
        { path: "self-referral-request-form", component: SelfReferralRequestFormComponent },
        { path: "confidentiality-form", component: ConfidentialityFormComponent },
        { path: "confidentiality-form-two", component: ConfidentialityFormTwoComponent }
      ] },
      { path: "program-referral", children : [
        {path : "", component: ProgramReferralRequestComponent},
        {path : "program-referral-request-form", component: ProgramReferralRequestFormComponent}
      ] },
      { path: "mmr-dashboard", children : [
        {path : "", component: MmrDashboardComponent},
      ] },
      { path: "my-appointments", children : [
        {path : "", component: MyAppointmentsComponent},
        {path : "assessment-form", component: AssessmentFormComponent },
      ] },  
    ]},
    { path: "scholarship", children : [
      { path : "scholarship-section", component: ScholarshipSectionComponent },
      { path : "create-program-type", component: CreateProgramTypeComponent },
      { path : "create-program", component: CreateScholarshipProgramComponent },
      { path : "view-applications", component: ViewScholarshipApplicationsComponent },
      { path : "show-application-form", component: ScholarshipApplicationFormComponent },
      { path : "view-acceptance-letter", component: ViewAcceptanceLetterComponent },
      { path : "international-trainee-applications", component: InternationalTraineeApplicationsViewComponent },
    ]},
    { path: "meeting-management", children : [
      { path : "configuration", component: DefineMeetingTypesComponent },
      { path : "invite", component: MeetingInviteComponent },
      { path : "view-meetings", component: MeetingTableViewComponent },
      { path : "view", component: MeetingViewComponent },
    ]},

    //Employer Routing
    { path: "employer", children : [
      { path: "dashboard", component: DashboardsEmployerComponent },
      { path: "employer-view-applications", component: ScholarshipApplicationViewComponent },
    ]},
    
    //Interviewer Routing
    { path: "interviewer", children : [
      { path: "dashboard", component: DashboardInterviewerComponent },
      { path: "show-application-form", component: ShowApplicationFormComponent },
      { path: "evaluation-form", component: InterviewEvaluationFormComponent },
      { path: "interview-result", component: InterviewResultComponent }
    ] },

    //Applicant Routing
    { path: "applicant", children : [
      { path: "application", component: ApplicantApplicationFormComponent }
    ] },
    
    //Finance Routing
    { path: "finance", children : [
      { path: "dashboard", component: FinanceDashboardComponent },
      { path: "scholarship-application-view", component: FinanceScholarshipApplicationViewComponent },
      { path: "view-acceptance-letter", component: FinanceViewAcceptanceLetterComponent }
    ] },
   
    //Finance Routing
    { path: "international", children : [
      { path: "dashboard", component: DashboardInternationalTraineeComponent},
      { path: "application", component: ApplicationInternationalTraineeComponent},
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
