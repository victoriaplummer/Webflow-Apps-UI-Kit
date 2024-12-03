# Spinner Component

A flexible loading spinner component with different sizes and variants.

## Usage

```tsx
import { Spinner } from '../data-display/Spinner'

// Basic usage
<Spinner />

// With label
<Spinner label="Loading content..." />

// Different sizes
<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />

// Different variants
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="light" /> // For dark backgrounds
<Spinner variant="dark" />  // For light backgrounds
```

## Props

### Basic Props

- `size`: Size variant ('small' | 'medium' | 'large')
- `variant`: Color variant ('primary' | 'secondary' | 'light' | 'dark')
- `label`: Optional loading text
- `className`: Optional CSS class name

## Features

- Multiple size options
- Color variants for different backgrounds
- Optional loading label
- Accessible loading state
- Smooth animation
- Screen reader support
- Customizable via className

## Accessibility

- Uses role="status" for screen readers
- Includes hidden loading text
- Aria-hidden on decorative elements
- High contrast color options
