import { all_routes } from "../../routes/all_routes";
import type { SidebarMenuItem } from "./sidebar";

const route = all_routes;

export interface SidebarDataItem {
  tittle: string;
  submenuItems: SidebarMenuItem[];
}

export const SidebarData: SidebarDataItem[] = [
  {
    tittle: "MAIN MENU",
    submenuItems: [
      {
        label: "Dashboard",
        link: "#",
        submenu: true,
        icon: "dashboard",
        submenuItems: [
          // { label: "Deals Dashboard", link: route.dealsDashboard, submenu: false, submenuItems: [] },
          // { label: "Leads Dashboard", link: route.leadsDashboard, submenu: false, submenuItems: [] },
          // { label: "Project Dashboard", link: route.projectDashboard, submenu: false, submenuItems: [] },
          { label: "Software Dashboard", link: route.softwareDashboard, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Applications",
        link: "#",
        submenu: true,
        icon: "brand-airtable",
        submenuItems: [
          { label: "Chat", link: route.chat, submenu: false, submenuItems: [] },
          {
            label: "Call",
            link: "#",
            submenu: true,
            submenuItems: [
              { label: "Video Call", link: route.videoCall, submenu: false, submenuItems: [] },
              { label: "Audio Call", link: route.audioCall, submenu: false, submenuItems: [] },
              { label: "Call History", link: route.callHistory, submenu: false, submenuItems: [] },
            ],
          },
          { 
            label: "Calendar", 
            link: route.calendar, 
            submenu: false, 
            submenuItems: [],
          },
          { 
            label: "Email", 
            link: route.email, 
            submenu: false, 
            submenuItems: [],
            relatedRoutes: [route.email, route.emailReply] 
          },
          { label: "Task Template", link: route.taskTemplate, submenu: false, submenuItems: [],   relatedRoutes: [route.todoList]  },
          { label: "Task Template 2", link: route.taskTemplate2, submenu: false, submenuItems: [],   relatedRoutes: [route.todoList]  },
          { label: "To Do", link: route.todo, submenu: false, submenuItems: [],   relatedRoutes: [route.todoList]  },
          
          { label: "Notes", link: route.notes, submenu: false, submenuItems: [] },
          { label: "File Manager", link: route.fileManager, submenu: false, submenuItems: [] },
          { label: "Social Feed", link: route.socialfeed, submenu: false, submenuItems: [] },
          { label: "Kanban", link: route.kanbanview, submenu: false, submenuItems: [] },
          { label: "Invoices", link: route.invoice, submenu: false, submenuItems: [], relatedRoutes: [route.addInvoices,route.editInvoices,route.invoice_details] },
        ],
      },
      {
        label: "Super Admin",
        link: "#",
        submenu: true,
        icon: "user-star",
        submenuItems: [
          { label: "Dashboard", link: route.superadminDashboard, submenu: false, submenuItems: [] },
          { label: "Companies", link: route.superadminCompany, submenu: false, submenuItems: [] },
          { label: "Subscriptions", link: route.superadminSubscription, submenu: false, submenuItems: [] },
          { label: "Packages", link: route.superadminPackagelist, submenu: false, submenuItems: [] },
          { label: "Domain", link: route.superadminDomain, submenu: false, submenuItems: [] },
          { label: "Purchase Transaction", link: route.superadminPurchaseTransaction, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Layouts",
        link: "#",
        submenu: true,
        icon: "layout-grid",
        submenuItems: [
          { label: "Mini", link: route.layoutMini, submenu: false, submenuItems: [] },
          { label: "Hover View", link: route.hoverView, submenu: false, submenuItems: [] },
          { label: "Hidden", link: route.hidden, submenu: false, submenuItems: [] },
          { label: "Full Width", link: route.fullWidth, submenu: false, submenuItems: [] },
          { label: "RTL", link: route.layoutRtl, submenu: false, submenuItems: [] },
          { label: "Dark", link: route.Dark, submenu: false, submenuItems: [] },
        ],
      },
    ],
  },
  {
    tittle: "CRM",
    submenuItems: [
      { label: "Contacts", link: route.contactGrid, submenu: false, icon: "user-up", submenuItems: [],relatedRoutes: [route.contactDetails] },
      { label: "Companies", link: route.companiesGrid, submenu: false, icon: "building-community", submenuItems: [] },
      { label: "Deals", link: route.dealsGrid, submenu: false, icon: "medal", submenuItems: [],relatedRoutes: [route.dealsList,route.dealsDetails] },
      { label: "Leads", link: route.leads, submenu: false, icon: "chart-arcs", submenuItems: [] ,relatedRoutes: [route.leadsList,route.leadsDetails] },
      { label: "Pipeline", link: route.pipeline, submenu: false, icon: "timeline-event-exclamation", submenuItems: [] },
      { label: "Campaign", link: route.campaign, submenu: false, icon: "brand-campaignmonitor", submenuItems: [],relatedRoutes: [route.campaignComplete,route.campaignArchieve] },
      { label: "Projects", link: route.projectsGrid, submenu: false, icon: "atom-2", submenuItems: [],relatedRoutes: [route.projectsList,route.projectDetails]  },
      { label: "Tasks", link: route.tasks, submenu: false, icon: "list-check", submenuItems: [] },
      { label: "Proposals", link: route.ProposalsGrid, submenu: false, icon: "file-star", submenuItems: [] },
      { label: "Contracts", link: route.ContractsGrid, submenu: false, icon: "file-check", submenuItems: [] },
      { label: "Estimations", link: route.estimationKanban, submenu: false, icon: "file-report", submenuItems: [] },
      { label: "Invoices", link: route.InvoiceGrid, submenu: false, icon: "file-invoice", submenuItems: [] },
      { label: "Payments", link: route.payments, submenu: false, icon: "report-money", submenuItems: [] },
      { label: "Analytics", link: route.analytics, submenu: false, icon: "chart-bar", submenuItems: [] },
      { label: "Activities", link: route.activities, submenu: false, icon: "bounce-right", submenuItems: [],relatedRoutes: [route.activityCalls,route.activityMail,route.email,route.activityTask,route.activityMeeting] },
    ],
  },
  {
    tittle: "Reports",
    submenuItems: [
      {
        label: "Reports",
        link: "#",
        submenu: true,
        icon: "report-analytics",
        submenuItems: [
          { label: "Lead Reports", link: route.leadReports, submenu: false, submenuItems: [] },
          { label: "Deal Reports", link: route.dealReports, submenu: false, submenuItems: [] },
          { label: "Contact Reports", link: route.contactReports, submenu: false, submenuItems: [] },
          { label: "Company Reports", link: route.companyReports, submenu: false, submenuItems: [] },
          { label: "Project Reports", link: route.projectReports, submenu: false, submenuItems: [] },
          { label: "Task Reports", link: route.taskReports, submenu: false, submenuItems: [] },
        ],
      },
    ],
  },
  {
    tittle: "CRM Settings",
    submenuItems: [
      { label: "Sources", link: route.sources, submenu: false, icon: "artboard", submenuItems: [] },
      { label: "Lost Reason", link: route.lostReason, submenu: false, icon: "message-exclamation", submenuItems: [] },
      { label: "Contact Stage", link: route.contactStage, submenu: false, icon: "steam", submenuItems: [] },
      { label: "Industry", link: route.industry, submenu: false, icon: "building-factory", submenuItems: [] },
      { label: "Calls", link: route.calls, submenu: false, icon: "phone-check", submenuItems: [] },
    ],
  },
  {
    tittle: "User Management",
    submenuItems: [
      { label: "Manage Users", link: route.manageusers, submenu: false, icon: "users", submenuItems: [] },
      { label: "Roles & Permissions", link: route.rolesPermissions, submenu: false, icon: "user-shield", submenuItems: [],relatedRoutes: [route.permissions]  },
      { label: "Delete Request", link: route.deleteRequest, submenu: false, icon: "flag-question", submenuItems: [] },
    ],
  },
  {
    tittle: "Membership",
    submenuItems: [
      {
        label: "Membership",
        link: "#",
        submenu: true,
        icon: "brand-apple-podcast",
        submenuItems: [
          { label: "Membership Plans", link: route.membershipplan, submenu: false, submenuItems: [] },
          { label: "Membership Addons", link: route.membershipAddon, submenu: false, submenuItems: [] },
          { label: "Transactions", link: route.membershipTransaction, submenu: false, submenuItems: [] },
        ],
      },
    ],
  },
  {
    tittle: "Content",
    submenuItems: [
      { label: "Pages", link: route.pages, submenu: false, icon: "page-break", submenuItems: [],relatedRoutes: [route.addpages,route.editpages]  },
      {
        label: "Blog",
        link: "#",
        submenu: true,
        icon: "brand-blogger",
        submenuItems: [
          { label: "All Blogs", link: route.blog, submenu: false, submenuItems: [] },
          { label: "Blog Categories", link: route.blogCategories, submenu: false, submenuItems: [] },
          { label: "Blog Comments", link: route.blogComment, submenu: false, submenuItems: [] },
          { label: "Blog Tags", link: route.blogTags, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Location",
        link: "#",
        submenu: true,
        icon: "map-pin-pin",
        submenuItems: [
          { label: "Countries", link: route.countries, submenu: false, submenuItems: [] },
          { label: "States", link: route.states, submenu: false, submenuItems: [] },
          { label: "Cities", link: route.cities, submenu: false, submenuItems: [] },
        ],
      },
      { label: "Testimonials", link: route.testimonials, submenu: false, icon: "quote", submenuItems: [] },
      { label: "FAQ", link: route.faq, submenu: false, icon: "question-mark", submenuItems: [] },
    ],
  },
  {
    tittle: "Support",
    submenuItems: [
      { label: "Contact Messages", link: route.contactMessages, submenu: false, icon: "message-check", submenuItems: [] },
      { label: "Tickets", link: route.tickets, submenu: false, icon: "ticket", submenuItems: [] },
    ],
  },
  {
    tittle: "Settings",
    submenuItems: [
      {
        label: "General Settings",
        link: "#",
        submenu: true,
        icon: "settings-cog",
        submenuItems: [
          { label: "Profile", link: route.profile, submenu: false, submenuItems: [] },
          { label: "Security", link: route.security, submenu: false, submenuItems: [] },
          { label: "Notifications", link: route.notification, submenu: false, submenuItems: [] },
          { label: "Connected Apps", link: route.connectedApps, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Website Settings",
        link: "#",
        submenu: true,
        icon: "world-cog",
        submenuItems: [
          { label: "Company Settings", link: route.companySettings, submenu: false, submenuItems: [] },
          { label: "Localization", link: route.localization, submenu: false, submenuItems: [] },
          { label: "Prefixes", link: route.prefixes, submenu: false, submenuItems: [] },
          { label: "Preference", link: route.preference, submenu: false, submenuItems: [] },
          { label: "Appearance", link: route.appearance, submenu: false, submenuItems: [] },
          { label: "Language", link: route.language, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "App Settings",
        link: "#",
        submenu: true,
        icon: "apps",
        submenuItems: [
          { label: "Invoice Settings", link: route.invoiceSettings, submenu: false, submenuItems: [] },
          { label: "Printers", link: route.printers, submenu: false, submenuItems: [] },
          { label: "Custom Fields", link: route.customFields, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "System Settings",
        link: "#",
        submenu: true,
        icon: "device-laptop",
        submenuItems: [
          { label: "Email Settings", link: route.emailSettings, submenu: false, submenuItems: [] },
          { label: "SMS Gateways", link: route.smsGateways, submenu: false, submenuItems: [] },
          { label: "GDPR Cookies", link: route.gdprCookies, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Financial Settings",
        link: "#",
        submenu: true,
        icon: "moneybag",
        submenuItems: [
          { label: "Payment Gateways", link: route.paymentGateways, submenu: false, submenuItems: [] },
          { label: "Bank Accounts", link: route.bankAccounts, submenu: false, submenuItems: [] },
          { label: "Tax Rates", link: route.taxRates, submenu: false, submenuItems: [] },
          { label: "Currencies", link: route.currencies, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Other Settings",
        link: "#",
        submenu: true,
        icon: "settings-2",
        submenuItems: [
          { label: "Sitemap", link: route.sitemap, submenu: false, submenuItems: [] },
          { label: "Clear Cache", link: route.clearCache, submenu: false, submenuItems: [] },
          { label: "Storage", link: route.storage, submenu: false, submenuItems: [] },
          { label: "Cronjob", link: route.cronjob, submenu: false, submenuItems: [] },
          { label: "Ban IP Address", link: route.banIpAddrress, submenu: false, submenuItems: [] },
          { label: "System Backup", link: route.systemBackup, submenu: false, submenuItems: [] },
          { label: "Database Backup", link: route.databaseBackup, submenu: false, submenuItems: [] },
          { label: "System Update", link: route.systemUpdate, submenu: false, submenuItems: [] },
        ],
      },
    ],
  },
  {
    tittle: "Pages",
    submenuItems: [
      {
        label: "Authentication",
        link: "#",
        submenu: true,
        icon: "lock-square-rounded",
        submenuItems: [
          { label: "Login", link: route.login, submenu: false, submenuItems: [] },
          { label: "Register", link: route.register, submenu: false, submenuItems: [] },
          { label: "Forgot Password", link: route.forgotPassword, submenu: false, submenuItems: [] },
          { label: "Reset Password", link: route.resetPassword, submenu: false, submenuItems: [] },
          { label: "Email Verification", link: route.emailVerification, submenu: false, submenuItems: [] },
          { label: "2 Step Verification", link: route.twoStepVerification, submenu: false, submenuItems: [] },
          { label: "Lock Screen", link: route.lockScreen, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Error Pages",
        link: "#",
        submenu: true,
        icon: "error-404",
        submenuItems: [
          { label: "404 Error", link: route.error404, submenu: false, submenuItems: [] },
          { label: "500 Error", link: route.error500, submenu: false, submenuItems: [] },
        ],
      },
      { label: "Blank Page", link: route.blankPage, submenu: false, icon: "file", submenuItems: [] },
      { label: "Coming Soon", link: route.comingSoon, submenu: false, icon: "inner-shadow-top-right", submenuItems: [] },
      { label: "Under Maintenance", link: route.underMaintenance, submenu: false, icon: "info-triangle", submenuItems: [] },
    ],
  },
  {
    tittle: "UI Interface",
    submenuItems: [
      {
        label: "Base UI",
        link: "#",
        submenu: true,
        icon: "hierarchy",
        submenuItems: [
          { label: "Accordion", link: route.uiAccordion, submenu: false, submenuItems: [] },
          { label: "Alerts", link: route.uiAlerts, submenu: false, submenuItems: [] },
          { label: "Avatar", link: route.uiAvatar, submenu: false, submenuItems: [] },
          { label: "Badges", link: route.uiBadges, submenu: false, submenuItems: [] },
          { label: "Breadcrumb", link: route.uiBreadcrumb, submenu: false, submenuItems: [] },
          { label: "Buttons", link: route.uiButtons, submenu: false, submenuItems: [] },
          { label: "Button Group", link: route.uiButtonsGroup, submenu: false, submenuItems: [] },
          { label: "Card", link: route.uiCards, submenu: false, submenuItems: [] },
          { label: "Carousel", link: route.uiCarousel, submenu: false, submenuItems: [] },
          { label: "Collapse", link: route.uiCollapse, submenu: false, submenuItems: [] },
          { label: "Dropdowns", link: route.uiDropdowns, submenu: false, submenuItems: [] },
          { label: "Ratio", link: route.uiRatio, submenu: false, submenuItems: [] },
          { label: "Grid", link: route.uiGrid, submenu: false, submenuItems: [] },
          { label: "Images", link: route.uiImage, submenu: false, submenuItems: [] },
          { label: "Links", link: route.uiLinks, submenu: false, submenuItems: [] },
          { label: "List Group", link: route.uiListGroup, submenu: false, submenuItems: [] },
          { label: "Modals", link: route.uiModals, submenu: false, submenuItems: [] },
          { label: "Offcanvas", link: route.offcanvas, submenu: false, submenuItems: [] },
          { label: "Pagination", link: route.pagination, submenu: false, submenuItems: [] },
          { label: "Progress", link: route.progress, submenu: false, submenuItems: [] },
          { label: "Spinner", link: route.spinner, submenu: false, submenuItems: [] },
          { label: "Tabs", link: route.navTabs, submenu: false, submenuItems: [] },
          { label: "Tooltips", link: route.tooltip, submenu: false, submenuItems: [] },
          { label: "Typography", link: route.typography, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Advanced UI",
        link: "#",
        submenu: true,
        icon: "whirl",
        submenuItems: [
          { label: "Dragula", link: route.dragandDrop, submenu: false, submenuItems: [] },
          { label: "Clipboard", link: route.clipboard, submenu: false, submenuItems: [] },
          
          { label: "Lightbox", link: route.lightbox, submenu: false, submenuItems: [] },
          
        ],
      },
      {
        label: "Forms",
        link: "#",
        submenu: true,
        icon: "forms",
        submenuItems: [
          {
            label: "Form Elements",
            link: "#",
            submenu: true,
            submenuItems: [
              { label: "Basic Inputs", link: route.basicInput, submenu: false, submenuItems: [] },
              { label: "Checkbox & Radios", link: route.checkboxandRadios, submenu: false, submenuItems: [] },
              { label: "Input Groups", link: route.inputGroup, submenu: false, submenuItems: [] },
              { label: "Grid & Gutters", link: route.gridandGutters, submenu: false, submenuItems: [] },
              { label: "Input Masks", link: route.formMask, submenu: false, submenuItems: [] },
              { label: "File Uploads", link: route.fileUpload, submenu: false, submenuItems: [] },
            ],
          },
          {
            label: "Layouts",
            link: "#",
            submenu: true,
            submenuItems: [
              { label: "Horizontal Form", link: route.horizontalForm, submenu: false, submenuItems: [] },
              { label: "Vertical Form", link: route.verticalForm, submenu: false, submenuItems: [] },
              { label: "Floating Labels", link: route.floatingLable, submenu: false, submenuItems: [] },
            ],
          },
          { label: "Form Validation", link: route.formValidation, submenu: false, submenuItems: [] },
          { label: "Form Select", link: route.formSelect, submenu: false, submenuItems: [] },
          { label: "Form Picker", link: route.formpicker, submenu: false, submenuItems: [] },
          { label: "Form Editor", link: route.formeditor, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Tables",
        link: "#",
        submenu: true,
        icon: "table",
        submenuItems: [
          { label: "Basic Tables", link: route.tablesBasic, submenu: false, submenuItems: [] },
          { label: "Data Table", link: route.dataTables, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Charts",
        link: "#",
        submenu: true,
        icon: "chart-pie-3",
        submenuItems: [
          { label: "Apex Charts", link: route.apexChat, submenu: false, submenuItems: [] },
          { label: "ECharts", link: route.echarts, submenu: false, submenuItems: [] },
        ],
      },
      {
        label: "Icons",
        link: "#",
        submenu: true,
        icon: "icons",
        submenuItems: [
          { label: "Fontawesome Icons", link: route.fantawesome, submenu: false, submenuItems: [] },
          { label: "Tabler Icons", link: route.tablericons, submenu: false, submenuItems: [] },
          { label: "Bootstrap Icons", link: route.bootstrapicons, submenu: false, submenuItems: [] },
          { label: "Remix Icons", link: route.remixicons, submenu: false, submenuItems: [] },
          { label: "Ionic Icons", link: route.iconicIcon, submenu: false, submenuItems: [] },
          { label: "Material Icons", link: route.materialIcon, submenu: false, submenuItems: [] },
          { label: "Pe7 Icons", link: route.pe7icon, submenu: false, submenuItems: [] },
          { label: "Themify Icons", link: route.themifyIcon, submenu: false, submenuItems: [] },
          { label: "Weather Icons", link: route.weatherIcon, submenu: false, submenuItems: [] },
          { label: "Typicon Icons", link: route.typicon, submenu: false, submenuItems: [] },
          { label: "Flag Icons", link: route.falgIcons, submenu: false, submenuItems: [] },
        ],
      },
      
    ],
  },
  {
    tittle: "Help",
    submenuItems: [
      { label: "Documentation", link: "#", submenu: false, icon: "file-stack", submenuItems: [] },
      { label: "Changelog", link: "#", submenu: false, icon: "arrow-capsule", submenuItems: [], count: undefined },
      {
        label: "Multi Level",
        link: "#",
        submenu: true,
        icon: "menu-deep",
        submenuItems: [
          { label: "Level 1.1", link: "#", submenu: false, submenuItems: [] },
          {
            label: "Level 1.2",
            link: "#",
            submenu: true,
            submenuItems: [
              { label: "Level 2.1", link: "#", submenu: false, submenuItems: [] },
              {
                label: "Level 2.2",
                link: "#",
                submenu: true,
                submenuItems: [
                  { label: "Level 3.1", link: "#", submenu: false, submenuItems: [] },
                  { label: "Level 3.2", link: "#", submenu: false, submenuItems: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
