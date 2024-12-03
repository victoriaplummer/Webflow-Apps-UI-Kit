# Breadcrumb Component

A navigation component that helps users understand their current location in a website's hierarchy.

## Usage

```tsx
import { Breadcrumb } from '@webflow/ui-kit';
const items = [
{
id: '1',
label: 'Home',
href: '/',
},
{
id: '2',
label: 'Settings',
href: '/settings',
},
{
id: '3',
label: 'Profile',
href: '/settings/profile',
},
];
// Basic usage
<Breadcrumb items={items} />
// With all props
<Breadcrumb
items={items}
separator=">"
maxItems={3}
size="medium"
activeItemColor="#0066FF"
onItemClick={(item) => console.log(Clicked ${item.label})}
/>
```

## Props

| Prop            | Type                           | Default              | Description                        |
| --------------- | ------------------------------ | -------------------- | ---------------------------------- |
| items           | BreadcrumbItem[]               | required             | Array of breadcrumb items          |
| separator       | string \| ReactNode            | '/'                  | Separator between items            |
| maxItems        | number                         | -                    | Maximum number of items to display |
| size            | 'small' \| 'medium' \| 'large' | 'medium'             | Size of the breadcrumb items       |
| activeItemColor | string                         | theme.colors.primary | Color of the active (last) item    |
| onItemClick     | (item: BreadcrumbItem) => void | -                    | Callback when an item is clicked   |

## BreadcrumbItem Interface

```tsx
interface BreadcrumbItem {
  id: string; // Unique identifier
  label: ReactNode; // Item label (can be text or component)
  href?: string; // Optional URL
  onClick?: () => void; // Optional click handler
}
```

## Examples

### With Custom Separator

```tsx
<Breadcrumb items={items} separator={<ChevronRight size={16} />} />
```

### With Icons

```tsx
<Breadcrumb
  items={[
    {
      id: '1',
      label: (
        <span>
          <HomeIcon /> Home
        </span>
      ),
      href: '/',
    },
    // ...more items
  ]}
/>
```

### Truncated

```tsx
<Breadcrumb items={items} maxItems={3} />
```
