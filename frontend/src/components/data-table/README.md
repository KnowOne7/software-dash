# Dynamic Modal and Offcanvas in Data Tables

This solution addresses the issue where modals and offcanvas components don't work properly when rendered dynamically in data tables through JSON data.

## Problem

When modals and offcanvas components are rendered dynamically in data tables (using `data-drawer-target`, `data-modal-target` attributes), the Flowbite JavaScript event listeners are not attached to the dynamically created elements, causing them to not function properly.

## Solution

### 1. Custom Hooks (`useDynamicFlowbite.ts`)

- `useDynamicFlowbite()`: General hook for Flowbite initialization
- `useDataTableFlowbite()`: Specific hook for data table components

### 2. ActionButton Component (`ActionButton.tsx`)

A reusable component that handles action buttons in data tables with proper Flowbite initialization:

```tsx
<ActionButton
  recordKey={record.key}
  previewModalId="offcanvas_view"
  deleteModalId="delete_modal"
  onPreview={(key) => console.log('Preview', key)}
  onDelete={(key) => console.log('Delete', key)}
/>
```

### 3. Modal Utilities (`modalUtils.ts`)

Utility functions for programmatically controlling modals and offcanvas:

```tsx
import { showModal, hideModal, showOffcanvas, hideOffcanvas } from '../utils/modalUtils';

// Show/hide modals
showModal('my-modal');
hideModal('my-modal');

// Show/hide offcanvas
showOffcanvas('my-offcanvas');
hideOffcanvas('my-offcanvas');
```

### 4. Updated Data Table Component

The data table component now automatically reinitializes Flowbite when:
- Data changes (search, filter)
- Pagination changes
- Content is dynamically rendered

## Usage Example

### In your data table column definition:

```tsx
const columns = [
  // ... other columns
  {
    title: "Action",
    dataIndex: "Action",
    render: (_: any, record: any) => (
      <ActionButton
        recordKey={record.key}
        previewModalId="offcanvas_view"
        deleteModalId="delete_modal"
      />
    ),
  },
];
```

### Include modal components in your page:

```tsx
import PaymentsModal from "./paymentsModal";

const MyPage = () => {
  return (
    <>
      {/* Your page content */}
      <Datatable columns={columns} dataSource={data} />
      
      {/* Include modal components */}
      <PaymentsModal />
    </>
  );
};
```

## Key Features

1. **Automatic Reinitialization**: Flowbite is automatically reinitialized when dynamic content changes
2. **Fallback Support**: Works with both custom handlers and data attributes
3. **Type Safety**: Full TypeScript support
4. **Reusable**: ActionButton component can be used across different data tables
5. **Utility Functions**: Programmatic control of modals and offcanvas

## Best Practices

1. Always include modal/offcanvas components in your page component
2. Use the ActionButton component for consistent behavior
3. Provide unique IDs for modals and offcanvas
4. Use the utility functions for programmatic control when needed

## Troubleshooting

If modals/offcanvas still don't work:

1. Ensure the modal/offcanvas components are included in your page
2. Check that the IDs match between ActionButton and modal components
3. Verify that Flowbite is properly initialized in your app
4. Use the browser dev tools to check if event listeners are attached
