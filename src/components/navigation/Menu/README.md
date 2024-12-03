# Menu Component

A flexible menu component that supports nested items, icons, and different orientations.

## Usage

```tsx
import { Menu } from '@webflow/ui-kit';
import { Home, Settings, Users } from 'react-feather';
const items = [
{
id: '1',
label: 'Home',
icon: <Home size={16} />,
href: '/',
},
{
id: '2',
label: 'Settings',
icon: <Settings size={16} />,
items: [
{
id: '2-1',
label: 'Profile',
href: '/settings/profile',
},
],
},
{
id: '3',
label: 'Users',
icon: <Users size={16} />,
disabled: true,
},
];
// Basic usage
<Menu items={items} />
// With all props
<Menu
items={items}
variant="vertical"
size="medium"
activeId="1"
expandedIds={['2']}
onItemClick={(item) => console.log(Clicked ${item.label})}
onExpandChange={(id, expanded) => console.log(Item ${id} ${expanded ? 'expanded' : 'collapsed'})}
showIcons
bordered
rounded
/>
```

## Props

| Prop           | Type                                    | Default    | Description                             |
| -------------- | --------------------------------------- | ---------- | --------------------------------------- |
| items          | MenuItem[]                              | required   | Array of menu items                     |
| variant        | 'vertical' \| 'horizontal'              | 'vertical' | Menu orientation                        |
| size           | 'small' \| 'medium' \| 'large'          | 'medium'   | Size of menu items                      |
| activeId       | string                                  | -          | ID of the active item                   |
| expandedIds    | string[]                                | []         | IDs of expanded items                   |
| onItemClick    | (item: MenuItem) => void                | -          | Callback when item is clicked           |
| onExpandChange | (id: string, expanded: boolean) => void | -          | Callback when submenu expands/collapses |
| showIcons      | boolean                                 | true       | Whether to show icons                   |
| bordered       | boolean                                 | false      | Whether to show border                  |
| rounded        | boolean                                 | false      | Whether to show rounded corners         |

## MenuItem Interface

```tsx
interface MenuItem {
id: string; // Unique identifier
label: ReactNode; // Item label
icon?: ReactNode; // Optional icon
href?: string; // Optional URL
onClick?: () => void; // Optional click handler
disabled?: boolean; // Whether item is disabled
items?: MenuItem[]; // Submenu items
}
Menu
tsx
<Menu
items={items}
variant="horizontal"
activeId="1"
/>
```

## Examples

### Horizontal Menu

```tsx
<Menu items={items} variant="horizontal" activeId="1" />
```

### With Submenu

```tsx
<Menu items={items} expandedIds={['2']} bordered rounded />
```

### Custom Styling

```tsx
<Menu
  items={items}
  style={{
    width: '240px',
    backgroundColor: '#f5f5f5',
  }}
/>
```
