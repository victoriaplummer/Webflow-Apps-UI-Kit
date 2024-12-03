# EmptyState Component

A flexible empty state component for displaying placeholder content when no data is available.

## Usage

```tsx
import { EmptyState } from '../feedback/EmptyState'

// Basic usage
<EmptyState
  title="No results found"
  description="Try adjusting your search or filters"
/>

// With action button
<EmptyState
  title="No items yet"
  description="Start by adding your first item"
  action={{
    label: 'Add Item',
    onClick: () => console.log('Add clicked'),
  }}
/>

// With icon
<EmptyState
  icon={<SearchIcon />}
  title="No search results"
  description="Try different keywords"
/>

// With custom image
<EmptyState
  image="/empty-state.svg"
  title="Your inbox is empty"
  description="Messages you receive will appear here"
/>

// Different sizes
<EmptyState
  title="No data"
  size="small"
/>

<EmptyState
  title="No data"
  size="large"
/>

// Left aligned
<EmptyState
  title="No notifications"
  align="left"
/>
```

## Props

### Basic Props

- `title`: Main message to display (required)
- `description`: Optional secondary message
- `className`: Optional CSS class name

### Visual Props

- `icon`: Optional icon element (React.ReactNode)
- `image`: Optional image URL (string)
- `size`: Size variant ('small' | 'medium' | 'large')
- `align`: Content alignment ('center' | 'left' | 'right')

### Action Props

- `action`: Optional action button configuration
  - `label`: Button text
  - `onClick`: Click handler function
  - `disabled`: Whether the button is disabled

## Features

- Multiple size variants
- Flexible content alignment
- Icon or image support
- Optional action button
- Responsive layout
- Customizable styling
- Accessible markup

## Size Variants

### Small

- Compact layout for tight spaces
- Icon size: 32px
- Image size: 120px
- Title size: 16px
- Description size: 14px

### Medium (Default)

- Balanced layout for most use cases
- Icon size: 48px
- Image size: 200px
- Title size: 20px
- Description size: 16px

### Large

- Prominent layout for empty states that need emphasis
- Icon size: 64px
- Image size: 300px
- Title size: 24px
- Description size: 18px

## Common Use Cases

### No Search Results

```tsx
<EmptyState
  icon={<SearchIcon />}
  title="No matching results"
  description="Try adjusting your search terms or filters"
  action={{
    label: 'Clear Filters',
    onClick: handleClearFilters,
  }}
/>
```

### Empty List

```tsx
<EmptyState
  icon={<ListIcon />}
  title="No items yet"
  description="Get started by creating your first item"
  action={{
    label: 'Create Item',
    onClick: handleCreateItem,
  }}
/>
```

### Error State

```tsx
<EmptyState
  icon={<ErrorIcon />}
  title="Unable to load data"
  description="There was a problem loading your content"
  action={{
    label: 'Try Again',
    onClick: handleRetry,
  }}
/>
```

## Accessibility

- Uses semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where appropriate
- Keyboard navigation support for action button

## Styling

- Consistent spacing and alignment
- Responsive image sizing
- Flexible width adaptation
- Clear visual hierarchy
- Support for custom className
- Theme-aware color usage
