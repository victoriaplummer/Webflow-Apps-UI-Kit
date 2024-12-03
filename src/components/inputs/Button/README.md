# Button Component

A versatile button component that supports different variants, sizes, and states.

## Usage

```tsx
tsx
import { Button } from '../inputs/Button'
// Basic usage
<Button onClick={() => console.log('clicked')}>
Click me
</Button>
// Different variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="danger">Danger</Button>
// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
// States
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button fullWidth>Full Width</Button>
```

## Props

- `variant`: 'primary' | 'secondary' | 'tertiary' | 'danger'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: Boolean to disable the button
- `loading`: Boolean to show loading state
- `fullWidth`: Boolean to make button full width
- `onClick`: Click handler function
- `type`: 'button' | 'submit' | 'reset'
- `className`: Optional CSS class name
