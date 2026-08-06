import { useActionColumn } from '../components/data-table/withActions';
import { getActionsForPage } from '../config/actionConfigs';
import type { ActionItem } from '../types/actionTypes';

/**
 * Utility functions for quickly setting up action columns in list pages
 */

/**
 * Get a standard action column for common page types
 */
export const getStandardActionColumn = (pageType: 'payments' | 'contacts' | 'companies' | 'deals' | 'leads' | 'projects') => {
  const actions = getActionsForPage(pageType);
  return useActionColumn(actions);
};

/**
 * Get a custom action column with specific actions
 */
export const getCustomActionColumn = (actions: ActionItem[]) => {
  return useActionColumn(actions);
};

/**
 * Quick setup for common list page patterns
 */
export const setupListPageActions = {
  /**
   * Standard CRUD actions (View, Edit, Delete)
   */
  crud: (pageType: 'contacts' | 'companies' | 'projects' = 'contacts') => {
    return getStandardActionColumn(pageType);
  },

  /**
   * Payment actions (Preview, Delete)
   */
  payments: () => {
    return getStandardActionColumn('payments');
  },

  /**
   * Deal actions (View, Edit, Convert, Delete)
   */
  deals: () => {
    return getStandardActionColumn('deals');
  },

  /**
   * Lead actions (View, Edit, Convert to Deal, Delete)
   */
  leads: () => {
    return getStandardActionColumn('leads');
  },

  /**
   * Custom actions with specific functionality
   */
  custom: (actions: ActionItem[]) => {
    return getCustomActionColumn(actions);
  }
};

/**
 * Pre-built action configurations for common use cases
 */
export const commonActions = {
  /**
   * Simple view and delete actions
   */
  viewDelete: [
    {
      id: 'view',
      label: 'View',
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

  /**
   * Full CRUD actions
   */
  fullCrud: [
    {
      id: 'view',
      label: 'View',
      icon: 'ti ti-eye text-blue-light',
      type: 'offcanvas' as const,
      targetId: 'offcanvas_view'
    },
    {
      id: 'edit',
      label: 'Edit',
      icon: 'ti ti-edit text-warning',
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

  /**
   * Actions with custom functions
   */
  withCustomActions: (customActions: ActionItem[]) => {
    return [
      {
        id: 'view',
        label: 'View',
        icon: 'ti ti-eye text-blue-light',
        type: 'offcanvas' as const,
        targetId: 'offcanvas_view'
      },
      ...customActions,
      {
        id: 'delete',
        label: 'Delete',
        icon: 'ti ti-trash',
        type: 'modal' as const,
        targetId: 'delete_modal',
        className: 'text-danger hover:text-danger'
      }
    ];
  }
};
