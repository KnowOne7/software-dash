
import GenericActionButton from './GenericActionButton';
import type { ActionItem } from '../../types/actionTypes';

/**
 * Higher-order component that adds action buttons to any data table
 */
export const withActions = (
  actions: ActionItem[],
  _pageType?: string
) => {
  return {
    title: "Action",
    dataIndex: "Action",
    render: (_: any, record: any) => (
      <GenericActionButton
        recordKey={record.key}
        actions={actions}
      />
    ),
    sorter: (a: any, b: any) => a.Action?.length - b.Action?.length,
  };
};

/**
 * Hook that provides a ready-to-use action column for data tables
 */
export const useActionColumn = (actions: ActionItem[]) => {
  return {
    title: "Action",
    dataIndex: "Action",
    render: (_: any, record: any) => (
      <GenericActionButton
        recordKey={record.key}
        actions={actions}
      />
    ),
    sorter: (a: any, b: any) => a.Action?.length - b.Action?.length,
  };
};
