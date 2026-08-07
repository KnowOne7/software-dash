import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import BlankPage from "../pages/application/blankPage";





// Lazy-loaded components
const BlogDetails = lazy(() => import("../pages/Content/blogs/blogDetails"));
const Notifications = lazy(() => import("../pages/notification/notifications"));
const PaymentGateways = lazy(() => import("../pages/settings/financial-settings/paymentGateways"));
const BankAccounts = lazy(() => import("../pages/settings/financial-settings/bankAccounts"));
const TaxRates = lazy(() => import("../pages/settings/financial-settings/taxRates"));
const Currencies = lazy(() => import("../pages/settings/financial-settings/currencies"));

const Sitemap = lazy(() => import("../pages/settings/other-settings/sitemap"));
const ClearCache = lazy(() => import("../pages/settings/other-settings/clearCache"));
const Storage = lazy(() => import("../pages/settings/other-settings/storage"));
const Cronjob = lazy(() => import("../pages/settings/other-settings/cronjob"));
const BanIpAddress = lazy(() => import("../pages/settings/other-settings/banIpAddress"));
const SystemBackup = lazy(() => import("../pages/settings/other-settings/systemBackup"));
const DatabaseBackup = lazy(() => import("../pages/settings/other-settings/databaseBackup"));
const SystemUpdate = lazy(() => import("../pages/settings/other-settings/systemUpdate"));

const ContactMessages = lazy(() => import("../pages/support/contact-messages/contactMessages"));
const Tickets = lazy(() => import("../pages/support/tickets/tickets"));
const TicketDetails = lazy(() => import("../pages/support/tickets/ticketDetails"));

const ProjectDashboard = lazy(() => import("../pages/main-menu/dashboard/project-dashboard/projectDashboard"));

const LayoutRTL = lazy(() => import("../pages/layout-pages/layoutRTL"));
const Login = lazy(() => import("../pages/authentication/login/login"));
const Dashboard = lazy(
  () => import("../pages/main-menu/dashboard/deals-dashboard/dashboard")
);
const LeadsDashboard = lazy(
  () => import("../pages/main-menu/dashboard/leads-dashboard/leadsDashboard")
);
const SoftwareDashboard = lazy(
  () => import("../pages/main-menu/dashboard/software-dashboard/softwareDashboard")
);
const UiAccordion = lazy(
  () => import("../pages/ui-interface/base-ui/uiAccordion")
);
const Faq = lazy(() => import("../pages/Content/faq"));
const UiAlerts = lazy(() => import("../pages/ui-interface/base-ui/uiAlerts"));
const UiAvatar = lazy(() => import("../pages/ui-interface/base-ui/uiAvatar"));
const UiBadges = lazy(() => import("../pages/ui-interface/base-ui/uiBadges"));
const UiBreadcrumb = lazy(
  () => import("../pages/ui-interface/base-ui/uiBreadcrumb")
);
const UiButtons = lazy(() => import("../pages/ui-interface/base-ui/uiButtons"));
const UiButtonsGroup = lazy(
  () => import("../pages/ui-interface/base-ui/uiButtonsGroup")
);
const UiCards = lazy(() => import("../pages/ui-interface/base-ui/uiCards"));
const UiCarousel = lazy(
  () => import("../pages/ui-interface/base-ui/uiCarousel")
);
const UiCollapse = lazy(
  () => import("../pages/ui-interface/base-ui/uiCollapse")
);
const UiDropdowns = lazy(
  () => import("../pages/ui-interface/base-ui/uiDropdowns")
);
const UiRatio = lazy(() => import("../pages/ui-interface/base-ui/uiRatio"));
const UiGrid = lazy(() => import("../pages/ui-interface/base-ui/uiGrid"));
const UiImage = lazy(() => import("../pages/ui-interface/base-ui/uiImage"));
const UiLinks = lazy(() => import("../pages/ui-interface/base-ui/uiLinks"));
const UiListGroup = lazy(
  () => import("../pages/ui-interface/base-ui/uiListGroup")
);
const UiModals = lazy(() => import("../pages/ui-interface/base-ui/uiModals"));
const UiOffcanvas = lazy(
  () => import("../pages/ui-interface/base-ui/uiOffcanvas")
);
const UiPagination = lazy(
  () => import("../pages/ui-interface/base-ui/uiPagination")
);
const UiProgress = lazy(
  () => import("../pages/ui-interface/base-ui/uiProgress")
);
const UiSpinner = lazy(() => import("../pages/ui-interface/base-ui/uiSpinner"));
const UiNavTabs = lazy(() => import("../pages/ui-interface/base-ui/uiNavTabs"));
const UiTooltip = lazy(() => import("../pages/ui-interface/base-ui/uiTooltip"));
const UiTypography = lazy(
  () => import("../pages/ui-interface/base-ui/uiTypography")
);
const Register = lazy(
  () => import("../pages/authentication/register/register")
);
const ForgotPassword = lazy(
  () => import("../pages/authentication/forgot-password/forgotPassword")
);
const EmailVerification = lazy(
  () => import("../pages/authentication/email-verification/emailVerification")
);
const TwoStepVerification = lazy(
  () =>
    import("../pages/authentication/two-step-verification/twoStepVerification")
);
const ResetPassword = lazy(
  () => import("../pages/authentication/reset-password/resetPassword")
);
const Success = lazy(() => import("../pages/authentication/success/success"));
const LockScreen = lazy(
  () => import("../pages/authentication/lock-screen/lockScreen")
);

// Advance UI
const UiDragula = lazy(
  () => import("../pages/ui-interface/advance-ui/uiDragula")
);
const UiClipboard = lazy(
  () => import("../pages/ui-interface/advance-ui/uiClipboard")
);

const UiLightbox = lazy(
  () => import("../pages/ui-interface/advance-ui/uiLightbox")
);

// Forms - Elements
const FormBasicInputs = lazy(
  () => import("../pages/ui-interface/forms-ui/form-elements/formBasicInputs")
);
const FormCheckboxRadios = lazy(
  () =>
    import("../pages/ui-interface/forms-ui/form-elements/formCheckboxRadios")
);
const FormInputGroups = lazy(
  () => import("../pages/ui-interface/forms-ui/form-elements/formInputGroups")
);
const FormGridGutters = lazy(
  () => import("../pages/ui-interface/forms-ui/form-elements/formGridGutters")
);
const FormMask = lazy(
  () => import("../pages/ui-interface/forms-ui/form-elements/formMask")
);
const FormFileupload = lazy(
  () => import("../pages/ui-interface/forms-ui/form-elements/formFileupload")
);

// Forms - Layouts
const FormHorizontal = lazy(
  () => import("../pages/ui-interface/forms-ui/layouts/formHorizontal")
);
const FormVertical = lazy(
  () => import("../pages/ui-interface/forms-ui/layouts/formVertical")
);
const FormFloatingLabels = lazy(
  () => import("../pages/ui-interface/forms-ui/layouts/formFloatingLabels")
);
const FormValidation = lazy(
  () => import("../pages/ui-interface/forms-ui/layouts/formValidation")
);

// Other form components
const FormSelect = lazy(
  () => import("../pages/ui-interface/forms-ui/formSelect")
);
const FormPickers = lazy(
  () => import("../pages/ui-interface/forms-ui/formPickers")
);
const FormEditors = lazy(
  () => import("../pages/ui-interface/forms-ui/formEditors")
);

// Tables
const TablesBasic = lazy(
  () => import("../pages/ui-interface/table-ui/tablesBasic")
);
const DataTables = lazy(
  () => import("../pages/ui-interface/table-ui/dataTables")
);

// Charts
const UiApexchat = lazy(
  () => import("../pages/ui-interface/charts-ui/uiApexchat")
);

// Icons
const IconFontawesome = lazy(
  () => import("../pages/ui-interface/icons-ui/iconFontawesome")
);
const IconTabler = lazy(
  () => import("../pages/ui-interface/icons-ui/iconTabler")
);
const IconBootstrap = lazy(
  () => import("../pages/ui-interface/icons-ui/iconBootstrap")
);
const IconRemix = lazy(
  () => import("../pages/ui-interface/icons-ui/iconRemix")
);
const IconIonic = lazy(
  () => import("../pages/ui-interface/icons-ui/iconIonic")
);
const UiMaterialIcon = lazy(
  () => import("../pages/ui-interface/icons-ui/uiMaterialIcon")
);
const IconPe7 = lazy(() => import("../pages/ui-interface/icons-ui/iconPe7"));
const IconThemify = lazy(
  () => import("../pages/ui-interface/icons-ui/iconThemify")
);
const IconWeatherIcon = lazy(
  () => import("../pages/ui-interface/icons-ui/iconWeatherIcon")
);
const IcontTypicon = lazy(
  () => import("../pages/ui-interface/icons-ui/icontTypicon")
);
const IconFlagIcon = lazy(
  () => import("../pages/ui-interface/icons-ui/iconFlagIcon")
);




// Applications
const Chat = lazy(() => import("../pages/application/chat"));
const VideoCall = lazy(() => import("../pages/application/call/videoCall"));

// Application
const AudioCall = lazy(() => import("../pages/application/call/audioCall"));
const CallHistory = lazy(() => import("../pages/application/call/callHistory"));
const Calendar = lazy(() => import("../pages/application/calendar/calendar"));
const Email = lazy(() => import("../pages/application/email/email"));
const EmailReply = lazy(() => import("../pages/application/email/emailReply"));
const Todo = lazy(() => import("../pages/application/todo/todo"));
const TodoList = lazy(() => import("../pages/application/todo/todoList"));
const Notes = lazy(() => import("../pages/application/notes/notes"));
const FileManager = lazy(
  () => import("../pages/application/file-manager/fileManager")
);
const SocialFeed = lazy(
  () => import("../pages/application/social-feed/socialFeed")
);
const KanbanView = lazy(
  () => import("../pages/application/kanban-view/kanbanView")
);
const Invoice = lazy(() => import("../pages/application/invoice/invoice"));
const AddInvoices = lazy(
  () => import("../pages/application/invoice/addInvoices")
);
const EditInvoices = lazy(
  () => import("../pages/application/invoice/editInvoices")
);
const InvoiceDetails = lazy(
  () => import("../pages/application/invoice/invoiceDetails")
);

// CRM
const DealsGrid = lazy(() => import("../pages/crm/deals/dealsGrid"));
const DealsList = lazy(() => import("../pages/crm/deals/dealsList"));
const DealsDetails = lazy(() => import("../pages/crm/deals/dealsDetails"));
const LeadsGrid = lazy(() => import("../pages/crm/leads/leadsGrid"));
const LeadsList = lazy(() => import("../pages/crm/leads/leadsList"));
const LeadsDetails = lazy(() => import("../pages/crm/leads/leadsDetails"));
const Pipeline = lazy(() => import("../pages/crm/pipeline/pipeline"));
const Campaign = lazy(() => import("../pages/crm/campaign/campaign"));
const CampaignComplete = lazy(
  () => import("../pages/crm/campaign/campaignComplete")
);
const CampaignArchieve = lazy(
  () => import("../pages/crm/campaign/campaignArchieve")
);
const ProjectsGrid = lazy(() => import("../pages/crm/projects/projectsGrid"));
const ProjectList = lazy(() => import("../pages/crm/projects/projectList"));
const ProjectDetails = lazy(
  () => import("../pages/crm/projects/projectDetails")
);
const ContactGrid = lazy(() => import("../pages/crm/contacts/contacts"));
const ContactList = lazy(() => import("../pages/crm/contacts/contactList"));
const CompaniesList = lazy(() => import("../pages/crm/companies/companyList"));
const CompaniesGrid = lazy(
  () => import("../pages/crm/companies/companiesGrid")
);
const ContactDetails = lazy(
  () => import("../pages/crm/contacts/contactDetails")
);
const CompaniesDetails = lazy(
  () => import("../pages/crm/companies/companiesDetails")
);
const Tasks = lazy(() => import("../pages/crm/tasks/tasks"));
const Activities = lazy(() => import("../pages/crm/activities/activities"));
const ActivitiesCalls = lazy(
  () => import("../pages/crm/activities/activityCalls")
);
const ActivitiesMails = lazy(
  () => import("../pages/crm/activities/activityMail")
);
const ActivitiesTasks = lazy(
  () => import("../pages/crm/activities/activityTask")
);
const ActivitiesMeetings = lazy(
  () => import("../pages/crm/activities/activityMeeting")
);
const ContractsList = lazy(
  () => import("../pages/crm/contracts/contractsList")
);
const ContractsGrid = lazy(() => import("../pages/crm/contracts/contracts"));
const ProposalsList = lazy(
  () => import("../pages/crm/proposals/proposalsList")
);
const ProposalsGrid = lazy(() => import("../pages/crm/proposals/proposals"));
const InvoicesList = lazy(() => import("../pages/crm/invoices/invoicesList"));
const InvoicesGrid = lazy(() => import("../pages/crm/invoices/invoices"));
const EstimationList = lazy(
  () => import("../pages/crm/estimation/estimationList")
);
const Estimations = lazy(() => import("../pages/crm/estimation/estimations"));

const Payments = lazy(() => import("../pages/crm/payments/payments"));
const Analytics = lazy(() => import("../pages/crm/analytics/analytics"));
const Sources = lazy(() => import("../pages/crm-settings/sources/sources"));
const LostReason = lazy(
  () => import("../pages/crm-settings/lost-reason/lostReason")
);
const ContactStage = lazy(
  () => import("../pages/crm-settings/contact-stage/contactStage")
);
const Industry = lazy(() => import("../pages/crm-settings/industry/industry"));
const Calls = lazy(() => import("../pages/crm-settings/calls/calls"));

const Pages = lazy(() => import("../pages/Content/pages/pages"));
const AddPages = lazy(() => import("../pages/Content/pages/addPages"));
const EditPages = lazy(() => import("../pages/Content/pages/editPages"));

const Blogs = lazy(() => import("../pages/Content/blogs/blogs"));
const AddBlog = lazy(() => import("../pages/Content/blogs/addBlog"));
const EditBlog = lazy(() => import("../pages/Content/blogs/editBlog"));
const BlogCategories = lazy(
  () => import("../pages/Content/blogs/blogCategories")
);
const BlogComments = lazy(() => import("../pages/Content/blogs/blogComments"));
const BlogTags = lazy(() => import("../pages/Content/blogs/blogTags"));

const Countries = lazy(() => import("../pages/Content/location/countries"));
const States = lazy(() => import("../pages/Content/location/states"));
const Cities = lazy(() => import("../pages/Content/location/cities"));

const Testimonials = lazy(() => import("../pages/Content/testimonials"));

// Super Admin dashboard
const SuperAdminDashboard = lazy(
  () => import("../pages/main-menu/admin-dashboard/dashboard")
);

const SuperAdminCompany = lazy(
  () => import("../pages/main-menu/admin-dashboard/company")
);
const SuperAdminSubscription = lazy(
  () => import("../pages/main-menu/admin-dashboard/subscription")
);
const SuperAdminPackage = lazy(
  () => import("../pages/main-menu/admin-dashboard/packages")
);
const SuperAdminDomains = lazy(
  () => import("../pages/main-menu/admin-dashboard/domain")
);
const PurchaseTransaction = lazy(
  () => import("../pages/main-menu/admin-dashboard/purchaseTransaction")
);

const ManageUsers = lazy(() => import("../pages/user-management/manageUsers"));
const RolesPermissions = lazy(
  () => import("../pages/user-management/rolesPermissions")
);
const Permission = lazy(() => import("../pages/user-management/permission"));
const DeleteRequest = lazy(
  () => import("../pages/user-management/deleteRequest")
);

const MembershipPlans = lazy(
  () => import("../pages/membership/membershipPlans")
);
const MembershipAddons = lazy(
  () => import("../pages/membership/membershipAddons")
);
const MembershipTransactions = lazy(
  () => import("../pages/membership/membershipTransactions")
);

const ProfileSettings = lazy(
  () => import("../pages/settings/general-settings/profileSettings")
);
const SecuritySettings = lazy(
  () => import("../pages/settings/general-settings/securitySettings")
);
const Notification = lazy(
  () => import("../pages/settings/general-settings/notification")
);
const ConnectedApps = lazy(
  () => import("../pages/settings/general-settings/connectedApps")
);
// User Managements

// Reports
const LeadReports = lazy(
  () => import("../pages/reports/lead-reports/leadReports")
);
const DealReports = lazy(
  () => import("../pages/reports/deal-reports/dealReports")
);

const CompanySettings = lazy(() => import("../pages/settings/website-settings/companySettings"));
const Localization = lazy(() => import("../pages/settings/website-settings/localization"));
const Prefixes = lazy(() => import("../pages/settings/website-settings/prefixes"));
const PreferenceSettings = lazy(() => import("../pages/settings/website-settings/preferenceSettings"));
const AppearanceSettings = lazy(() => import("../pages/settings/website-settings/appearanceSettings"));
const LanguageSettings = lazy(() => import("../pages/settings/website-settings/languageSettings"));

const InvoiceSettings = lazy(() => import("../pages/settings/app-settings/invoiceSettings"));
const Printers = lazy(() => import("../pages/settings/app-settings/printers"));
const CustomFieldsSetting = lazy(() => import("../pages/settings/app-settings/customFieldsSetting"));
const ContactReports = lazy(() => import("../pages/reports/contact-reports/contactReports"));
const CompanyReports = lazy(() => import("../pages/reports/company-reports/companyReports"));
const ProjectReports = lazy(() => import("../pages/reports/project-reports/projectReports"));
const TaskReports = lazy(() => import("../pages/reports/task-reports/taskReports"));

const EmailSettings = lazy(() => import("../pages/settings/system-settings/emailSettings"));
const SmsGateways = lazy(() => import("../pages/settings/system-settings/smsGateways"));

const GdprCookies = lazy(() => import("../pages/settings/system-settings/gdprCookies"));

const route = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to={route.login} />,
    route: Route,
  },
  {
    id: "1",
    path: route.dealsDashboard,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deals Dashboard",
  },
  {
    id: "2",
    path: route.softwareDashboard,
    element: (
      <Suspense fallback={<div></div>}>
        <SoftwareDashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Accordion",
  },
  {
    id: "3",
    path: route.uiAlerts,
    element: (
      <Suspense fallback={<div></div>}>
        <UiAlerts />
      </Suspense>
    ),
    route: Route,
    meta_title: "Alerts",
  },
  {
    id: "4",
    path: route.uiAvatar,
    element: (
      <Suspense fallback={<div></div>}>
        <UiAvatar />
      </Suspense>
    ),
    route: Route,
    meta_title: "Avatar",
  },
  {
    id: "5",
    path: route.uiBadges,
    element: (
      <Suspense fallback={<div></div>}>
        <UiBadges />
      </Suspense>
    ),
    route: Route,
    meta_title: "Badges",
  },
  {
    id: "6",
    path: route.uiBreadcrumb,
    element: (
      <Suspense fallback={<div></div>}>
        <UiBreadcrumb />
      </Suspense>
    ),
    route: Route,
    meta_title: "Breadcrumb",
  },
  {
    id: "7",
    path: route.uiButtons,
    element: (
      <Suspense fallback={<div></div>}>
        <UiButtons />
      </Suspense>
    ),
    route: Route,
    meta_title: "Buttons",
  },
  {
    id: "8",
    path: route.uiButtonsGroup,
    element: (
      <Suspense fallback={<div></div>}>
        <UiButtonsGroup />
      </Suspense>
    ),
    route: Route,
    meta_title: "Buttons Group",
  },
  {
    id: "9",
    path: route.uiCards,
    element: (
      <Suspense fallback={<div></div>}>
        <UiCards />
      </Suspense>
    ),
    route: Route,
    meta_title: "Cards",
  },
  {
    id: "10",
    path: route.uiCarousel,
    element: (
      <Suspense fallback={<div></div>}>
        <UiCarousel />
      </Suspense>
    ),
    route: Route,
    meta_title: "Carousel",
  },
  {
    id: "11",
    path: route.uiCollapse,
    element: (
      <Suspense fallback={<div></div>}>
        <UiCollapse />
      </Suspense>
    ),
    route: Route,
    meta_title: "Collapse",
  },
  {
    id: "12",
    path: route.uiDropdowns,
    element: (
      <Suspense fallback={<div></div>}>
        <UiDropdowns />
      </Suspense>
    ),
    route: Route,
    meta_title: "Dropdowns",
  },
  {
    id: "13",
    path: route.uiRatio,
    element: (
      <Suspense fallback={<div></div>}>
        <UiRatio />
      </Suspense>
    ),
    route: Route,
    meta_title: "Ratio",
  },
  {
    id: "14",
    path: route.uiGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <UiGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Grid",
  },
  {
    id: "15",
    path: route.uiImage,
    element: (
      <Suspense fallback={<div></div>}>
        <UiImage />
      </Suspense>
    ),
    route: Route,
    meta_title: "Images",
  },
  {
    id: "16",
    path: route.uiLinks,
    element: (
      <Suspense fallback={<div></div>}>
        <UiLinks />
      </Suspense>
    ),
    route: Route,
    meta_title: "Links",
  },
  {
    id: "17",
    path: route.uiListGroup,
    element: (
      <Suspense fallback={<div></div>}>
        <UiListGroup />
      </Suspense>
    ),
    route: Route,
    meta_title: "List Group",
  },
  {
    id: "18",
    path: route.uiModals,
    element: (
      <Suspense fallback={<div></div>}>
        <UiModals />
      </Suspense>
    ),
    route: Route,
    meta_title: "Modals",
  },
  {
    id: "19",
    path: route.offcanvas,
    element: (
      <Suspense fallback={<div></div>}>
        <UiOffcanvas />
      </Suspense>
    ),
    route: Route,
    meta_title: "Offcanvas",
  },
  {
    id: "20",
    path: route.pagination,
    element: (
      <Suspense fallback={<div></div>}>
        <UiPagination />
      </Suspense>
    ),
    route: Route,
    meta_title: "Pagination",
  },
  {
    id: "21",
    path: route.progress,
    element: (
      <Suspense fallback={<div></div>}>
        <UiProgress />
      </Suspense>
    ),
    route: Route,
    meta_title: "Progress",
  },
  {
    id: "22",
    path: route.spinner,
    element: (
      <Suspense fallback={<div></div>}>
        <UiSpinner />
      </Suspense>
    ),
    route: Route,
    meta_title: "Spinner",
  },
  {
    id: "23",
    path: route.navTabs,
    element: (
      <Suspense fallback={<div></div>}>
        <UiNavTabs />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tabs",
  },
  {
    id: "24",
    path: route.tooltip,
    element: (
      <Suspense fallback={<div></div>}>
        <UiTooltip />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tooltip",
  },
  {
    id: "25",
    path: route.typography,
    element: (
      <Suspense fallback={<div></div>}>
        <UiTypography />
      </Suspense>
    ),
    route: Route,
    meta_title: "Typography",
  },
  {
    id: "26",
    path: route.dragandDrop,
    element: (
      <Suspense fallback={<div></div>}>
        <UiDragula />
      </Suspense>
    ),
    route: Route,
    meta_title: "Dragula",
  },
  {
    id: "27",
    path: route.clipboard,
    element: (
      <Suspense fallback={<div></div>}>
        <UiClipboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Clipboard",
  },
 
  {
    id: "29",
    path: route.lightbox,
    element: (
      <Suspense fallback={<div></div>}>
        <UiLightbox />
      </Suspense>
    ),
    route: Route,
    meta_title: "Lightbox",
  },
  
  {
    id: "31",
    path: route.basicInput,
    element: (
      <Suspense fallback={<div></div>}>
        <FormBasicInputs />
      </Suspense>
    ),
    route: Route,
    meta_title: "Basic Inputs",
  },
  {
    id: "32",
    path: route.checkboxandRadios,
    element: (
      <Suspense fallback={<div></div>}>
        <FormCheckboxRadios />
      </Suspense>
    ),
    route: Route,
    meta_title: "Checkbox & Radios",
  },
  {
    id: "33",
    path: route.inputGroup,
    element: (
      <Suspense fallback={<div></div>}>
        <FormInputGroups />
      </Suspense>
    ),
    route: Route,
    meta_title: "Input Groups",
  },
  {
    id: "34",
    path: route.gridandGutters,
    element: (
      <Suspense fallback={<div></div>}>
        <FormGridGutters />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Grid Gutters",
  },
  {
    id: "35",
    path: route.formMask,
    element: (
      <Suspense fallback={<div></div>}>
        <FormMask />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Mask",
  },
  {
    id: "36",
    path: route.fileUpload,
    element: (
      <Suspense fallback={<div></div>}>
        <FormFileupload />
      </Suspense>
    ),
    route: Route,
    meta_title: "File Upload",
  },
  {
    id: "37",
    path: route.horizontalForm,
    element: (
      <Suspense fallback={<div></div>}>
        <FormHorizontal />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Horizontal",
  },
  {
    id: "38",
    path: route.verticalForm,
    element: (
      <Suspense fallback={<div></div>}>
        <FormVertical />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Vertical",
  },
  {
    id: "39",
    path: route.floatingLable,
    element: (
      <Suspense fallback={<div></div>}>
        <FormFloatingLabels />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Floating Labels",
  },
  {
    id: "40",
    path: route.formValidation,
    element: (
      <Suspense fallback={<div></div>}>
        <FormValidation />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Validation",
  },
  {
    id: "41",
    path: route.formSelect,
    element: (
      <Suspense fallback={<div></div>}>
        <FormSelect />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Select",
  },
  {
    id: "42",
    path: route.formpicker,
    element: (
      <Suspense fallback={<div></div>}>
        <FormPickers />
      </Suspense>
    ),
    route: Route,
    meta_title: "Form Pickers",
  },
  {
    id: "43",
    path: route.formeditor,
    element: (
      <Suspense fallback={<div></div>}>
        <FormEditors />
      </Suspense>
    ),
    route: Route,
    meta_title: "Text Editor",
  },
  {
    id: "44",
    path: route.tablesBasic,
    element: (
      <Suspense fallback={<div></div>}>
        <TablesBasic />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tables Basic",
  },
  {
    id: "45",
    path: route.dataTables,
    element: (
      <Suspense fallback={<div></div>}>
        <DataTables />
      </Suspense>
    ),
    route: Route,
    meta_title: "Data Tables",
  },
  {
    id: "46",
    path: route.apexChat,
    element: (
      <Suspense fallback={<div></div>}>
        <UiApexchat />
      </Suspense>
    ),
    route: Route,
    meta_title: "Apex Chat",
  },
  {
    id: "47",
    path: route.fantawesome,
    element: (
      <Suspense fallback={<div></div>}>
        <IconFontawesome />
      </Suspense>
    ),
    route: Route,
    meta_title: "Fontawesome Icon",
  },
  {
    id: "48",
    path: route.tablericons,
    element: (
      <Suspense fallback={<div></div>}>
        <IconTabler />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tabler Icon",
  },
  {
    id: "49",
    path: route.bootstrapicons,
    element: (
      <Suspense fallback={<div></div>}>
        <IconBootstrap />
      </Suspense>
    ),
    route: Route,
    meta_title: "Bootstrap Icon",
  },
  {
    id: "50",
    path: route.remixicons,
    element: (
      <Suspense fallback={<div></div>}>
        <IconRemix />
      </Suspense>
    ),
    route: Route,
    meta_title: "Remix Icon",
  },
  {
    id: "51",
    path: route.iconicIcon,
    element: (
      <Suspense fallback={<div></div>}>
        <IconIonic />
      </Suspense>
    ),
    route: Route,
    meta_title: "Ionic Icon",
  },
  {
    id: "52",
    path: route.materialIcon,
    element: (
      <Suspense fallback={<div></div>}>
        <UiMaterialIcon />
      </Suspense>
    ),
    route: Route,
    meta_title: "Material Icon",
  },
  {
    id: "53",
    path: route.pe7icon,
    element: (
      <Suspense fallback={<div></div>}>
        <IconPe7 />
      </Suspense>
    ),
    route: Route,
    meta_title: "Pe7 Icon",
  },
  {
    id: "54",
    path: route.themifyIcon,
    element: (
      <Suspense fallback={<div></div>}>
        <IconThemify />
      </Suspense>
    ),
    route: Route,
    meta_title: "Themify Icon",
  },
  {
    id: "55",
    path: route.weatherIcon,
    element: (
      <Suspense fallback={<div></div>}>
        <IconWeatherIcon />
      </Suspense>
    ),
    route: Route,
    meta_title: "Weather Icon",
  },
  {
    id: "56",
    path: route.typicon,
    element: (
      <Suspense fallback={<div></div>}>
        <IcontTypicon />
      </Suspense>
    ),
    route: Route,
    meta_title: "Typicon Icon",
  },
  {
    id: "57",
    path: route.falgIcons,
    element: (
      <Suspense fallback={<div></div>}>
        <IconFlagIcon />
      </Suspense>
    ),
    route: Route,
    meta_title: "Flag Icon",
  },
  
  {
    id: "59",
    path: route.chat,
    element: (
      <Suspense fallback={<div></div>}>
        <Chat />
      </Suspense>
    ),
    route: Route,
    meta_title: "Chat",
  },
  {
    id: "60",
    path: route.videoCall,
    element: (
      <Suspense fallback={<div></div>}>
        <VideoCall />
      </Suspense>
    ),
    route: Route,
    meta_title: "Video Call",
  },
  {
    id: "61",
    path: route.audioCall,
    element: (
      <Suspense fallback={<div></div>}>
        <AudioCall />
      </Suspense>
    ),
    route: Route,
    meta_title: "Audio Call",
  },
  {
    id: "62",
    path: route.callHistory,
    element: (
      <Suspense fallback={<div></div>}>
        <CallHistory />
      </Suspense>
    ),
    route: Route,
    meta_title: "Call History",
  },
  {
    id: "63",
    path: route.calendar,
    element: (
      <Suspense fallback={<div></div>}>
        <Calendar />
      </Suspense>
    ),
    route: Route,
    meta_title: "Calendar",
  },
  {
    id: "64",
    path: route.email,
    element: (
      <Suspense fallback={<div></div>}>
        <Email />
      </Suspense>
    ),
    route: Route,
    meta_title: "Email",
  },
  {
    id: "65",
    path: route.emailReply,
    element: (
      <Suspense fallback={<div></div>}>
        <EmailReply />
      </Suspense>
    ),
    route: Route,
    meta_title: "Email Reply",
  },
  {
    id: "66",
    path: route.todo,
    element: (
      <Suspense fallback={<div></div>}>
        <Todo />
      </Suspense>
    ),
    route: Route,
    meta_title: "Todo",
  },
  {
    id: "67",
    path: route.todoList,
    element: (
      <Suspense fallback={<div></div>}>
        <TodoList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Todo List",
  },
  {
    id: "68",
    path: route.notes,
    element: (
      <Suspense fallback={<div></div>}>
        <Notes />
      </Suspense>
    ),
    route: Route,
    meta_title: "Notes",
  },
  {
    id: "69",
    path: route.fileManager,
    element: (
      <Suspense fallback={<div></div>}>
        <FileManager />
      </Suspense>
    ),
    route: Route,
    meta_title: "File Manager",
  },
  {
    id: "70",
    path: route.socialfeed,
    element: (
      <Suspense fallback={<div></div>}>
        <SocialFeed />
      </Suspense>
    ),
    route: Route,
    meta_title: "Social Feed",
  },
  {
    id: "71",
    path: route.kanbanview,
    element: (
      <Suspense fallback={<div></div>}>
        <KanbanView />
      </Suspense>
    ),
    route: Route,
    meta_title: "Kanban View",
  },
  {
    id: "72",
    path: route.invoice,
    element: (
      <Suspense fallback={<div></div>}>
        <Invoice />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice",
  },
  {
    id: "73",
    path: route.addInvoices,
    element: (
      <Suspense fallback={<div></div>}>
        <AddInvoices />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice",
  },
  {
    id: "74",
    path: route.editInvoices,
    element: (
      <Suspense fallback={<div></div>}>
        <EditInvoices />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice",
  },
  {
    id: "75",
    path: route.invoice_details,
    element: (
      <Suspense fallback={<div></div>}>
        <InvoiceDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice",
  },
  {
    id: "76",
    path: route.dealsGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <DealsGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deals Grid",
  },
  {
    id: "77",
    path: route.dealsList,
    element: (
      <Suspense fallback={<div></div>}>
        <DealsList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deals List",
  },
  {
    id: "78",
    path: route.dealsDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <DealsDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deals Details",
  },
  {
    id: "79",
    path: route.leads,
    element: (
      <Suspense fallback={<div></div>}>
        <LeadsGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Leads Grid",
  },
  {
    id: "80",
    path: route.leadsList,
    element: (
      <Suspense fallback={<div></div>}>
        <LeadsList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Leads List",
  },
  {
    id: "81",
    path: route.leadsDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <LeadsDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Leads Details",
  },
  {
    id: "82",
    path: route.pipeline,
    element: (
      <Suspense fallback={<div></div>}>
        <Pipeline />
      </Suspense>
    ),
    route: Route,
    meta_title: "Pipeline",
  },
  {
    id: "83",
    path: route.campaign,
    element: (
      <Suspense fallback={<div></div>}>
        <Campaign />
      </Suspense>
    ),
    route: Route,
    meta_title: "Campaign",
  },
  {
    id: "84",
    path: route.campaignComplete,
    element: (
      <Suspense fallback={<div></div>}>
        <CampaignComplete />
      </Suspense>
    ),
    route: Route,
    meta_title: "Campaign Complete",
  },
  {
    id: "85",
    path: route.campaignArchieve,
    element: (
      <Suspense fallback={<div></div>}>
        <CampaignArchieve />
      </Suspense>
    ),
    route: Route,
    meta_title: "Campaign Archieve",
  },
  {
    id: "86",
    path: route.projectsGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <ProjectsGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Project Grid",
  },
  {
    id: "87",
    path: route.projectsList,
    element: (
      <Suspense fallback={<div></div>}>
        <ProjectList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Project List",
  },
  {
    id: "88",
    path: route.projectDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <ProjectDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Project Details",
  },
  {
    id: "89",
    path: route.contactList,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact List",
  },
  {
    id: "90",
    path: route.contactGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact Grid",
  },
  {
    id: "91",
    path: route.leadsDashboard,
    element: (
      <Suspense fallback={<div></div>}>
        <LeadsDashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deals Dashboard",
  },
  {
    id: "92",
    path: route.companiesList,
    element: (
      <Suspense fallback={<div></div>}>
        <CompaniesList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Companies List",
  },
  {
    id: "93",
    path: route.companiesGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <CompaniesGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "companies Grid",
  },
  {
    id: "94",
    path: route.contactDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact Details",
  },
  {
    id: "95",
    path: route.companiesDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <CompaniesDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Companies Details",
  },
  {
    id: "96",
    path: route.tasks,
    element: (
      <Suspense fallback={<div></div>}>
        <Tasks />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tasks",
  },
  {
    id: "97",
    path: route.activities,
    element: (
      <Suspense fallback={<div></div>}>
        <Activities />
      </Suspense>
    ),
    route: Route,
    meta_title: "Activities",
  },
  {
    id: "98",
    path: route.payments,
    element: (
      <Suspense fallback={<div></div>}>
        <Payments />
      </Suspense>
    ),
    route: Route,
    meta_title: "Payments",
  },
  {
    id: "99",
    path: route.analytics,
    element: (
      <Suspense fallback={<div></div>}>
        <Analytics />
      </Suspense>
    ),
    route: Route,
    meta_title: "Analytics",
  },
  {
    id: "100",
    path: route.sources,
    element: (
      <Suspense fallback={<div></div>}>
        <Sources />
      </Suspense>
    ),
    route: Route,
    meta_title: "Sources",
  },
  {
    id: "101",
    path: route.lostReason,
    element: (
      <Suspense fallback={<div></div>}>
        <LostReason />
      </Suspense>
    ),
    route: Route,
    meta_title: "Lost Reason",
  },
  {
    id: "102",
    path: route.contactStage,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactStage />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact Stage",
  },
  {
    id: "103",
    path: route.industry,
    element: (
      <Suspense fallback={<div></div>}>
        <Industry />
      </Suspense>
    ),
    route: Route,
    meta_title: "Industry",
  },
  {
    id: "104",
    path: route.calls,
    element: (
      <Suspense fallback={<div></div>}>
        <Calls />
      </Suspense>
    ),
    route: Route,
    meta_title: "Calls",
  },
  {
    id: "105",
    path: route.pages,
    element: (
      <Suspense fallback={<div></div>}>
        <Pages />
      </Suspense>
    ),
    route: Route,
    meta_title: "Pages",
  },
  {
    id: "106",
    path: route.addpages,
    element: (
      <Suspense fallback={<div></div>}>
        <AddPages />
      </Suspense>
    ),
    route: Route,
    meta_title: "Add Pages",
  },
  {
    id: "107",
    path: route.editpages,
    element: (
      <Suspense fallback={<div></div>}>
        <EditPages />
      </Suspense>
    ),
    route: Route,
    meta_title: "Edit Pages",
  },
  {
    id: "108",
    path: route.blog,
    element: (
      <Suspense fallback={<div></div>}>
        <Blogs />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blogs",
  },
  {
    id: "109",
    path: route.addblog,
    element: (
      <Suspense fallback={<div></div>}>
        <AddBlog />
      </Suspense>
    ),
    route: Route,
    meta_title: "Add Blogs",
  },
  {
    id: "110",
    path: route.editblog,
    element: (
      <Suspense fallback={<div></div>}>
        <EditBlog />
      </Suspense>
    ),
    route: Route,
    meta_title: "Edit Blogs",
  },
  {
    id: "111",
    path: route.blogCategories,
    element: (
      <Suspense fallback={<div></div>}>
        <BlogCategories />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blogs Categories",
  },
  {
    id: "112",
    path: route.blogComment,
    element: (
      <Suspense fallback={<div></div>}>
        <BlogComments />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blogs Comments",
  },

  //Add Below

  {
    id: "113",
    path: route.activityCalls,
    element: (
      <Suspense fallback={<div></div>}>
        <ActivitiesCalls />
      </Suspense>
    ),
    route: Route,
    meta_title: "Activities Calls",
  },
  {
    id: "114",
    path: route.activityMail,
    element: (
      <Suspense fallback={<div></div>}>
        <ActivitiesMails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Activities Mails",
  },
  {
    id: "115",
    path: route.activityTask,
    element: (
      <Suspense fallback={<div></div>}>
        <ActivitiesTasks />
      </Suspense>
    ),
    route: Route,
    meta_title: "Activities Tasks",
  },
  {
    id: "116",
    path: route.activityMeeting,
    element: (
      <Suspense fallback={<div></div>}>
        <ActivitiesMeetings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Activities Meetings",
  },
  {
    id: "117",
    path: route.ContractsList,
    element: (
      <Suspense fallback={<div></div>}>
        <ContractsList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contracts List",
  },
  {
    id: "118",
    path: route.ContractsGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <ContractsGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contracts Grid",
  },
  {
    id: "119",
    path: route.ProposalsList,
    element: (
      <Suspense fallback={<div></div>}>
        <ProposalsList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Proposals List",
  },
  {
    id: "120",
    path: route.ProposalsGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <ProposalsGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Proposals Grid",
  },
  {
    id: "121",
    path: route.InvoiceList,
    element: (
      <Suspense fallback={<div></div>}>
        <InvoicesList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoices List",
  },
  {
    id: "122",
    path: route.InvoiceGrid,
    element: (
      <Suspense fallback={<div></div>}>
        <InvoicesGrid />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoices Grid",
  },
  {
    id: "123",
    path: route.blogTags,
    element: (
      <Suspense fallback={<div></div>}>
        <BlogTags />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blog Tags",
  },
  {
    id: "124",
    path: route.countries,
    element: (
      <Suspense fallback={<div></div>}>
        <Countries />
      </Suspense>
    ),
    route: Route,
    meta_title: "Countries",
  },
  {
    id: "125",
    path: route.states,
    element: (
      <Suspense fallback={<div></div>}>
        <States />
      </Suspense>
    ),
    route: Route,
    meta_title: "States",
  },
  {
    id: "126",
    path: route.cities,
    element: (
      <Suspense fallback={<div></div>}>
        <Cities />
      </Suspense>
    ),
    route: Route,
    meta_title: "Cities",
  },
  {
    id: "127",
    path: route.testimonials,
    element: (
      <Suspense fallback={<div></div>}>
        <Testimonials />
      </Suspense>
    ),
    route: Route,
    meta_title: "Testimonials",
  },
  {
    id: "128",
    path: route.estimationList,
    element: (
      <Suspense fallback={<div></div>}>
        <EstimationList />
      </Suspense>
    ),
    route: Route,
    meta_title: "Estimation List",
  },
  {
    id: "129",
    path: route.estimationKanban,
    element: (
      <Suspense fallback={<div></div>}>
        <Estimations />
      </Suspense>
    ),
    route: Route,
    meta_title: "Estimation List",
  },
  {
    id: "130",
    path: route.superadminDashboard,
    element: (
      <Suspense fallback={<div></div>}>
        <SuperAdminDashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Dashboard",
  },
  {
    id: "131",
    path: route.superadminCompany,
    element: (
      <Suspense fallback={<div></div>}>
        <SuperAdminCompany />
      </Suspense>
    ),
    route: Route,
    meta_title: "Company",
  },
  {
    id: "132",
    path: route.superadminSubscription,
    element: (
      <Suspense fallback={<div></div>}>
        <SuperAdminSubscription />
      </Suspense>
    ),
    route: Route,
    meta_title: "Subscription",
  },
  {
    id: "133",
    path: route.superadminPackagelist,
    element: (
      <Suspense fallback={<div></div>}>
        <SuperAdminPackage />
      </Suspense>
    ),
    route: Route,
    meta_title: "Package",
  },
  {
    id: "134",
    path: route.superadminDomain,
    element: (
      <Suspense fallback={<div></div>}>
        <SuperAdminDomains />
      </Suspense>
    ),
    route: Route,
    meta_title: "Domain",
  },
  {
    id: "135",
    path: route.superadminPurchaseTransaction,
    element: (
      <Suspense fallback={<div></div>}>
        <PurchaseTransaction />
      </Suspense>
    ),
    route: Route,
    meta_title: "Purchase Transaction",
  },
  {
    id: "136",
    path: route.manageusers,
    element: (
      <Suspense fallback={<div></div>}>
        <ManageUsers />
      </Suspense>
    ),
    route: Route,
    meta_title: "Manage Users",
  },
  {
    id: "137",
    path: route.leadReports,
    element: (
      <Suspense fallback={<div></div>}>
        <LeadReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Lead Reports",
  },
  {
    id: "138",
    path: route.dealReports,
    element: (
      <Suspense fallback={<div></div>}>
        <DealReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Deal Reports",
  },
  {
    id: "139",
    path: route.contactReports,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact Reports",
  },
  {
    id: "140",
    path: route.companyReports,
    element: (
      <Suspense fallback={<div></div>}>
        <CompanyReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Company Reports",
  },
  {
    id: "141",
    path: route.projectReports,
    element: (
      <Suspense fallback={<div></div>}>
        <ProjectReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Project Reports",
  },
  {
    id: "142",
    path: route.faq,
    element: (
      <Suspense fallback={<div></div>}>
        <Faq />
      </Suspense>
    ),
    route: Route,
    meta_title: "Faq",
  },
  {
    id: "143",
    path: route.rolesPermissions,
    element: (
      <Suspense fallback={<div></div>}>
        <RolesPermissions />
      </Suspense>
    ),
    route: Route,
    meta_title: "Role & Permissions",
  },
  {
    id: "144",
    path: route.permissions,
    element: (
      <Suspense fallback={<div></div>}>
        <Permission />
      </Suspense>
    ),
    route: Route,
    meta_title: "Permission",
  },
  {
    id: "145",
    path: route.deleteRequest,
    element: (
      <Suspense fallback={<div></div>}>
        <DeleteRequest />
      </Suspense>
    ),
    route: Route,
    meta_title: "Delete Request",
  },
  {
    id: "146",
    path: route.membershipplan,
    element: (
      <Suspense fallback={<div></div>}>
        <MembershipPlans />
      </Suspense>
    ),
    route: Route,
    meta_title: "Membership Plans",
  },
  {
    id: "147",
    path: route.membershipAddon,
    element: (
      <Suspense fallback={<div></div>}>
        <MembershipAddons />
      </Suspense>
    ),
    route: Route,
    meta_title: "Membership Addons",
  },
  {
    id: "148",
    path: route.membershipTransaction,
    element: (
      <Suspense fallback={<div></div>}>
        <MembershipTransactions />
      </Suspense>
    ),
    route: Route,
    meta_title: "Membership Transactions",
  },
  {
    id: "149",
    path: route.profile,
    element: (
      <Suspense fallback={<div></div>}>
        <ProfileSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Profile Settings",
  },
  {
    id: "150",
    path: route.security,
    element: (
      <Suspense fallback={<div></div>}>
        <SecuritySettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Security Settings",
  },
  {
    id: "151",
    path: route.notification,
    element: (
      <Suspense fallback={<div></div>}>
        <Notification />
      </Suspense>
    ),
    route: Route,
    meta_title: "Notification Settings",
  },
  {
    id: "152",
    path: route.connectedApps,
    element: (
      <Suspense fallback={<div></div>}>
        <ConnectedApps />
      </Suspense>
    ),
    route: Route,
    meta_title: "Connected Apps",
  },
  {
    id: "153",
    path: route.companySettings,
    element: (
      <Suspense fallback={<div></div>}>
        <CompanySettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Company Settings",
  },
  {
    id: "154",
    path: route.localization,
    element: (
      <Suspense fallback={<div></div>}>
        <Localization />
      </Suspense>
    ),
    route: Route,
    meta_title: "Localization Settings",
  },
  {
    id: "155",
    path: route.prefixes,
    element: (
      <Suspense fallback={<div></div>}>
        <Prefixes />
      </Suspense>
    ),
    route: Route,
    meta_title: "Prefixes Settings",
  },
  {
    id: "156",
    path: route.preference,
    element: (
      <Suspense fallback={<div></div>}>
        <PreferenceSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Preference Settings",
  },
  {
    id: "157",
    path: route.appearance,
    element: (
      <Suspense fallback={<div></div>}>
        <AppearanceSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Appearance Settings",
  },
  {
    id: "158",
    path: route.languageWeb,
    element: (
      <Suspense fallback={<div></div>}>
        <LanguageSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Language Settings",
  },
  {
    id: "159",
    path: route.invoiceSettings,
    element: (
      <Suspense fallback={<div></div>}>
        <InvoiceSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice Settings",
  },
  {
    id: "160",
    path: route.printers,
    element: (
      <Suspense fallback={<div></div>}>
        <Printers />
      </Suspense>
    ),
    route: Route,
    meta_title: "Printers Settings",
  },
  {
    id: "161",
    path: route.customFields,
    element: (
      <Suspense fallback={<div></div>}>
        <CustomFieldsSetting />
      </Suspense>
    ),
    route: Route,
    meta_title: "Custom Fields Settings",
  },
  {
    id: "162",
    path: route.emailSettings,
    element: (
      <Suspense fallback={<div></div>}>
        <EmailSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Email Settings",
  },
  {
    id: "163",
    path: route.smsGateways,
    element: (
      <Suspense fallback={<div></div>}>
        <SmsGateways />
      </Suspense>
    ),
    route: Route,
    meta_title: "SMS Gateway Settings",
  },
  {
    id: "164",
    path: route.gdprCookies,
    element: (
      <Suspense fallback={<div></div>}>
        <GdprCookies />
      </Suspense>
    ),
    route: Route,
    meta_title: "GDRP Cookies Settings",
  },
  {
    id: "165",
    path: route.taskReports,
    element: (
      <Suspense fallback={<div></div>}>
        <TaskReports />
      </Suspense>
    ),
    route: Route,
    meta_title: "Task Reports",
  },
  {
    id: "166",
    path: route.paymentGateways,
    element: (
      <Suspense fallback={<div></div>}>
        <PaymentGateways />
      </Suspense>
    ),
    route: Route,
    meta_title: "Payment Gateways",
  },
  {
    id: "167",
    path: route.bankAccounts,
    element: (
      <Suspense fallback={<div></div>}>
        <BankAccounts />
      </Suspense>
    ),
    route: Route,
    meta_title: "Bank Accounts",
  },
  {
    id: "168",
    path: route.taxRates,
    element: (
      <Suspense fallback={<div></div>}>
        <TaxRates />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tax Rates",
  },
  {
    id: "169",
    path: route.currencies,
    element: (
      <Suspense fallback={<div></div>}>
        <Currencies />
      </Suspense>
    ),
    route: Route,
    meta_title: "Currencies",
  },
  {
    id: "170",
    path: route.sitemap,
    element: (
      <Suspense fallback={<div></div>}>
        <Sitemap />
      </Suspense>
    ),
    route: Route,
    meta_title: "Currencies",
  },
  {
    id: "171",
    path: route.clearCache,
    element: (
      <Suspense fallback={<div></div>}>
        <ClearCache />
      </Suspense>
    ),
    route: Route,
    meta_title: "Clear Cache",
  },
  {
    id: "172",
    path: route.storage,
    element: (
      <Suspense fallback={<div></div>}>
        <Storage />
      </Suspense>
    ),
    route: Route,
    meta_title: "Storage",
  },
  {
    id: "173",
    path: route.cronjob,
    element: (
      <Suspense fallback={<div></div>}>
        <Cronjob />
      </Suspense>
    ),
    route: Route,
    meta_title: "Cronjob",
  },
  {
    id: "174",
    path: route.banIpAddrress,
    element: (
      <Suspense fallback={<div></div>}>
        <BanIpAddress />
      </Suspense>
    ),
    route: Route,
    meta_title: "Ban Ip Address",
  },
  {
    id: "175",
    path: route.systemBackup,
    element: (
      <Suspense fallback={<div></div>}>
        <SystemBackup />
      </Suspense>
    ),
    route: Route,
    meta_title: "System Backup",
  },
  {
    id: "176",
    path: route.databaseBackup,
    element: (
      <Suspense fallback={<div></div>}>
        <DatabaseBackup />
      </Suspense>
    ),
    route: Route,
    meta_title: "Database Backup",
  },
  {
    id: "177",
    path: route.systemUpdate,
    element: (
      <Suspense fallback={<div></div>}>
        <SystemUpdate />
      </Suspense>
    ),
    route: Route,
    meta_title: "System Update",
  },
  {
    id: "178",
    path: route.contactMessages,
    element: (
      <Suspense fallback={<div></div>}>
        <ContactMessages />
      </Suspense>
    ),
    route: Route,
    meta_title: "Contact Message",
  },
  {
    id: "179",
    path: route.tickets,
    element: (
      <Suspense fallback={<div></div>}>
        <Tickets />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tickets",
  },
  {
    id: "180",
    path: route.ticketsDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <TicketDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tickets Details",
  },
  {
    id: "181",
    path: route.projectDashboard,
    element: (
      <Suspense fallback={<div></div>}>
        <ProjectDashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Project Dashboard",
  },
  {
    id: "182",
    path: route.layoutMini,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout Mini",
  },
  {
    id: "183",
    path: route.hoverView,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout Hoverview",
  },
  {
    id: "184",
    path: route.hidden,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout Hidden",
  },
  {
    id: "185",
    path: route.fullWidth,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout Fullwidth",
  },
  {
    id: "186",
    path: route.layoutRtl,
    element: (
      <Suspense fallback={<div></div>}>
        <LayoutRTL />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout RTL",
  },
  {
    id: "187",
    path: route.Dark,
    element: (
      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Layout Dark",
  },
  {
    id: "188",
    path: route.notificationbell,
    element: (
      <Suspense fallback={<div></div>}>
        <Notifications />
      </Suspense>
    ),
    route: Route,
    meta_title: "Notification",
  },
  {
    id: "189",
    path: route.blogDetails,
    element: (
      <Suspense fallback={<div></div>}>
        <BlogDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blog Details",
  },
  {
    id: "190",
    path: route.blankPage,
    element: (
      <Suspense fallback={<div></div>}>
        <BlankPage />
      </Suspense>
    ),
    route: Route,
    meta_title: "Blank Page",
  },
    {
    id: "191",
    path: route.accordion,
    element: (
      <Suspense fallback={<div></div>}>
        <UiAccordion />
      </Suspense>
    ),
    route: Route,
    meta_title: "Accordion",
  },
];

export const authRoutes = [
  {
    id: "1",
    path: route.login,
    element: (
      <Suspense fallback={<div></div>}>
        <Login />
      </Suspense>
    ),
    route: Route,
    meta_title: "Sign In",
  },
  {
    id: "2",
    path: route.register,
    element: (
      <Suspense fallback={<div></div>}>
        <Register />
      </Suspense>
    ),
    route: Route,
    meta_title: "Sign Up",
  },
  {
    id: "3",
    path: route.forgotPassword,
    element: (
      <Suspense fallback={<div></div>}>
        <ForgotPassword />
      </Suspense>
    ),
    route: Route,
    meta_title: "Forgot Password",
  },
  {
    id: "4",
    path: route.emailVerification,
    element: (
      <Suspense fallback={<div></div>}>
        <EmailVerification />
      </Suspense>
    ),
    route: Route,
    meta_title: "Email Verification",
  },
  {
    id: "5",
    path: route.twoStepVerification,
    element: (
      <Suspense fallback={<div></div>}>
        <TwoStepVerification />
      </Suspense>
    ),
    route: Route,
    meta_title: "Two Step Verification",
  },
  {
    id: "6",
    path: route.resetPassword,
    element: (
      <Suspense fallback={<div></div>}>
        <ResetPassword />
      </Suspense>
    ),
    route: Route,
    meta_title: "Reset Password",
  },
  {
    id: "7",
    path: route.success,
    element: (
      <Suspense fallback={<div></div>}>
        <Success />
      </Suspense>
    ),
    route: Route,
    meta_title: "Success",
  },
  {
    id: "8",
    path: route.lockScreen,
    element: (
      <Suspense fallback={<div></div>}>
        <LockScreen />
      </Suspense>
    ),
    route: Route,
    meta_title: "Lock Screen",
  },
];
