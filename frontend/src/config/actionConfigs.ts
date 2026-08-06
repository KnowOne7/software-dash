import type { ActionItem } from '../types/actionTypes';

// Common action configurations for different list pages
export const actionConfigs = {
  // Payments page actions
  payments: [
    {
      id: 'preview',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_view'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  sources: [
    {
      id: 'source_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  lostReason: [
    {
      id: 'lostreason_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  contacts: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  contactStage: [
    {
      id: 'contactstage_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light',
      type: 'link' as const,
      href: '/crm/contact-details'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  industry: [
    {
      id: 'industry_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  calls: [
    {
      id: 'calls_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  companies: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light',
      type: 'link' as const,
      href: '/crm/companies-details'
    },
  ],

  deals: [
    {
      id: 'add',
      label: 'Add Activity',
      icon: 'ti ti-bounce-right me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light',
      type: 'link' as const,
      href: '/crm/deals-details'
    },
  ],

  leads: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light',
      type: 'link' as const,
      href: '/crm/leads-details'
    },
  ],

  pipeline: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  campaign: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  projects: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'clone',
      label: 'Clone Project',
      icon: 'ti ti-clipboard-copy text-green me-1',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'print',
      label: 'Print',
      icon: 'ti ti-printer me-1',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'add',
      label: 'Add New Task',
      icon: 'ti ti-subtask me-1',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  activities: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  contract: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'link' as const,
      href: '/content/edit-pages'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'clone',
      label: 'Clone',
      icon: 'ti ti-copy me-1',
      type: 'none' as const,
      targetId: 'none'
    },
    {
      id: 'view',
      label: 'View Contract',
      icon: 'ti ti-clipboard-copy me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_view'
    },
    {
      id: 'mark',
      label: 'Mark as Signed',
      icon: 'ti ti-checks me-1',
      type: 'none' as const,
      targetId: 'none'
    },
    {
      id: 'print',
      label: 'Print',
      icon: 'ti ti-printer me-1',
      type: 'none' as const,
      targetId: 'none'
    },
  ],

  pages: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'link' as const,
      href: '/content/edit-pages'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },

  ],

  // Add below

  proposal: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'View Proposal',
      icon: 'ti ti-clipboard-copy me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'mark',
      label: 'Mark as Accepted',
      icon: 'ti ti-checks me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'draft',
      label: 'Mark as Draft',
      icon: 'ti ti-file me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'declined',
      label: 'Mark as Declined',
      icon: 'ti ti-sticker me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'estimate',
      label: 'Convert to Estimate',
      icon: 'ti ti-subtask me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'invoice',
      label: 'Convert to Invoice',
      icon: 'ti ti-file-invoice me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'print',
      label: 'Print',
      icon: 'ti ti-printer me-1',
      type: 'none' as const,
      targetId: 'none',
    },

  ],

  invoicesList: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'View Invoices',
      icon: 'ti ti-clipboard-copy me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'mark',
      label: 'Mark as Paid',
      icon: 'ti ti-checks me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'partiallyPaid',
      label: 'Mark as Partially Paid',
      icon: 'ti ti-file me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'unpaid',
      label: 'Mark as Unpaid',
      icon: 'ti ti-sticker me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'print',
      label: 'Print',
      icon: 'ti ti-printer me-1',
      type: 'none' as const,
      targetId: 'none',
    },
  ],
  blogcateogories: [
    {
      id: 'blogcategories_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  blogcomments: [
    {
      id: 'blogcomments_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  blogTags: [
    {
      id: 'blogtags_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  countriesTags: [
    {
      id: 'countries_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  StatesTags: [
    {
      id: 'state_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  citesTags: [
    {
      id: 'cites_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],
  testimonialsTags: [
    {
      id: 'testimonials_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_modal'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ],

  estimationList: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'view',
      label: 'View Estimation',
      icon: 'ti ti-clipboard-copy me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'mark',
      label: 'Mark as Accepted',
      icon: 'ti ti-checks me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'draft',
      label: 'Mark as Draft',
      icon: 'ti ti-file me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'declined',
      label: 'Mark as Declined',
      icon: 'ti ti-sticker me-1',
      type: 'none' as const,
      targetId: 'none',
    },
    {
      id: 'print',
      label: 'Print',
      icon: 'ti ti-printer me-1',
      type: 'none' as const,
      targetId: 'none',
    },
  ],

  company: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'View',
      icon: 'ti ti-eye text-blue-light me-1',
      type: 'modal' as const,
      targetId: 'view_modal',
    },
  ],

  subscription: [
    {
      id: 'download',
      label: 'Download',
      icon: 'ti ti-edit me-1',
      type: 'none' as const,
      targetId: 'none'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light me-1',
      type: 'modal' as const,
      targetId: 'view_modal',
    },
  ],

  packages: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],

  domain: [
    {
      id: 'download',
      label: 'Download',
      icon: 'ti ti-edit me-1',
      type: 'none' as const,
      targetId: 'none'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light me-1',
      type: 'modal' as const,
      targetId: 'view_modal',
    },
  ],

  purchaseTransation: [
    {
      id: 'download',
      label: 'Download',
      icon: 'ti ti-edit me-1',
      type: 'none' as const,
      targetId: 'none'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
    {
      id: 'view',
      label: 'Preview',
      icon: 'ti ti-eye text-blue-light me-1',
      type: 'modal' as const,
      targetId: 'view_modal',
    },
  ],

  manageUser: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],
  faq: [
    {
      id: 'faq_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],
  role: [
    {
      id: 'role_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
    {
      id: 'permission',
      label: 'permission',
      icon: 'ti ti-shield',
      type: 'link' as const,
      href: '/user-management/permissions',
      className: 'text-danger hover:text-danger'
    },
  ],
  deleterquest: [
    {
      id: 'approve',
      label: 'Approve',
      icon: 'ti ti-check me-1',
      type: 'modal' as const,
      targetId: 'approve_modal'
    },
    {
      id: 'reject',
      label: 'Reject',
      icon: 'ti ti-x',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],
  contactmessage: [
    {
      id: 'contactmessage_edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_edit'
    },
     {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],





  //Add below

  
  contactmessages: [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit me-1',
      type: 'modal' as const,
      targetId: 'edit_contact'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal' as const,
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    },
  ],

};

// Helper function to get actions for a specific page
export const getActionsForPage = (pageType: keyof typeof actionConfigs): ActionItem[] => {
  return actionConfigs[pageType] || [];
};

// Helper function to create custom actions
export const createCustomActions = (actions: ActionItem[]): ActionItem[] => {
  return actions;
};
