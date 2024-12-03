# Tabs Component

A flexible tabbed interface component for switching between different views.

## Usage

```tsx
import { Tabs } from '@webflow/ui-kit';
const tabs = [
{
id: 'tab1',
label: 'First Tab',
content: <div>First tab content</div>
},
{
id: 'tab2',
label: 'Second Tab',
content: <div>Second tab content</div>
}
];
// Basic usage
<Tabs tabs={tabs} />
// With all props
<Tabs
tabs={tabs}
activeTab="tab1"
onChange={(tabId) => console.log(Tab changed to ${tabId})}
variant="pills"
size="medium"
align="center"
fullWidth
/>
```

## Props

| Prop      | Type                                 | Default   | Description                         |
| --------- | ------------------------------------ | --------- | ----------------------------------- |
| tabs      | Tab[]                                | required  | Array of tab objects                |
| activeTab | string                               | first tab | Currently active tab ID             |
| onChange  | (tabId: string) => void              | -         | Callback when tab changes           |
| variant   | 'default' \| 'pills' \| 'underlined' | 'default' | Visual style variant                |
| size      | 'small' \| 'medium' \| 'large'       | 'medium'  | Size of the tabs                    |
| align     | 'start' \| 'center' \| 'end'         | 'start'   | Horizontal alignment                |
| fullWidth | boolean                              | false     | Whether tabs should take full width |

## Tab Object

```typescript
interface Tab {
  id: string; // Unique identifier
  label: ReactNode; // Tab label (can be text or component)
  content: ReactNode; // Tab content
  disabled?: boolean; // Whether tab is disabled
}
```

## Accessibility

- Uses proper ARIA roles for tabs and panels
- Keyboard navigation support
- Proper disabled state handling
- Focus management

## Examples

### Pills Variant

```tsx
<Tabs tabs={tabs} variant="pills" align="center" />
```

### Underlined Variant

```tsx
<Tabs tabs={tabs} variant="underlined" size="large" />
```

### Full Width

```tsx
<Tabs tabs={tabs} fullWidth align="center" />
```
