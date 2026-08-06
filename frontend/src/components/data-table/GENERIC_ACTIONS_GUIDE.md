# Generic Action Buttons for All List Pages

This guide shows how to use the generic action button system across all your list pages without creating individual components for each page.

## Quick Start

### 1. For Standard Pages (Payments, Contacts, Companies, etc.)

```tsx
import { useActionColumn } from '../components/data-table/withActions';
import { getActionsForPage } from '../config/actionConfigs';

const MyListPage = () => {
  // Get pre-configured actions for your page type
  const actions = getActionsForPage('payments'); // or 'contacts', 'companies', etc.
  const actionColumn = useActionColumn(actions);

  const columns = [
    // ... your other columns
    actionColumn, // This automatically includes the action buttons
  ];

  return (
    <Datatable columns={columns} dataSource={data} />
  );
};
```

### 2. For Custom Actions

```tsx
import { createCustomActions } from '../config/actionConfigs';
import { ActionItem } from '../components/data-table/GenericActionButton';

const MyCustomListPage = () => {
  // Define your custom actions
  const customActions: ActionItem[] = createCustomActions([
    {
      id: 'view',
      label: 'View Details',
      icon: 'ti ti-eye text-blue-light',
      type: 'offcanvas',
      targetId: 'offcanvas_view'
    },
    {
      id: 'custom-action',
      label: 'Custom Action',
      icon: 'ti ti-star text-warning',
      type: 'function',
      onClick: (recordKey: string) => {
        console.log('Custom action for:', recordKey);
        // Your custom logic here
      }
    }
  ]);

  const actionColumn = useActionColumn(customActions);
  
  // ... rest of your component
};
```

## Available Page Types

The following page types have pre-configured actions:

- `payments` - Preview, Delete
- `contacts` - View, Edit, Delete  
- `companies` - View, Edit, Delete
- `deals` - View, Edit, Convert, Delete
- `leads` - View, Edit, Convert to Deal, Delete
- `projects` - View, Edit, Duplicate, Delete

## Action Types

### 1. Modal Actions
```tsx
{
  id: 'delete',
  label: 'Delete',
  icon: 'ti ti-trash',
  type: 'modal',
  targetId: 'delete_modal',
  className: 'text-danger hover:text-danger'
}
```

### 2. Offcanvas Actions
```tsx
{
  id: 'view',
  label: 'View',
  icon: 'ti ti-eye text-blue-light',
  type: 'offcanvas',
  targetId: 'offcanvas_view'
}
```

### 3. Function Actions
```tsx
{
  id: 'convert',
  label: 'Convert',
  icon: 'ti ti-arrow-right text-success',
  type: 'function',
  onClick: (recordKey: string) => {
    console.log('Converting:', recordKey);
    // Your custom logic
  }
}
```

### 4. Link Actions
```tsx
{
  id: 'external',
  label: 'External Link',
  icon: 'ti ti-external-link',
  type: 'link',
  href: 'https://example.com'
}
```

## Complete Examples

### Example 1: Contacts List
```tsx
import React, { useState } from 'react';
import Datatable from '../components/data-table';
import { useActionColumn } from '../components/data-table/withActions';
import { getActionsForPage } from '../config/actionConfigs';

const ContactsList = () => {
  const [searchText, setSearchText] = useState<string>("");
  
  // Get standard contact actions (View, Edit, Delete)
  const actions = getActionsForPage('contacts');
  const actionColumn = useActionColumn(actions);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    actionColumn, // Automatically includes View, Edit, Delete
  ];

  return (
    <Datatable 
      columns={columns} 
      dataSource={contactsData} 
      searchText={searchText} 
    />
  );
};
```

### Example 2: Custom Deals List
```tsx
import React, { useState } from 'react';
import Datatable from '../components/data-table';
import { useActionColumn } from '../components/data-table/withActions';
import { createCustomActions } from '../config/actionConfigs';

const DealsList = () => {
  const [searchText, setSearchText] = useState<string>("");
  
  // Custom actions for deals
  const actions = createCustomActions([
    {
      id: 'view',
      label: 'View Deal',
      icon: 'ti ti-eye text-blue-light',
      type: 'offcanvas',
      targetId: 'offcanvas_view'
    },
    {
      id: 'convert',
      label: 'Mark as Won',
      icon: 'ti ti-check text-success',
      type: 'function',
      onClick: (recordKey: string) => {
        // Convert deal to won
        console.log('Converting deal:', recordKey);
      }
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal',
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ]);

  const actionColumn = useActionColumn(actions);

  const columns = [
    { title: "Deal Name", dataIndex: "dealName" },
    { title: "Value", dataIndex: "value" },
    { title: "Stage", dataIndex: "stage" },
    actionColumn, // Custom actions
  ];

  return (
    <Datatable 
      columns={columns} 
      dataSource={dealsData} 
      searchText={searchText} 
    />
  );
};
```

## Adding New Page Types

To add a new page type, update `src/config/actionConfigs.ts`:

```tsx
// Add to actionConfigs object
export const actionConfigs = {
  // ... existing configs
  tasks: [
    {
      id: 'view',
      label: 'View Task',
      icon: 'ti ti-eye text-blue-light',
      type: 'offcanvas',
      targetId: 'offcanvas_view'
    },
    {
      id: 'complete',
      label: 'Mark Complete',
      icon: 'ti ti-check text-success',
      type: 'function',
      onClick: (recordKey: string) => {
        console.log('Completing task:', recordKey);
      }
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'ti ti-trash',
      type: 'modal',
      targetId: 'delete_modal',
      className: 'text-danger hover:text-danger'
    }
  ]
};
```

Then use it in your component:

```tsx
const actions = getActionsForPage('tasks');
const actionColumn = useActionColumn(actions);
```

## Benefits

1. **No Code Duplication**: One system for all list pages
2. **Consistent UI**: All action buttons look and behave the same
3. **Easy Customization**: Mix and match actions as needed
4. **Type Safety**: Full TypeScript support
5. **Maintainable**: Changes to action behavior apply everywhere
6. **Scalable**: Easy to add new page types and actions

## Migration Guide

To migrate existing list pages:

1. Remove old action column definitions
2. Import the action system:
   ```tsx
   import { useActionColumn } from '../components/data-table/withActions';
   import { getActionsForPage } from '../config/actionConfigs';
   ```
3. Add action column:
   ```tsx
   const actions = getActionsForPage('your-page-type');
   const actionColumn = useActionColumn(actions);
   // Add actionColumn to your columns array
   ```
4. Include modal components in your page
5. Test the functionality

That's it! Your action buttons will now work consistently across all list pages.
